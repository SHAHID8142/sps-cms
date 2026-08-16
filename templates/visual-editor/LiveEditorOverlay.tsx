import React, { useState, useEffect, useRef } from 'react';

interface LiveEditorOverlayProps {
  pageSlug: string;
}

interface ActiveInspector {
  element: HTMLElement;
  key: string;
  type: 'text' | 'cta' | 'image';
  text: string;
  link: string;
  targetBlank: boolean;
  rect: DOMRect;
}

export const LiveEditorOverlay: React.FC<LiveEditorOverlayProps> = ({ pageSlug }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [publishedToast, setPublishedToast] = useState(false);
  const [inspector, setInspector] = useState<ActiveInspector | null>(null);

  const inspectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isEditing) return;

      const target = e.target as HTMLElement;
      if (target.closest('#sps-cms-floating-dock') || target.closest('#sps-cms-inspector')) {
        return;
      }

      const spsEl = target.closest('[data-sps-key]') as HTMLElement | null;
      if (spsEl) {
        e.preventDefault();
        e.stopPropagation();

        const key = spsEl.getAttribute('data-sps-key') || '';
        const type = (spsEl.getAttribute('data-sps-type') as any) || (spsEl.tagName === 'A' || spsEl.closest('a') ? 'cta' : 'text');
        
        let link = spsEl.getAttribute('data-sps-link') || '';
        if (!link && spsEl.tagName === 'A') {
          link = spsEl.getAttribute('href') || '';
        } else if (!link && spsEl.closest('a')) {
          link = spsEl.closest('a')?.getAttribute('href') || '';
        }

        const textEl = spsEl.querySelector('[data-sps-field="text"]') as HTMLElement || spsEl;
        const text = textEl.innerText.trim();
        const targetBlank = spsEl.getAttribute('target') === '_blank' || spsEl.closest('a')?.getAttribute('target') === '_blank';

        const rect = spsEl.getBoundingClientRect();

        setInspector({
          element: spsEl,
          key,
          type,
          text,
          link,
          targetBlank,
          rect
        });
      } else {
        setInspector(null);
      }
    };

    if (isEditing) {
      document.addEventListener('click', handleClick, true);
    }

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [isEditing]);

  const toggleMode = () => {
    const next = !isEditing;
    setIsEditing(next);
    setInspector(null);

    const editables = document.querySelectorAll('[data-sps-key]');
    editables.forEach(el => {
      const htmlEl = el as HTMLElement;
      if (next) {
        htmlEl.classList.add('ring-2', 'ring-emerald-400/80', 'ring-offset-2', 'ring-offset-slate-950', 'rounded-lg', 'cursor-pointer', 'transition-all');
        htmlEl.setAttribute('title', 'Click to edit text & link destination');
      } else {
        htmlEl.classList.remove('ring-2', 'ring-emerald-400/80', 'ring-offset-2', 'ring-offset-slate-950', 'rounded-lg', 'cursor-pointer');
        htmlEl.removeAttribute('title');
      }
    });
  };

  const handleApplyInspector = () => {
    if (!inspector) return;
    const { element, text, link, targetBlank } = inspector;

    const textEl = element.querySelector('[data-sps-field="text"]') as HTMLElement || element;
    textEl.innerText = text;

    if (link) {
      element.setAttribute('data-sps-link', link);
      if (element.tagName === 'A') {
        element.setAttribute('href', link);
      } else {
        const parentA = element.closest('a');
        if (parentA) parentA.setAttribute('href', link);
      }
    }

    if (targetBlank) {
      element.setAttribute('target', '_blank');
      element.closest('a')?.setAttribute('target', '_blank');
    } else {
      element.removeAttribute('target');
      element.closest('a')?.removeAttribute('target');
    }

    setDirty(true);
    setInspector(null);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const nodes = document.querySelectorAll('[data-sps-key]');
      const content: Record<string, string> = {};

      nodes.forEach((node) => {
        const key = node.getAttribute('data-sps-key');
        if (!key) return;

        const textEl = node.querySelector('[data-sps-field="text"]') as HTMLElement || node;
        content[`${key}_text`] = textEl.innerText.trim();

        const link = node.getAttribute('data-sps-link') || (node.tagName === 'A' ? node.getAttribute('href') : node.closest('a')?.getAttribute('href'));
        if (link) {
          content[`${key}_link`] = link;
        }

        content[key] = textEl.innerText.trim();
      });

      const res = await fetch('/api/cms/save-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: pageSlug, content })
      });

      if (res.ok) {
        setDirty(false);
        setPublishedToast(true);
        setTimeout(() => setPublishedToast(false), 3000);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div
        id="sps-cms-floating-dock"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      >
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-12 h-12 rounded-full bg-slate-950/90 border border-emerald-500/50 shadow-2xl backdrop-blur-xl flex items-center justify-center text-emerald-400 font-bold hover:scale-110 transition-transform"
            title="Expand SPS-CMS Editor Dock"
          >
            ⚡
          </button>
        ) : (
          <div className="bg-slate-950/95 border border-emerald-500/40 rounded-full px-4 py-2 flex items-center gap-3 shadow-2xl backdrop-blur-xl text-white text-xs font-sans ring-1 ring-white/10">
            <div className="flex items-center gap-2 pr-2 border-r border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-emerald-400 tracking-wide uppercase text-[11px] hidden sm:inline">
                SPS-CMS Live
              </span>
            </div>

            {publishedToast && (
              <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold animate-fade-in">
                ✨ Saved to DB!
              </span>
            )}

            <button
              onClick={toggleMode}
              className={`px-3.5 py-1.5 rounded-full font-bold transition-all flex items-center gap-1.5 ${
                isEditing
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 ring-2 ring-emerald-300'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <span>{isEditing ? '⚡ Edit Mode: ON' : '👁️ Edit Mode: OFF'}</span>
            </button>

            {dirty && (
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-1.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-full shadow-lg shadow-emerald-500/30 animate-bounce"
              >
                {saving ? 'Saving...' : '🚀 Publish Changes'}
              </button>
            )}

            <a
              href="/admin"
              className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 rounded-full font-medium hidden sm:inline"
            >
              Admin Portal ↗
            </a>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-slate-400 hover:text-white px-1.5 py-0.5 text-sm"
              title="Minimize to floating bubble"
            >
              ▾
            </button>
          </div>
        )}
      </div>

      {inspector && (
        <div
          id="sps-cms-inspector"
          ref={inspectorRef}
          style={{
            position: 'fixed',
            top: Math.min(window.innerHeight - 320, Math.max(60, inspector.rect.bottom + 10)),
            left: Math.min(window.innerWidth - 360, Math.max(20, inspector.rect.left)),
            zIndex: 999999
          }}
          className="w-80 bg-slate-950 border border-emerald-500/50 rounded-2xl p-5 shadow-2xl space-y-4 text-slate-100 text-xs backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-bold text-white text-xs uppercase tracking-wider">
                {inspector.type === 'cta' ? '🔗 Edit CTA & Link' : '✏️ Edit Text Block'}
              </span>
            </div>
            <button
              onClick={() => setInspector(null)}
              className="text-slate-400 hover:text-white text-base leading-none"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Visible Text / Label *
              </label>
              <input
                type="text"
                value={inspector.text}
                onChange={(e) => setInspector({ ...inspector, text: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-medium focus:outline-none focus:border-emerald-500 text-xs"
              />
            </div>

            {inspector.type === 'cta' && (
              <>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Destination URL / Page Link 🎯
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. /packages or https://wa.me/..."
                    value={inspector.link}
                    onChange={(e) => setInspector({ ...inspector, link: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-emerald-400 font-mono focus:outline-none focus:border-emerald-500 text-xs"
                  />
                  <div className="flex gap-1.5 mt-1.5">
                    <button
                      type="button"
                      onClick={() => setInspector({ ...inspector, link: '/packages' })}
                      className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 hover:text-white px-2 py-0.5 rounded"
                    >
                      /packages
                    </button>
                    <button
                      type="button"
                      onClick={() => setInspector({ ...inspector, link: '/#services' })}
                      className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 hover:text-white px-2 py-0.5 rounded"
                    >
                      /#services
                    </button>
                    <button
                      type="button"
                      onClick={() => setInspector({ ...inspector, link: '/#contact' })}
                      className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 hover:text-white px-2 py-0.5 rounded"
                    >
                      /#contact
                    </button>
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={inspector.targetBlank}
                    onChange={(e) => setInspector({ ...inspector, targetBlank: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0"
                  />
                  <span className="text-[11px] text-slate-300">Open link in new tab (_blank)</span>
                </label>
              </>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-end gap-2">
            <button
              onClick={() => setInspector(null)}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleApplyInspector}
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg shadow-md shadow-emerald-500/20"
            >
              Apply Updates ✔
            </button>
          </div>
        </div>
      )}
    </>
  );
};

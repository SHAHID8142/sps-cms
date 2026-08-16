import React, { useState, useEffect } from 'react';

interface LiveEditorOverlayProps {
  pageSlug: string;
}

export const LiveEditorOverlay: React.FC<LiveEditorOverlayProps> = ({ pageSlug }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Listen for custom edit events from EditableText components
    const handleDirty = () => setDirty(true);
    window.addEventListener('sps-cms-content-changed', handleDirty);
    return () => window.removeEventListener('sps-cms-content-changed', handleDirty);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Gather all editable nodes on the page
      const nodes = document.querySelectorAll('[data-sps-key]');
      const content: Record<string, string> = {};
      nodes.forEach((node) => {
        const key = node.getAttribute('data-sps-key');
        if (key) {
          content[key] = node.innerHTML;
        }
      });

      const res = await fetch('/api/cms/save-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: pageSlug, content })
      });

      if (res.ok) {
        setDirty(false);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-slate-950/90 backdrop-blur border-b border-emerald-500/30 px-6 py-2.5 flex items-center justify-between text-white text-xs font-sans shadow-2xl">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 font-bold text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          SPS-CMS Visual Editor
        </span>
        <span className="text-slate-400 font-mono">Page: {pageSlug}</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            document.body.classList.toggle('sps-edit-mode-active', !isEditing);
          }}
          className={`px-3 py-1.5 rounded font-semibold transition-all ${
            isEditing
              ? 'bg-emerald-500 text-slate-950'
              : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          {isEditing ? '✏️ Edit Mode ON' : '👁️ Preview Mode'}
        </button>

        {dirty && (
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded shadow-lg shadow-emerald-500/20 animate-bounce"
          >
            {saving ? 'Publishing...' : '🚀 Publish Changes'}
          </button>
        )}

        <a
          href="/admin"
          className="px-3 py-1.5 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 rounded"
        >
          Go to /admin
        </a>
      </div>
    </div>
  );
};

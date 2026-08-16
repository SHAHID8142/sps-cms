/**
 * SPS-CMS Universal In-Context Live Visual Editor Overlay
 * Zero-dependency Vanilla JavaScript (Works on ANY language/framework: PHP, Python, Node, Go, Static HTML)
 */
(function () {
  if (window.__SPS_CMS_OVERLAY_LOADED__) return;
  window.__SPS_CMS_OVERLAY_LOADED__ = true;

  let isEditing = false;
  let isDirty = false;
  let activeInspector = null;

  // 1. Create Top Bar Overlay
  const bar = document.createElement('div');
  bar.id = 'sps-cms-topbar';
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; z-index: 999999;
    background: rgba(10, 15, 30, 0.95); backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(16, 185, 129, 0.4);
    padding: 8px 20px; display: flex; align-items: center; justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #fff; font-size: 13px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  `;

  bar.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span>
      <strong style="color: #10b981; letter-spacing: 0.5px;">SPS-CMS Live Visual Architect</strong>
      <span style="color: #64748b; font-size: 11px; font-family: monospace;">Page: ${window.location.pathname}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <button id="sps-toggle-btn" style="
        background: #1e293b; color: #e2e8f0; border: 1px solid #334155;
        padding: 5px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer;
      ">⚡ Edit Mode: OFF</button>
      
      <button id="sps-publish-btn" style="
        display: none; background: #10b981; color: #022c22; border: none;
        padding: 5px 14px; border-radius: 6px; font-size: 12px; font-weight: 800; cursor: pointer;
      ">🚀 Publish Changes</button>

      <a href="/admin" target="_blank" style="
        color: #94a3b8; text-decoration: none; font-size: 12px; padding: 5px 8px;
      ">Admin Portal ↗</a>
    </div>
  `;

  document.body.appendChild(bar);
  document.body.style.paddingTop = (parseInt(document.body.style.paddingTop || 0) + 45) + 'px';

  // 2. Inspector Popover Element
  const inspectorBox = document.createElement('div');
  inspectorBox.id = 'sps-cms-inspector';
  inspectorBox.style.cssText = `
    display: none; position: fixed; z-index: 1000000; width: 320px;
    background: #020617; border: 1px solid rgba(16, 185, 129, 0.5);
    border-radius: 16px; padding: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.8);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #e2e8f0; font-size: 12px; backdrop-filter: blur(16px);
  `;
  document.body.appendChild(inspectorBox);

  const toggleBtn = document.getElementById('sps-toggle-btn');
  const publishBtn = document.getElementById('sps-publish-btn');

  // Intercept Clicks on Editable elements in Edit Mode
  document.addEventListener('click', function (e) {
    if (!isEditing) return;

    if (e.target.closest('#sps-cms-topbar') || e.target.closest('#sps-cms-inspector')) {
      return;
    }

    const spsEl = e.target.closest('[data-sps-key]');
    if (spsEl) {
      e.preventDefault();
      e.stopPropagation();

      const key = spsEl.getAttribute('data-sps-key');
      const isCta = spsEl.tagName === 'A' || spsEl.closest('a') || spsEl.getAttribute('data-sps-type') === 'cta';
      const textEl = spsEl.querySelector('[data-sps-field="text"]') || spsEl;
      const text = textEl.innerText.trim();
      let link = spsEl.getAttribute('data-sps-link') || (spsEl.tagName === 'A' ? spsEl.getAttribute('href') : spsEl.closest('a')?.getAttribute('href')) || '';
      const rect = spsEl.getBoundingClientRect();

      activeInspector = { element: spsEl, textEl, key, isCta };

      inspectorBox.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 12px;">
          <strong style="color: #10b981; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">
            ${isCta ? '🔗 Edit CTA & Link' : '✏️ Edit Text Block'}
          </strong>
          <button id="sps-close-inspector" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 14px;">✕</button>
        </div>
        <div style="margin-bottom: 10px;">
          <label style="display: block; font-size: 11px; color: #94a3b8; margin-bottom: 4px; font-weight: 600;">Visible Text</label>
          <input id="sps-ins-text" type="text" value="${text.replace(/"/g, '&quot;')}" style="width: 100%; box-sizing: border-box; background: #0f172a; border: 1px solid #334155; border-radius: 6px; padding: 6px 10px; color: #fff; font-size: 12px; outline: none;" />
        </div>
        ${isCta ? `
        <div style="margin-bottom: 12px;">
          <label style="display: block; font-size: 11px; color: #94a3b8; margin-bottom: 4px; font-weight: 600;">Destination URL / Link 🎯</label>
          <input id="sps-ins-link" type="text" value="${link.replace(/"/g, '&quot;')}" placeholder="e.g. /packages or https://..." style="width: 100%; box-sizing: border-box; background: #0f172a; border: 1px solid #334155; border-radius: 6px; padding: 6px 10px; color: #10b981; font-family: monospace; font-size: 12px; outline: none;" />
        </div>
        ` : ''}
        <div style="display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid #1e293b; padding-top: 10px;">
          <button id="sps-apply-btn" style="background: #10b981; color: #022c22; border: none; border-radius: 6px; padding: 6px 14px; font-weight: 700; cursor: pointer; font-size: 12px;">Apply Updates ✔</button>
        </div>
      `;

      inspectorBox.style.display = 'block';
      inspectorBox.style.top = Math.min(window.innerHeight - 250, Math.max(60, rect.bottom + 10)) + 'px';
      inspectorBox.style.left = Math.min(window.innerWidth - 340, Math.max(20, rect.left)) + 'px';

      document.getElementById('sps-close-inspector').onclick = () => { inspectorBox.style.display = 'none'; };
      document.getElementById('sps-apply-btn').onclick = () => {
        const newText = document.getElementById('sps-ins-text').value;
        activeInspector.textEl.innerText = newText;

        if (activeInspector.isCta) {
          const newLink = document.getElementById('sps-ins-link').value;
          activeInspector.element.setAttribute('data-sps-link', newLink);
          if (activeInspector.element.tagName === 'A') {
            activeInspector.element.setAttribute('href', newLink);
          } else {
            activeInspector.element.closest('a')?.setAttribute('href', newLink);
          }
        }

        inspectorBox.style.display = 'none';
        isDirty = true;
        publishBtn.style.display = 'inline-block';
      };
    } else {
      inspectorBox.style.display = 'none';
    }
  }, true);

  // Toggle Edit Mode
  toggleBtn.addEventListener('click', function () {
    isEditing = !isEditing;
    toggleBtn.innerText = isEditing ? '⚡ Edit Mode: ON (Click Any Item)' : '⚡ Edit Mode: OFF';
    toggleBtn.style.background = isEditing ? '#10b981' : '#1e293b';
    toggleBtn.style.color = isEditing ? '#022c22' : '#e2e8f0';

    const editableElements = document.querySelectorAll('[data-sps-key]');
    editableElements.forEach((el) => {
      if (isEditing) {
        el.style.outline = '2px dashed rgba(16, 185, 129, 0.7)';
        el.style.outlineOffset = '4px';
        el.style.cursor = 'pointer';
      } else {
        el.style.outline = 'none';
        el.style.cursor = 'default';
        inspectorBox.style.display = 'none';
      }
    });
  });

  // Publish Changes
  publishBtn.addEventListener('click', async function () {
    publishBtn.innerText = 'Publishing...';
    publishBtn.disabled = true;

    try {
      const elements = document.querySelectorAll('[data-sps-key]');
      const content = {};
      elements.forEach((el) => {
        const key = el.getAttribute('data-sps-key');
        if (!key) return;

        const textEl = el.querySelector('[data-sps-field="text"]') || el;
        content[key + '_text'] = textEl.innerText.trim();
        content[key] = textEl.innerText.trim();

        const link = el.getAttribute('data-sps-link') || (el.tagName === 'A' ? el.getAttribute('href') : el.closest('a')?.getAttribute('href'));
        if (link) {
          content[key + '_link'] = link;
        }
      });

      const res = await fetch('/api/cms/save-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: window.location.pathname,
          content: content
        })
      });

      if (res.ok) {
        publishBtn.innerText = '✅ Published!';
        isDirty = false;
        setTimeout(() => {
          publishBtn.style.display = 'none';
          publishBtn.innerText = '🚀 Publish Changes';
          publishBtn.disabled = false;
        }, 2000);
      } else {
        alert('Failed to publish changes. Please check admin login status.');
        publishBtn.disabled = false;
        publishBtn.innerText = '🚀 Publish Changes';
      }
    } catch (err) {
      alert('Error publishing changes: ' + err.message);
      publishBtn.disabled = false;
      publishBtn.innerText = '🚀 Publish Changes';
    }
  });
})();

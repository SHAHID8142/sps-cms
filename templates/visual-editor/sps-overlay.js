/**
 * SPS-CMS Universal In-Context Live Visual Editor Overlay
 * Zero-dependency Vanilla JavaScript (Works on ANY language/framework: PHP, Python, Node, Go, Static HTML)
 */
(function () {
  if (window.__SPS_CMS_OVERLAY_LOADED__) return;
  window.__SPS_CMS_OVERLAY_LOADED__ = true;

  let isEditing = false;
  let isDirty = false;

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
      <strong style="color: #10b981; letter-spacing: 0.5px;">SPS-CMS Live Editor</strong>
      <span style="color: #64748b; font-size: 11px; font-family: monospace;">Page: ${window.location.pathname}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <button id="sps-toggle-btn" style="
        background: #1e293b; color: #e2e8f0; border: 1px solid #334155;
        padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;
      ">✏️ Edit Mode: OFF</button>
      
      <button id="sps-publish-btn" style="
        display: none; background: #10b981; color: #022c22; border: none;
        padding: 5px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer;
      ">🚀 Publish Changes</button>

      <a href="/admin" target="_blank" style="
        color: #94a3b8; text-decoration: none; font-size: 12px; padding: 5px 8px;
      ">Admin Portal ↗</a>
    </div>
  `;

  document.body.appendChild(bar);
  document.body.style.paddingTop = (parseInt(document.body.style.paddingTop || 0) + 45) + 'px';

  const toggleBtn = document.getElementById('sps-toggle-btn');
  const publishBtn = document.getElementById('sps-publish-btn');

  // 2. Toggle Edit Mode
  toggleBtn.addEventListener('click', function () {
    isEditing = !isEditing;
    toggleBtn.innerText = isEditing ? '✏️ Edit Mode: ON' : '✏️ Edit Mode: OFF';
    toggleBtn.style.background = isEditing ? '#10b981' : '#1e293b';
    toggleBtn.style.color = isEditing ? '#022c22' : '#e2e8f0';

    const editableElements = document.querySelectorAll('[data-sps-key]');
    editableElements.forEach((el) => {
      el.contentEditable = isEditing;
      if (isEditing) {
        el.style.outline = '2px dashed rgba(16, 185, 129, 0.6)';
        el.style.outlineOffset = '3px';
        el.style.borderRadius = '4px';
        el.style.cursor = 'text';

        el.addEventListener('input', () => {
          isDirty = true;
          publishBtn.style.display = 'inline-block';
        });
      } else {
        el.style.outline = 'none';
        el.style.cursor = 'default';
      }
    });
  });

  // 3. Publish Changes
  publishBtn.addEventListener('click', async function () {
    publishBtn.innerText = 'Publishing...';
    publishBtn.disabled = true;

    try {
      const elements = document.querySelectorAll('[data-sps-key]');
      const content = {};
      elements.forEach((el) => {
        const key = el.getAttribute('data-sps-key');
        if (key) content[key] = el.innerHTML;
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

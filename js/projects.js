// =========================
// PROJECTS PAGE
// =========================

const grid = document.getElementById('projects-grid');
const panel = document.getElementById('project-panel');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

let activeProject = null;
let activeTab = 'overview';

// --- Render compact cards ---

function renderProjects() {
    if (!grid || typeof PROJECTS === 'undefined') return;

    grid.innerHTML = PROJECTS.map((project) => {
        const tagLimit = project.tags.slice(0, 4);
        const screenshotCount = project.screenshots?.length || 0;

        return `
            <article class="project-card" data-project-id="${project.id}">
                <div class="project-card-header">
                    <h2>${project.title}</h2>
                    ${project.year ? `<span class="project-year">${project.year}</span>` : ''}
                </div>
                <span class="project-type">${project.type}</span>
                <p class="project-summary">${project.summary}</p>
                <div class="project-tags">
                    ${tagLimit.map((tag) => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-card-actions">
                    <button class="btn btn-primary" type="button" data-open-project="${project.id}" data-tab="overview">
                        View Details
                    </button>
                    ${screenshotCount > 0 ? `
                        <button class="btn btn-ghost" type="button" data-open-project="${project.id}" data-tab="screenshots">
                            Screenshots (${screenshotCount})
                        </button>
                    ` : ''}
                </div>
            </article>
        `;
    }).join('');
}

// --- Detail panel ---

function openPanel(projectId, tab = 'overview') {
    const project = PROJECTS.find((p) => p.id === projectId);
    if (!project || !panel) return;

    activeProject = project;
    activeTab = tab;

    document.getElementById('panel-type').textContent = project.type;
    document.getElementById('panel-title').textContent = project.title;
    document.getElementById('panel-year').textContent = project.year ? `Completed ${project.year}` : '';
    document.getElementById('panel-description').textContent = project.description;

    const featuresList = document.getElementById('panel-features');
    featuresList.innerHTML = (project.features || [])
        .map((feature) => `<li>${feature}</li>`)
        .join('');

    const tagsEl = document.getElementById('panel-tags');
    tagsEl.innerHTML = (project.tags || [])
        .map((tag) => `<span>${tag}</span>`)
        .join('');

    document.getElementById('panel-documentation').innerHTML = project.documentation || '<p>No documentation added yet.</p>';
    document.getElementById('panel-structure').textContent = project.structure || 'Structure not provided.';

    renderCodeLinks(project);
    renderGallery(project);

    switchTab(tab);

    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    history.replaceState(null, '', `#${project.id}`);
}

function closePanel() {
    if (!panel) return;

    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    activeProject = null;
    history.replaceState(null, '', window.location.pathname);
}

function renderCodeLinks(project) {
    const container = document.getElementById('panel-code-links');
    const links = project.links || {};

    const items = [
        {
            label: 'View on GitHub',
            href: links.github,
            primary: true,
            hint: 'Full source code & commit history',
        },
        {
            label: 'Live Demo',
            href: links.demo,
            primary: false,
            hint: 'Try the application',
        },
        {
            label: 'Project Report',
            href: links.docs,
            primary: false,
            hint: 'PDF / written documentation',
        },
    ];

    container.innerHTML = items
        .filter((item) => item.href || item.label === 'View on GitHub')
        .map((item) => {
            const hasLink = Boolean(item.href);
            const btnClass = item.primary ? 'btn btn-primary' : 'btn btn-secondary';
            const extraClass = hasLink ? '' : ' link-unavailable';

            if (hasLink) {
                return `<a href="${item.href}" class="${btnClass}${extraClass}" target="_blank" rel="noopener" title="${item.hint}">${item.label}</a>`;
            }

            return `<span class="${btnClass}${extraClass}" title="Add link in projects-data.js">${item.label}</span>`;
        })
        .join('');
}

function renderGallery(project) {
    const gallery = document.getElementById('panel-gallery');
    if (!project.screenshots?.length) {
        gallery.innerHTML = '<p class="panel-note">No screenshots added for this project.</p>';
        return;
    }

    gallery.innerHTML = project.screenshots
        .map((shot) => {
            const wideClass = shot.wide ? ' gallery-item--wide' : '';
            return `
                <button class="gallery-item${wideClass}" type="button" aria-label="View ${shot.alt}">
                    <img src="${shot.src}" alt="${project.title} — ${shot.alt}" loading="lazy">
                </button>
            `;
        })
        .join('');
}

function switchTab(tabName) {
    activeTab = tabName;

    document.querySelectorAll('.panel-tab').forEach((tab) => {
        const isActive = tab.dataset.tab === tabName;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    document.querySelectorAll('.panel-tab-content').forEach((content) => {
        const isActive = content.id === `tab-${tabName}`;
        content.classList.toggle('is-active', isActive);
        content.hidden = !isActive;
    });
}

// --- Lightbox ---

function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxCaption.textContent = alt;
    lightbox.classList.add('is-open');
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
}

// --- Events ---

function initEvents() {
    grid?.addEventListener('click', (event) => {
        const button = event.target.closest('[data-open-project]');
        if (!button) return;

        openPanel(button.dataset.openProject, button.dataset.tab || 'overview');
    });

    document.querySelectorAll('[data-close-panel]').forEach((el) => {
        el.addEventListener('click', closePanel);
    });

    document.querySelector('.panel-tabs')?.addEventListener('click', (event) => {
        const tab = event.target.closest('.panel-tab');
        if (!tab) return;

        switchTab(tab.dataset.tab);
    });

    document.getElementById('panel-gallery')?.addEventListener('click', (event) => {
        const item = event.target.closest('.gallery-item');
        const img = item?.querySelector('img');
        if (!img) return;

        openLightbox(img.src, img.alt);
    });

    document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);

    lightbox?.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (lightbox?.classList.contains('is-open')) {
                closeLightbox();
            } else if (panel?.classList.contains('is-open')) {
                closePanel();
            }
        }
    });
}

function handleDeepLink() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const project = PROJECTS.find((p) => p.id === hash);
    if (project) openPanel(project.id, 'overview');
}

// --- Init ---

renderProjects();
initEvents();
handleDeepLink();

window.addEventListener('hashchange', handleDeepLink);

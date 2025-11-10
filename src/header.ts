// todo rewrite and fix `Writing - Writing -` issue
document.addEventListener('DOMContentLoaded', (): void => {
  // Normalize the pathname: remove .html and leading/trailing slashes
  const currentPath: string = window.location.pathname
      .replace(/\.html$/, '')
      .replace(/^\/|\/$/g, '');

  // Split path into segments, keeping all non-empty segments
  const pathSegments: string[] = currentPath
      .split('/')
      .filter(segment => segment);

  // Default to 'index' if no segments
  const topLevelPage: string = pathSegments[0] || 'index';

  // Format titles with capitalization
  function formatTitleWithSpecialWord(text: string): string {
      const formatted: string = text
      .split(/[-_]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    return formatted.replace(/\bcsharp\b/gi, 'C#');
  }

  function buildPath(directory: HTMLElement) {
      const pathElements: string[] = [];

      // Build directory path
      if (pathSegments.length === 0) {
          pathElements.push('<a href="/index" class="loc">Home</a>');
      } else {
          pathElements.push('<a href="/index">Home</a>');
      }

      // Iterate over segments to build path links
      let currentPathBuilder: string = '';
      pathSegments.forEach((segment, index): void => {
          currentPathBuilder += `/${segment}`;
          const title: string = formatTitleWithSpecialWord(segment);
          const isCurrent: boolean = index === pathSegments.length - 1; // Last segment is current
          pathElements.push(`<a href="${currentPathBuilder}"${isCurrent ? ' class="loc"' : ''}>${title}</a>`);
      });

      // Join path elements with separator
      directory.innerHTML = pathElements.join(' ');
  }

  fetch('/header.html')
    .then(response => response.text())
    .then(data => {
      const header: HTMLElement | null = document.getElementById('header');
      if(header !== null) header.innerHTML = data;

      // Set active link for top-level page
      const activeLink: Element | null = document.querySelector(`[data-page="${topLevelPage}"]`);
      if (activeLink !== null) activeLink.classList.add('active');

      const directory: HTMLElement | null = document.getElementById('directory-path');
      if(directory !== null) buildPath(directory);

      // Build page title
      const titleParts: string[] = [];
      // Add segments in reverse order (deepest first)
      for (let i: number = pathSegments.length - 1; i >= 0; i--) {
        titleParts.push(formatTitleWithSpecialWord(pathSegments[i]));
      }
      // Add top-level page title if not index
      const topPageTitle: string = topLevelPage === 'index' ? 'Home' : formatTitleWithSpecialWord(topLevelPage);
      if (topLevelPage !== 'index') titleParts.push(topPageTitle);
      document.title = `${titleParts.join(' - ') || 'Home'} - envoidia.neocities.org`;
    });
});
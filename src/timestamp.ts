document.addEventListener("DOMContentLoaded", (): void => {
    document.querySelectorAll("p").forEach((p: HTMLParagraphElement): void => {
        p.innerHTML = p.innerHTML.replace(/(\d+:\d+)/g, '<span class="time">$1</span>');
    });
});
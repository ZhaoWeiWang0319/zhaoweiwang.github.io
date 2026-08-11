const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const dialog = document.getElementById('bibtex-dialog');
const content = document.getElementById('bibtex-content');
const copyButton = document.getElementById('copy-bibtex');

document.querySelectorAll('.bibtex-button').forEach(button => {
  button.addEventListener('click', () => {
    content.textContent = button.dataset.bibtex || '';
    dialog.showModal();
  });
});

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(content.textContent);
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy'; }, 1200);
  } catch (_) {
    copyButton.textContent = 'Select & copy';
  }
});

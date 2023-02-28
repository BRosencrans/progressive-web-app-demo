const butInstall = document.getElementById('buttonInstall');

// Functions for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    const newInstall = window.deferredPrompt;
    if (!newInstall) {
        return;
    }
    newInstall.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
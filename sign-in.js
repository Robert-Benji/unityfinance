const accountId = 'myAccountId';
const password = 'myPassword';

const signInButton = document.getElementById('sign-in-btn');
const accountIdInput = document.getElementById('account-id-input');
const passwordInput = document.getElementById('password-input');
const errorMsg = document.getElementById('error-msg');
const loadingAnimation = document.getElementById('loading');

signInButton.addEventListener("click", (event) => {
    if (accountId !== accountIdInput.value.trim() || password !== passwordInput.value.trim()) {
        errorMsg.style.display = 'block';
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 4000);
        event.preventDefault();
        return;
    }
});

accountIdInput.addEventListener("input", () => {
    if (accountId !== accountIdInput.value.trim() || password !== passwordInput.value.trim()) {
        signInButton.disabled = true;
    } else {
        signInButton.disabled = false;
    }
});

passwordInput.addEventListener("input", () => {
    if (accountId !== accountIdInput.value.trim() || password !== passwordInput.value.trim()) {
        signInButton.disabled = true;
    } else {
        signInButton.disabled = false;
    }
});





document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.code == 73) {
        e.preventDefault();
        alert('Right-clicking and using the "Ctrl + Shift + I" key combination are not allowed on this website.');
    }
}, false);
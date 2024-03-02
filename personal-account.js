const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('ham-close-btn');
const themeToggler = document.querySelector('.theme-toggler');




menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})



themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');

    if (document.body.classList.contains('dark-theme-variables')) {
        localStorage.setItem("theme", "on"); 
    } else {
        localStorage.removeItem("theme"); 
    }
});

if (localStorage.getItem("theme") === "on") {
    document.body.classList.add('dark-theme-variables');
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
} else{
    document.body.classList.remove('dark-theme-variables');
}




const recipientInput = document.getElementById('recipient-input');
const amountInput = document.getElementById('amount-input');
const transferMsg = document.getElementById('transfer-btn-msg');
const transferBtn = document.getElementById('quick-transfer-btn');

transferBtn.addEventListener('click', () => {
    if (recipientInput.value === '' || amountInput.value === '') {
        transferMsg.innerText = 'Some or all fields are empty!';
        transferMsg.style.color = 'red';
        setTimeout(() => {
            transferMsg.innerText = '';
        }, 4000)
    } else if (isNaN(recipientInput.value) || isNaN(amountInput.value)) {
        transferMsg.innerText = 'Input is not a number';
        transferMsg.style.color = 'red';
        setTimeout(() => {
            transferMsg.innerText = '';
        }, 4000)
    } else {
        transferMsg.innerText = 'Transfer initiated! Email verification sent';
        transferMsg.style.color = '#41f1b6';
        recipientInput.value = '';
        amountInput.value = '';
        setTimeout(() => {
            transferMsg.innerText = '';
        }, 4000)
    }
})

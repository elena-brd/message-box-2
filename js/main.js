const btnSubmit = document.querySelector('.btn-submit');
const form = document.getElementById('form-input');
const btnClose = document.querySelector('.btn-close');
const text = document.querySelector('.text-content');
const h3 = document.querySelector('h3')

function sendMsg(e) {
    e.preventDefault();
    form.style.display = 'none';
    btnClose.style.display = 'none';
    h3.textContent = 'Thank you! '
    text.textContent = 'Message was sent';
}

btnSubmit.addEventListener('click', sendMsg);




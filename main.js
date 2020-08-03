const btn =  document.querySelector('.svg__wrapper');
const author = document.querySelector('.author');
const author__image = document.querySelector('.author__image')
const auth = document.querySelector('.auth');
const footer = document.querySelector('.social')

btn.addEventListener('click', function(){
 author.classList.toggle('toggle');
 author__image.classList.toggle('toggle');
 auth.classList.toggle('toggle');
 footer.classList.toggle('toggle');
});
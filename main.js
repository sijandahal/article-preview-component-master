const btn =  document.querySelector('.svg__wrapper');
const holder = document.querySelector('.arrow__holder');
const author = document.querySelector('.author');
const authorHolder = document.querySelector('.author__holder');
const box = document.querySelector('.author_box')

btn.addEventListener('click', function(){
 holder.classList.toggle('toggle');
 author.classList.toggle('display');
 authorHolder.classList.toggle('display');
 box.classList.toggle('display');

})
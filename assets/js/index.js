'use strict';

/*
1. По нажатию на кнопку вы меняете две картинки между собой (либо первая, либо вторая).
Используйте объект аттрибута

2. Сделайте кнопку, которая после первого нажатия на нее становится неактивной (disabled)
*/

const [firstImg, secondImg] = document.querySelectorAll('.img');
const buttonChange = document.querySelector('.btn');
const buttonDisable = document.querySelector('.btn--disable');

const imageDataBase = [
    'https://media.istockphoto.com/photos/close-up-of-cross-section-of-orange-picture-id182148138?k=20&m=182148138&s=612x612&w=0&h=qgKEZBxK-xEjC7J9ibivjHPEUk5LrUlgBXJWyxeNEkI=',
    'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/Grapefruit44-6758269.jpg?quality=90&resize=504,458?quality=90&webp=true&resize=504,458',
];

firstImg.setAttribute('src', imageDataBase[0]);
secondImg.setAttribute('src', imageDataBase[1]);

buttonChange.addEventListener('click', () => {
    console.log('im put');
    let rel = firstImg.src;
    firstImg.src = secondImg.src;
    secondImg.src = rel;
});
buttonDisable.addEventListener('click', () => (buttonDisable.disabled = true));

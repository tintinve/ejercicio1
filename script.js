"use strict"
const template = document.querySelector('template').content;
const gallery = document.querySelector('.gallery');
for(
    let i=1; 
    i<=6; 
    i++)
{
    const clone = template.cloneNode(true);
    clone.querySelector(img).src = "assets/img/product_img_" +i ".jpg";
    gallery.appendChild(clone);
}
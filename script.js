const images = [
    {'id': '1', 'url': './img/ronaldo.jpg'},
    {'id': '2', 'url': './img/doctor.png'},
    {'id': '3', 'url': './img/3.jpg'},
    {'id': '4', 'url': './img/4.jpeg'},
]

const container = document.querySelector('.container-items');
for(const image of images){
    container.innerHTML += `
    <div class='item'>
    <img src= '${image.url}'
    </div>
    `
    
}

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click', ()=>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});

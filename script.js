for (i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.classList.add('grid-item');
    div.id = i +1;
    div.textContent = ' ';
    document.getElementById('container').appendChild(div);
}

let items = document.querySelectorAll('.grid-item');
items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.toggle('hovering');
    });
});
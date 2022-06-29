const html = document.querySelector('html');

function run(){
    let col = prompt("Please enter the new width.");
    while (+col > 100){
        col = prompt("Numbers larger than 100 not supported, please try again.");
    }
    let row = prompt("Please enter the new height.");
    while (+row > 100){
        row = prompt("Numbers larger than 100 not supported, please try again.");
    }
    build(+row, +col);
}

function build(r, c){
    let cont = document.getElementById('container');
    while(cont.firstChild){
        cont.removeChild(cont.firstChild);
    }
    let height = r,
        width = c;
    html.style.setProperty('--rows', r);
    html.style.setProperty('--columns', c);
    for (i = 0; i < height * width; i++){
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.id = i +1;
        div.textContent = ' ';
        cont.appendChild(div);
    }
    
    let items = document.querySelectorAll('.grid-item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.classList.toggle('hovering');
        });
    });
}
build(16, 16);
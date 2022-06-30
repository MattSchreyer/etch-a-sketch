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

function hover(item){
    //item.classList.toggle('hovering'); DEPRECATED
    let style = item.style.backgroundColor;
    let rgb = style.slice(4, -1);
    let arr = rgb.split(", ");
    console.log(arr.toString());
    arr[0] = Math.floor(Math.random() * 361);
    arr[1] = 0;
    if (item.classList.contains('new')){
        item.classList.remove('new');
        arr[2] = 0;
    }
    else if (arr[2] == 100) arr[2] = arr[2];
    else {
        let temp = +arr[2];
        arr[2] = temp + 10;
    }
    let rgbNew = arr.join(", ");
    console.log(rgbNew)
}

function build(r, c){
    //reset grid
    let contain = document.getElementById('container');
    while(contain.firstChild){
        contain.firstChild.removeEventListener('mouseenter', hover(item));
        contain.removeChild(contain.firstChild);
    }
    let height = r,
        width = c;
    html.style.setProperty('--rows', r);
    html.style.setProperty('--columns', c);
    //populate grid
    for (i = 0; i < height * width; i++){
        let div = document.createElement('div');
        div.classList.add('grid-item', 'new');
        div.id = i +1;
        div.textContent = ' ';
        contain.appendChild(div);
    }
    
    let items = document.querySelectorAll('.grid-item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', (event) =>{
            hover(item);
        });
    });
}

const html = document.querySelector('html');
build(16, 16);
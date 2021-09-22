const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')
console.log(placeHolders);

//начали перетаскивать
item.addEventListener('dragstart', dragStart)

//закончили перетаскивать
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeHolders) {
    // console.log(placeholder)
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

//event or e аргумент
function dragStart(event) {
    // console.log('drag start', event.target);
    // console.log('drag start', event.this);
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
    
}

function dragEnd(event) {
    // console.log('drag end');
    // event.target.classList.remove('hold', 'hide')
    // event.target.classList.remove('hide')
    event.target.className = 'item'
}


function dragOver(event) {
    event.preventDefault()
    // console.log('drag over');
}

function dragEnter(event) {
    console.log('drag enter');
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    console.log('drag leave');
    event.target.classList.remove('hovered')
}

function dragDrop(event) {
    console.log('drag drop');
    event.target.append(item)
    event.target.classList.remove('hovered')
}




let form = document.getElementById('form');
let todoItems = document.getElementById('todoItems');
todoItems.addEventListener('click', removeItem)

form.addEventListener('submit', addItem)
// form.addEventListener('click', clearInputBox)

function addItem(e){
    e.preventDefault()
    // console.log(e.target)

    //GET INPUT VALUE
    let newItem = document.getElementById('inputItem').value
    console.log(newItem)
    let li = document.createElement('li');
    li.className = 'listGroup'
    let text = document.createTextNode(newItem)

    li.appendChild(text);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-primary btn-sm float-right delete";
    deleteBtn.id = 'deleteBtn';
    deleteBtn.style.float = "right";
    deleteBtn.style.marginBottom = '10px'
    let deleteIcon = document.createTextNode('X')
    deleteBtn.appendChild(deleteIcon)

    //refresh the input box once submit is clicked
    document.getElementById('inputItem').value = '';

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    li.appendChild(deleteBtn)
    todoItems.appendChild(li)
}

//Delete item (delete button)
function removeItem(e){
    //check to see if what we are clicking has the class delete in it
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        todoItems.removeChild(li)
    }
}

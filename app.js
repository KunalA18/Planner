document.addEventListener('DOMContentLoaded',function(){

    // Delete Tasks
const list = document.querySelector('#Target-list ul');

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

// Adding Tasks
const addtask = document.forms['add-event'];

addtask.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addtask.querySelector('input[type="text"]').value;
    // console.log(value);

    const li = document.createElement('li');
    const taskname = document.createElement('span');
    const deletebtn = document.createElement('span');
    const statusbtn = document.createElement('span');

    deletebtn.textContent='delete';
    taskname.textContent = value;
    statusbtn.textContent = '';
    
    li.setAttribute('type','circle');
    taskname.classList.add('name');
    deletebtn.classList.add('delete');
    statusbtn.classList.add('status');

    //append to doc
    li.appendChild(taskname);
    li.appendChild(deletebtn);
    li.appendChild(statusbtn);
    list.appendChild(li);
});

// Searching
const searchBar = document.forms['search'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const tasks = list.getElementsByTagName('li');
    Array.from(tasks).forEach(function(task){
        const tk = task.firstElementChild.textContent;
        if (tk.toLowerCase().indexOf(term)!=-1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
});



})


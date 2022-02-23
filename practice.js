// var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles))
// console.log(Array.isArray(Array.from(titles)))

// Array.from(titles).forEach(element => {
//     console.log(element)
// });

// const wrap = document.querySelector('#wrapper');
// console.log(wrap);

const web = document.querySelector('#Target-list li:nth-child(2) .name');
// console.log(web);

const tasks = document.querySelectorAll('#Target-list li .name')
// console.log(tasks)

Array.from(tasks).forEach(function(task){
    // console.log(task);
    console.log(task.textContent);
    // task.textContent += ' status'
});

const tasklist = document.querySelector('#Target-list');
console.log(tasklist.innerHTML);

// tasklist.innerHTML += "<p> more tasks </p>"
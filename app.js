// const form = document.querySelector('.form')
// const input = document.querySelector('input')
// const todos = document.querySelector('.todos')

// form.onsubmit = function(e) {
//     e.preventDefault()
//     var inputValue = input.value.trim()
//     if(inputValue) {
//         addTodoList(
//             {
//                 text: inputValue,
//             }
//         )
//     }
//     input.value = ''
//     saveTodoList()

// }


// function addTodoList(todo) {
//     var li = document.createElement('li')
//     li.innerHTML = `
//                     <span>${todo.text}</span>
//                     <i class="fas fa-trash"></i>
//     `
//     if(todo.status === 'completed') {
//         li.classList.add('completed')
//     }

//     li.onclick = function() {
//         this.classList.toggle('completed')
//         saveTodoList()
//     }
//     li.querySelector('i').onclick = function() {
//         this.parentElement.remove()
//         saveTodoList()
//     }
//     todos.appendChild(li)
// }


// function saveTodoList() {
//     const todoList = document.querySelectorAll('li')
//     var todoStorage =  []
//    todoList.forEach(function(item) {
//         var text = item.querySelector('span').innerText
//         var status = item.getAttribute('class')
        
//         todoStorage.push({
//             text: text,
//             status: status
//         })
           
        
//     })
//     localStorage.setItem('todoList',JSON.stringify(todoStorage))
// }

// function init() {
//     var data = JSON.parse(localStorage.getItem('todoList'))
//     data.forEach(function(item) {
//         addTodoList(item)
//     })
// }

// init()


const Course = function(name,price) {
     this.name = name ;
     this.price = price ;

}

const a = new Course('antran',1000)

console.log(a)
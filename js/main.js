var app = new Vue({
  el: '#app',
  data: {
    isActive: false,
    id: -1,
    message: '',
    bgCol: '',
    todos: [],
  },
  methods: {
    toggleCreateTodoForm: function(){
      var todoForm = document.getElementById('toggleCreateTodoForm');
      var todoFormButton = document.getElementById('createTodoForm');
      if(this.isActive === false){
        this.isActive = true;
        todoFormButton.innerHTML = 'Stäng Todo';
      } else {
        this.isActive = false;
        todoFormButton.innerHTML = 'Skapa Todo';
      }
    },
    submitTodo: function(){
      var inputOne = document.getElementById('input-one').value.trim();
      var inputTwo = document.getElementById('input-two').value;
      if (inputTwo === "Välj prioritet"){
        inputTwo = '';
      }
      var inputThree = document.getElementById('input-three').value;
      var inputFour = document.getElementById('input-four').value;
      if(inputOne.length > 0 && inputOne.length <= 30){
        document.getElementById('input-one').className = 'form-input';
        document.getElementById('input-one').placeholder = 'Lägg till todo..';
        document.getElementById('tForm').reset();
        document.getElementById('todoCreated').className = 'label label-success visible';
        this.id += 1;
        return this.createTodo(inputOne, inputTwo, inputThree, inputFour, this.id);
      } else {
        var inputFieldOne = document.getElementById('input-one');
        inputFieldOne.className += ' is-danger';
        inputFieldOne.placeholder = 'Vänligen ange todo här..';
      }
    },
    createTodo: function(title, prio, date, info, id){
      this.todos.push({id: id, title: title, prio: prio, date: date, info: info});
      var elTodo = document.createElement('div');
      elTodo.innerHTML = "<div class='column col-sm-12'>" + "<div class='toast toast-primary'>" + "<button id='"+ id + "' class='btn btn-clear float-right  tooltip tooltip-left' data-tooltip='Radera Todo' onclick='deleteTodo(event)'></button>"+ "<h4>" + title + "</h4>" + "<p>" + info + "</p>" + "</div>" + "</div>";
      document.getElementById('todoList').appendChild(elTodo);
    },
    resetTodoForm: function(){
      document.getElementById('tForm').reset();
      document.getElementById('input-one').className = 'form-input';
      document.getElementById('input-one').placeholder = 'Lägg till todo..';
      document.getElementById('todoCreated').className = 'label label-success hide';
    },
    checkInput: function(){
      if(this.message.length > 0){
        document.getElementById('todoCreated').className = 'label label-success hide';
      }
    },
  }
});

function deleteTodo(event){
  var clickedButton = event.target;
  var id = clickedButton.id;
  var parent = clickedButton.parentElement.parentElement.parentElement;
  parent.parentNode.removeChild(parent);
  document.getElementById('todoCreated').className = 'label label-success hide';
}














// var TodoComponent = Vue.extend({
//   data: function(){
//     return {
//       editMode: false
//     };
//   },
//   props: ['todo'],
//   template: '<div><span v-on:click="clicked" v-show="!editMode">{{ todo.title }}</span><input v-on:keyup.enter="saved" v-model="todo.title" v-show="editMode"/></div>',
//   methods: {
//     clicked: function(){
//       this.editMode = true;
//     },
//     saved: function(){
//       this.editMode = false;
//     }
//   }
// });

// Vue.component('todo-component', TodoComponent);

// var app = new Vue ({
//     el: '#app',
//     data: {
//       todoText: '',
//       todos: [
//         { title: 'Handla Mjölk' },
//         { title: 'Skicka in browser check' },
//         { title: 'Köpa present till Leffe' }
//       ],
//       showTodos: true,
//     },
//     methods: {
//       createTodo: function(){
//         var todoText = this.todoText.trim();
//         if(todoText){
//           this.todos.push({ title: todoText });
//           this.todoText = '';
//         }
//       },
//       clearTodo: function(){
//         this.todoText = '';
//       },
//       removeTodo: function(index){
//         this.todos.splice(index, 1);
//       }
//     }
// });







































// var app = new Vue({
//   el: '#todoApp',
//   data: {
//     message: 'test'
//   }
// });

// var todoList = new Vue({
//   el: '#todoList',
//   data: {
//     todos: []
//   },
//   methods: {
//     removeElement: (event) => {
//       const btn = event.target;
//       const parent = btn.parentElement;
//       parent.parentNode.removeChild(parent);
//     },
//     editElement: (event) => {
//     	const btn = event.target;
//     	const parent = btn.parentElement;
//     	var userInput = prompt('Editera todo:').value;
//     	parent.todo = userInput;
//     	console.log(userInput);
//     }
//   }
// });

// Vue.component('component', {
// 	template: '<div>test</div>',
// });

// new Vue({
// 	el: '.component',
// });

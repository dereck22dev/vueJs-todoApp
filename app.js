/**dereck22 */

const app = Vue.createApp({
  data() {
    return {
      todoId: 0,
      todo: " ",
      todos: [],
      todosLenght:0,
      todoFiltered: [],
      isEmpty: false,
      show: "display-initial",
      mask: "display-none",
      filterBy: "all",
      checked:"checked",
      notChecked:"not-checked",
    }
  },
  methods: {
    addTodo(event) {
      if (this.todo.split('').every(todo => todo == ' ')) {
        this.isEmpty = true;
      } else {
        this.todos.push({ id: this.todoId++, todo: this.todo, status: false });
        this.todosLenght++;
        if (event.key === "Enter") {
          this.todos.push({ id: this.todoId++, todo: this.todo, status: false });
          this.todosLenght++;
        }
        this.isEmpty = false;
        this.todo = " ";
      }
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(el => el.todo != todo);
      this.todosLenght--;
    },
    resetTodos() {
      this.todos.splice(0);
      this.todosLenght = 0;
    }
  },
  watch: {

    todosLenght() {
      this.todoFiltered = this.todos;
    },

    filterBy(status) {
      switch (status) {
        case "completed":
          this.todoFiltered = this.todos.filter(el => el.status == true);
          break;

        case "notCompleted":
          this.todoFiltered = this.todos.filter(el => el.status == false);
          break;

        default:
          this.todoFiltered = this.todos;
          break;
      }
    }

  }
}).mount("#app");
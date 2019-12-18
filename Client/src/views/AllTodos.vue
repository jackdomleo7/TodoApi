<template>
  <div class="hello">
    <router-link to="/new">New todo</router-link>
    <p v-if="todos.length === 0">There is nothing in your TODO list</p>
    <ul v-else>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.isComplete" @change="toggleIsComplete($event, todo.id)"/>
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class AllTodos extends Vue {
  private readonly uri: string = "https://localhost:5001/api/TodoItems";
  private todos: object[] = [];

  private mounted() {
    this.getTodos();
  }

  private getTodos() {
    axios.get(this.uri)
    .then(response => {
      this.todos = response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  private toggleIsComplete(event: Event, id: number) {
    axios.put(this.uri + '/' + id, {
      id: this.todos[id - 1].id,
      name: this.todos[id - 1].name,
      isComplete: event.target.checked
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

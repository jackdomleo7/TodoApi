<template>
  <div class="new-todo">
    <form @submit="newTodo">
      <label>
        New todo
        <input type="text" v-model="newTodoText" />
      </label>
      <button type="submit">Submit new todo</button>
    </form>
    <router-link to="/">View todos</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class NewTodo extends Vue {
  private readonly uri: string = "https://localhost:5001/api/TodoItems";
  private newTodoText: string = "";

  private newTodo(event: Event) {
    event.preventDefault();

    axios.post(this.uri, {
      name: this.newTodoText,
      isComplete: false
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

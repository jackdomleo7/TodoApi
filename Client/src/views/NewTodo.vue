<template>
  <div class="new-todo">
    <form @submit="newTodo">
      <label>
        New todo
        <textarea v-model="newTodoText" />
      </label>
      <button class="button" type="submit">Submit new todo</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
    .then(response => {
      console.log(response);
      this.$router.push('/')
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
label {
  * {
    display: block;
  }
}

.button {
  margin-top: 4rem;
}
</style>

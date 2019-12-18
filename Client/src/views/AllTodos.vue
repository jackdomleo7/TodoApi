<template>
  <div class="todo">
    <router-link to="/new" class="button">New todo</router-link>
    <p v-if="todos.length === 0">There is nothing in your TODO list</p>
    <ul class="todo__list" v-else>
      <li v-for="(todo, index) in todos" :key="index" class="todo__list-item" :class="todo.isComplete ? 'todo__list-item--complete' : ''">
        <label>
          <input type="checkbox" v-model="todo.isComplete" @change="toggleIsComplete($event, todo.id)"/>
          {{ todo.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
.todo {
  &__list {
    list-style-type: none;
    padding: 0;

    &-item {
      margin: 2rem 3rem;
      font-size: 1.2rem;

      &--complete {
        text-decoration: line-through;
      }

      label {
        cursor: pointer;
      }
    }
  }
}
</style>

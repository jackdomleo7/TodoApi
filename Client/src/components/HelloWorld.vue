<template>
  <div class="hello">
    <p v-if="todos.length === 0">There is nothing in your TODO list</p>
    <ul v-else>
      <li v-for="(todo, index) in todos.data" :key="index">
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  private readonly uri: string = "https://localhost:5001/api/TodoItems";
  private todos: object[] = [];

  private mounted() {
    this.getTodos();
  }

  private getTodos() {
    axios.get(this.uri)
    .then(response => {
      this.todos = response;
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  private newTodo() {
    axios.post(this.uri, {
      name: "Drink tea",
      isComplete: false
    })
        .then(function (repsonse) {
          console.log(repsonse)
        })
        .catch(function (error) {
          console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

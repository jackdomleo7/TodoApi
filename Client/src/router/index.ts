import Vue from 'vue';
import VueRouter from 'vue-router';
import AllTodos from '@/views/AllTodos.vue';
import NewTodo from "@/views/NewTodo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'all-todos',
    component: AllTodos,
  },
  {
    path: '/new',
    name: 'new',
    component: NewTodo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

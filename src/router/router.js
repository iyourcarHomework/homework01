import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: (resolve) => {
      require(['../components/HelloWorld.vue'], resolve);
    }
  },
]

const router = new VueRouter({
  routes
})

export {
  router
};
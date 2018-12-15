<template>
  <div id="app">
    <community v-if="currentBar === 'community'"></community>
    <my-class v-if="currentBar === 'class'"></my-class>
    <study v-if="currentBar === 'study'"></study>
    <home v-if="currentBar === 'home'"></home>
    <bottom-bar @bottomChange="navBarChange"></bottom-bar>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import bottomBar from "./components/bottom_bar/bottom_bar.vue";
import community from "./views/community/community.vue";
import myClass from "./views/myClass/myClass.vue";
import study from "./views/study/study.vue";
import home from "./views/home/home.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    bottomBar,
    community,
    myClass,
    study,
    home
  },
  data() {
    return {
      currentBar: "study"
    };
  },
  methods: {
    navBarChange(barName) {
      this.currentBar = barName;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}
</style>

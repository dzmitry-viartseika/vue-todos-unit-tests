<template>
  <div id="app">
    <vTodos></vTodos>
  </div>
</template>

<script>
import vTodos from './components/v-todos.vue';

export default {
  name: 'App',
  components: {
    vTodos,
  },
};
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
    background: pink;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>

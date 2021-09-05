<template>
  <div class="container">
    <Header 
      @toggle-add-task="toggleAddTask"
      title="Tasks"
      description="Eisenhower Matrix"
      :showAddTask="showAddTask"
    />
    <br />
    <br />
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Fira Sans', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid #730000;
  padding: 30px;
  border-radius: 10px;
}
.btn {
  display: inline-block;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  border: 3px solid black;

  position: relative;
  width: 6.5rem;
  height: 3rem;
  
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
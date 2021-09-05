<template>
  <header>
    <h1 class="title">
      {{ title }}
    </h1>

    <br />
    <br />

    <p class="description">
      {{ description }}
    </p>

    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add'"
      :color="showAddTask ? 'white' : 'white'"
    />


    <a href="/"
      v-show="aboutPage">
      <div class="back-button"></div>
    </a>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: String,
    description: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
    aboutPage() {
      if(this.$route.path === "/about")  return true
      else return false
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Sans:wght@700&display=swap');

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

.title {
  font-size: 48px;
  letter-spacing: 0.285em;
}

.description {
  display: inline-block;
  position: absolute;
  width: 60%;
  top: 4rem;
  right: 10.5rem;
  

  
  font-family: 'Fira Code', monospace;
  letter-spacing: 0.18em;


}

.back-button {
  background-image: url('../assets/back_button.svg');
  border: none;
  background-repeat: no-repeat;
  position: absolute;
  width: 11%;
  height: 48px;
  left: 85%;
  top: 30%;
}
</style>
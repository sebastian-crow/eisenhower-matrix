<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <div class="reminder"></div>
    <h3 class="taskText">
      {{ task.text }}
    </h3>
    <i
      @click="$emit('delete-task', task.id)"
      class=" fas deleteIcon"
    ></i>
    <i
      @click="$emit('edit-task', task.id)"
      class=" fas editIcon"
    ></i>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>

<style scope>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Sans:wght@700&display=swap");

.fas {
  color: red;
}
.task {
  margin: 20px;
  padding: 10px 20px;
  cursor: pointer;

  position: relative;
  right: 3.5%;
  width: 435.26px;
  height: 84.71px;
  border: 2px solid #000000;
  box-sizing: border-box;

  border-radius: 8px;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  font-family: "Fira Code", monospace;
  position: relative;
  left: 4%;
  top: -34%;
}

.task p {
  font-family: "Fira Code", monospace;
  position: relative;
  top: -75%;
  left: 4.5%;
}

.deleteIcon {
  background-image: url('../assets/times-solid 2.svg');
  
  position: relative;
  width: 20px;
  height: 30px;
  left: 97%;
  top: -70%;
}

.editIcon {
  background-image: url('../assets/pen-solid 2.svg');
  background-repeat: no-repeat;

  position: relative;
  width: 25px;
  height: 30px;
  left: 92%;
  top: -5%;
}

.reminder {
  position: relative;
  width: 12.55px;
  height: 18.12px;
  right: 2%;

  background: #d05454;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

/*
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: 'Fira Code', monospace;
  position: relative;
  left: 2%;
}*/
</style>
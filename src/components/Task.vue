<template>
  <!-- @dblclick="$emit('toggle-reminder', task.id)"-->
  <div
    class="task"
  >
    
    <div class="reminder-1" v-if="do_it" title="Do It"></div>
    <div class="reminder-2" v-if="schedule_it" title="Schedule It"></div>
    <div class="reminder-3" v-if="delegate_it" title="Delegate It"></div>
    <div class="reminder-4" v-if="delete_it" title="Delete It"></div>
    
    
    <h3 class="taskText">
      {{ task.text }}
    </h3>
    <i @click="$emit('delete-task', task.id)" class="fas deleteIcon"></i>
    <i @click="$emit('edit-task', task.id)" class="fas editIcon"></i>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data() {
    return {
      do_it: this.task.category?.do_it,
      schedule_it: this.task.category?.schedule_it,
      delegate_it: this.task.category?.delegate_it,
      delete_it: this.task.category?.delete_it
    }
  }
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
/*
.task.reminder {
  border-left: 5px solid green;
}
*/

.task.do_it {
  background: #d05454;
}

.task.schedule_it {
  background: #eab15d;
}

.task.delegate_it {
  background: #eeefa6;
}

.task.delete_it {
  background: #c3c3c3;
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
  background-image: url("../assets/times-solid 2.svg");

  position: relative;
  width: 20px;
  height: 30px;
  left: 97%;
  top: -70%;
}

.editIcon {
  background-image: url("../assets/pen-solid 2.svg");
  background-repeat: no-repeat;

  position: relative;
  width: 25px;
  height: 30px;
  left: 92%;
  top: -5%;
}

.reminder-1 {
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

.reminder-2 {
  position: relative;
  width: 12.55px;
  height: 18.12px;
  right: 2%;

  background: #eab15d;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

.reminder-3 {
  position: relative;
  width: 12.55px;
  height: 18.12px;
  right: 2%;

  background: #eeefa6;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

.reminder-4 {
  position: relative;
  width: 12.55px;
  height: 18.12px;
  right: 2%;

  background: #c3c3c3;
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
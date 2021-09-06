<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>

    <div class="form-control form-control-check">
      <input type="checkbox" v-model="category.do_it" name="category.do_it" />
      <input type="checkbox" v-model="category.schedule_it" name="category.schedule_it" />
      <input type="checkbox" v-model="category.delegate_it" name="category.delegate_it" />
      <input type="checkbox" v-model="category.delete_it" name="category.delete_it" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
    export default {
        name: 'AddTask',
        data() {
            return {
                text: '',
                day: '',
                category: {
                  do_it: false,
                  schedule_it: false,
                  delegate_it: false,
                  delete_it: false
                },
                //reminder: false,
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()

                if(!this.text) {
                    alert('Please add a task')
                    return
                }

                const newTask = {
                    // id: Math.floor(Math.random() * 100000),
                    text: this.text,
                    day: this.day,
                    //reminder: this.reminder,
                    category: this.category
                }

                this.$emit('add-task', newTask)

                this.text = ''
                this.day = ''
                //this.reminder = false
                this.category = {
                  do_it: false,
                  schedule_it: false,
                  delegate_it: false,
                  delete_it: false
                }
            },
        },
    }
</script>


<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

.gategory_1 {
  background-color: #D05454;
}

.gategory_2 {
  background: #EAB15D;
}

.gategory_3 {
  background: #EEEFA6;
}

.gategory_4 {
  background: #C3C3C3;
}
</style>
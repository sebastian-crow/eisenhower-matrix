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

      <label class="content" id="c1" title="Urgent: Do It">
        <input type="checkbox" checked="checked" v-model="category.do_it" name="category.do_it" />
        <span class="checkmark"></span>
      </label>

      <label class="content" id="c2" title="Not Urgent: Schedule It">
        <input type="checkbox" checked="checked" v-model="category.schedule_it" name="category.schedule_it" />
        <span class="checkmark"></span>
      </label>

      <label class="content" id="c3" title="Not Important: Delegate It">
        <input type="checkbox" checked="checked" v-model="category.delegate_it" name="category.delegate_it" />
        <span class="checkmark"></span>
      </label>

      <label class="content" id="c4" title="Not Important: Delete It">
        <input type="checkbox" checked="checked" v-model="category.delete_it" name="category.delete_it" />
        <span class="checkmark"></span>
      </label>

    </div>
    <br>
    <input type="submit" value="Save Task" class="btn btn-block send-button" />
  </form>
</template>


<!--<input type="checkbox" v-model="category.schedule_it" name="category.schedule_it" />
      <input type="checkbox" v-model="category.delegate_it" name="category.delegate_it" />
      <input type="checkbox" v-model="category.delete_it" name="category.delete_it" /> -->

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

.send-button {
  background: black;
  font-family: 'Fira Code', monospace;
  letter-spacing: 0.18em;
  font-size: 1.2rem;
  text-decoration-color: black;
}


.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
  font-family: "Fira Code", monospace;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
  border: 2px solid black;
  border-radius: 6px;
  font-family: "Fira Code", monospace;

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


/* Checkbox */


#c1 input:checked ~ .checkmark {
    background-color: #D05454;
;
    }
    #c2 input:checked ~ .checkmark {
    background-color: #EAB15D;
;
    }
    #c3 input:checked ~ .checkmark {
    background-color: #EEEFA6;

    }
    #c4 input:checked ~ .checkmark {
    background-color: #C3C3C3;
    }
    
    /* Contenedor */
    .content {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
    }
    
    /* escondemos el default checkbox */
    .content input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    
    /* creamos un custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 2.5rem;
      height: 25px;
      width: 25px;
      background-color: white;
      border: 2px solid black;
      border-radius: 4px;
    }
    
    /* Al pasar el mouse encima, lo ponemos gris */
    .content:hover input ~ .checkmark {
      background-color: #ccc;
    }

    #c1:hover input ~ .checkmark {
      background-color: #D05454;
    }

    #c2:hover input ~ .checkmark {
      background-color: #EAB15D;
    }

    #c3:hover input ~ .checkmark {
      background-color: #EEEFA6;
    }

    #c4:hover input ~ .checkmark {
      background-color: #C3C3C3;
    }
    
    /* creamos el marcador (escondido al no seleccionar) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    
    /* mostramos el marcador al seleccionar */
    .content input:checked ~ .checkmark:after {
      display: block;
    }
    
    /* estilo del marcador */
    .content .checkmark:after {
      left: 6.8px;
      top: 2.5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

</style>
<template>
    <AddTask v-show="showAddTask" @add-task="addTask"/>
    <!-- @priorization="priorization" 
    @toggle-reminder="toggleReminder"-->
    <Tasks 
        @delete-task="deleteTask"
        @edit-task="editTask"
        :tasks="tasks"
    />
</template>

<script>
    import Tasks from '../components/Tasks'
    import AddTask from '../components/AddTask'
    
    export default {
        name: 'Home',
        props: {
            showAddTask: Boolean,
        },
        components: {
            Tasks,
            AddTask,
        },
        data() {
            return {
                tasks: []
            }
        },
        methods: {
            async addTask(tasks) {
                const res = await fetch('api/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(tasks),
                })

                const data = await res.json()

                this.tasks = [...this.tasks, data]
            },
            

            async deleteTask(id) {
                if(confirm('Are you sure?')) {
                    const res = await fetch(`api/tasks/${id}`, {
                        method: 'DELETE',
                    })

                    res.status === 200
                        ? (this.tasks = this.tasks.filter((task) => task.id !== id))
                        : alert('Error deleting task')
                }
            },

        /*
            async editTask(id) {
                console.log(id)
                

                
            },
        */

        /*    
            async toggleReminder(id) {
                const taskToToggle = await this.fetchTask(id)
                const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

                const res = await fetch(`api/tasks/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type' : 'application/json',
                    },
                    body: JSON.stringify(updTask),
                })

                const data = await res.json()

                this.tasks = this.tasks.map((task) =>
                    task.id === id ? {...task, reminder: data.reminder} : task
                )
            },
        */
       /*
            async toggleReminder(id) {
                const taskToToggle = await this.fetchTask(id)
                const updTask = {...taskToToggle, category: !taskToToggle.category.do_it}
                

                const res = await fetch(`api/tasks/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type' : 'application/json',
                    },
                    body: JSON.stringify(updTask),
                })

                const data = await res.json()

                this.tasks = this.tasks.map((task) =>
                    task.id === id ? {...task, category: data.category} : task
                )
            },
*/
            async fetchTasks() {
                const res = await fetch('api/tasks')

                const data = await res.json()

                return data
            },
        },

        async created() {
            this.tasks = await this.fetchTasks()
        },
    }
</script>

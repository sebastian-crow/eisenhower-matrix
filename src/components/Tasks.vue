<template>
    <div :key="task.id" v-for="task in tasks">
        <Task 
            @toggle-reminder="$emit('priorization', task.id)"
            @delete-task="$emit('delete-task', task.id)"
            @edit-task="$emit('edit-task', task.id)"
            :task="task"
        />
    </div>
</template>

<script>
    import Task from './Task'

    export default {
        name: 'Tasks',
        props: {
            tasks: Array,
        },
        components: {
            Task,
        },
        //emits: ['delete-task', 'toggle-reminder', 'edit-task']
        emits: ['delete-task', 'priorization', 'edit-task']
    }
</script>

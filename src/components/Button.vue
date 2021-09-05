<template>
    <button @click="onClick()" :style="{ background: color}" class="btn">
        <h1 class="text">{{ text }}</h1>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        },
    },
}
</script>

<style scoped>
    .text{
        color:black;
        font-size: 1.5rem;
    }
</style>

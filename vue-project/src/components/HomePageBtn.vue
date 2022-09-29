<script>
import { RouterLink } from 'vue-router'
    export default {
        components: {
            RouterLink
        }
    }

</script>

<template>

    <button class="homepagebtn"><RouterLink to="/series-list" >Kolla in alla serier!</RouterLink></button>

</template>

<style lang="postcss" scoped>

   .homepagebtn {
    background-color: rgb(184, 188, 158);
    @apply px-6 py-2 text-black mt-6 uppercase text-base ;
   }

   .homepagebtn:hover {
    background-color: rgb(120, 125, 100);
    cursor: pointer;
    transition: all 0.8s;
   }

</style>
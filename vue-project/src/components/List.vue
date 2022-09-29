<script>
    
    export default {
        data () {
      return {
        active: false
      }
    },
        props: {
            list: Object
        },
        methods: {
      toggle () {
        this.active = !this.active
      }
    }
}
    

</script>

<template>
    <article class="card-container"> 
        
        <div class="card">

                <img class="card-image" src="\src\images\image.jpg" alt="">
            
            <div class="card-text-container">
                <h2 class="card-heading">{{ list.name }} </h2>
                <p class="card-text"><b>Seasons: </b>{{ list.seasons }}</p>
                <p class="card-text"><b>Produced By: </b>{{ list.produced_by }}</p>
                <p class="card-text"><b>Streaming At: </b>{{ list.streaming_at }}</p>
                <span class="card-text" v-if='list.cancelled'><b>Is cancelled? </b> Yes</span>
                <span class="card-text" v-else><b>Is cancelled? </b> No</span>
            </div>

            <div class="dropdownbtn">
                <button @click="toggle"><img src="../images/img_menu.svg" alt=""></button>
                    <div v-if="active" class="dropdown">
                        <button 
                        @click="$emit('deleteSeries')">
                        Delete</button>

                        <button 
                        @click="$emit('transferData')">
                        Edit</button>
                    </div>
            </div>

        </div>
    </article>   
</template>

<style lang="postcss" scoped>

    .card-container {
        @apply sm:w-1/2 md:w-1/3 lg:w-1/4 px-4;
    }

    .card {
        @apply relative left-0 rounded-md my-4 shadow-lg bg-gray-50 hover:bg-gray-100 cursor-pointer;
    }
    .card-image {
        @apply w-full;
    }

    .card-heading {
        @apply font-bold text-lg mb-2;
    }
    .card-text-container {
        @apply px-6 py-8;
    }
    .card-text {
        @apply text-gray-700 text-sm;
    }

    .dropdownbtn {
        @apply absolute top-2 right-2 bg-gray-300 w-8 pl-1 pt-1 rounded-full;
    }

    .dropdown {
        @apply absolute right-6 top-10 bg-white py-2 px-6 rounded-md opacity-60;
    }

    .dropdown button {
        @apply hover:underline py-1;
    }

    

    

</style>
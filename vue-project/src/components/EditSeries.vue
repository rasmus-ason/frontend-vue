<script>
    export default {
        data() {
            return {
                name: this.serie.name,
                seasons: this.serie.seasons,
                streaming: this.serie.streaming_at,
                produced: this.serie.produced_by,
                cancelled: this.serie.cancelled
                }
        },
        props: {
            serie: Object
        },
        methods: {
            async editSeries() {

                let message = document.getElementById("message");
                
                //Check inputs
                if(this.name.length < 1 ) {
                    message.innerHTML = "To add a series it need a name"; 
                    return;     
                }
                if(this.seasons.length < 1 ) {
                    message.innerHTML = "Number of seasons needs to be added";
                    return;  
                }
                if(this.produced.length < 2 ) {
                    message.innerHTML = "Add who produced the series";
                    return;  
                }
                if(this.cancelled < 1) {
                    message.innerHTML = "Tell if the series is cancelled or not";
                    return;  
                }

                //Convert value from boolean to 1 0r 0
                if(this.cancelled == "Yes" ) {
                    this.cancelled = 1;
                }else{
                    this.cancelled = 0;
                }

                //Store input values in variable
                let inputs = {
                    name: this.name,
                    seasons : this.seasons,
                    streaming_at : this.streaming,
                    produced_by : this.produced,
                    cancelled : this.cancelled     
                }

                //Create a POST call to API
                const resp = await fetch("https://laravel-project-rasmus-ason.herokuapp.com/api/series/" + this.serie.id, {
                    method : "PUT",
                    headers : {
                        "Accept" : "application/json",
                        "Content-type" : "application/json"
                    },
                    body : JSON.stringify(inputs)
                });

                const data = await resp.json();

                //Clear input fields
                this.name = "",
                this.seasons = "",
                this.streaming = "",
                this.produced = "",
                this.cancelled = ""

                //Create emit
                this.$emit('toListView');
                }
            },
            mounted() {
                //Change two way binding to yes/no from boolean 
                if(this.serie.cancelled == 1){
                    this.cancelled = "Yes"
                }else {
                    this.cancelled = "No";
                }
            }
        }
    

</script>

<template>
    <form @submit.prevent="editSeries()">
        <h1 class="top-heading">Edit a series</h1>
        <div id="message"></div>
                <label for="addName">Name</label>
                <input v-model="name" type="text">

                <label for="addSeason">Seasons</label>
                <input v-model="seasons" type="number" name="" id="">

                <label for="addStream">Streaming At:</label>
                <input v-model="streaming" type="text">

                <label for="addProducer">Produced By</label>
                <input v-model="produced" type="text" name="" id="">

                <label for="cancelled">Is the series cancelled?</label>
                <select v-model="cancelled" name="" id="">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <input type="submit" value="Edit Series">

            </form>
</template>

<style lang="postcss" scoped>

form {
    @apply bg-gray-700 shadow-md rounded px-16 pt-6 pb-8 my-6 mx-44;
}

label {
    @apply block text-gray-50 text-sm font-medium uppercase mb-2;
}

input {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-6;
}

input[type=submit] {
    @apply bg-white hover:bg-black hover:text-white cursor-pointer text-gray-700 font-bold py-2 px-4 rounded border-none mt-6;
}

#message {
    @apply py-2 text-red-500 text-lg text-center font-semibold;
}

.top-heading {
            @apply text-white text-2xl my-4 text-center font-thin md:text-4xl uppercase md:my-12;
        }

</style>
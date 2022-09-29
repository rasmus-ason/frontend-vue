<script>
import { RouterLink } from "vue-router";
import List from "../components/List.vue";
import EditSeries from "../components/EditSeries.vue";

    export default {
        //Data property
        data() {
            //data object where data from API is stored
            return {
                lists: [],
                //Null as default, values stored when calling fetch put
                oneItem: null
            }
        },
    components: {
        List,
        EditSeries
},
    methods : {
        //Create function
        async getList() {
            //Store response from API
            const response = await fetch ("https://laravel-project-rasmus-ason.herokuapp.com/api/series");

            //Store response in json, wait for response before convert to json
            const data = await response.json();

            console.log(data);

            //Store response in data property
            this.lists = data;
        },
        async deleteSeries(id) {

            let text = "Are you sure you want to delete this series?";

            if (confirm(text) == true) {
              
                //Store response from API
                const response = await fetch ("https://laravel-project-rasmus-ason.herokuapp.com/api/series/" + id, {
                    method : "DELETE",
                    headers : {
                            "Accept" : "application/json",
                            "Content-type" : "application/json"
                            }
                });

                //Get data from API
                const data = await response.json();

                //Read in list 
                this.getList();
            }else {
                return;
            }
        },
        //Get data and store as json
        async transferData(id) {

            //Store response from API
            const response = await fetch ("https://laravel-project-rasmus-ason.herokuapp.com/api/series/" + id, {
                method : "GET",
                headers : {
                        "Accept" : "application/json",
                        "Content-type" : "application/json"
                        }
            });

            //Store info of one unique id as json
            const data = await response.json();

            this.oneItem = data;
        },
        toListView() {
            this.oneItem = null;
            //Run getList-function
            this.getList();

         
        
        }
        },
    //Method that runs when component is done
    mounted() {
        //Run getList-function
        this.getList();
    }
    }
  
</script>

<template>
    <div>
    <h1 v-if="oneItem==null" class="top-heading">Check out all these series</h1>
        <!--Import EditSeries view of variable oneItem is not null-->
        <EditSeries v-if="oneItem!==null" :serie="oneItem" @toListView="toListView()" />
        <div class="card-container-all">
            <!--Import List component-->
            <List @deleteSeries="deleteSeries(list.id)" @transferData="transferData(list.id)"  
            v-for="list in lists" :list="list" :key="list.id"
            v-if="oneItem==null"
            /> 
        </div>

    </div>
</template>

<style lang="postcss" scoped>

    .top-heading {
        @apply text-2xl my-4 text-center font-thin md:text-4xl uppercase md:my-12;
    }

    .card-container-all {
        @apply flex flex-wrap mx-auto;
    }

</style>
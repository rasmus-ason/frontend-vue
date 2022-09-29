<script>
    import { RouterLink } from 'vue-router'
    export default {
        components: {
            RouterLink
        }
    }

  
</script>

<template>
    
<header class="header">
    <div>
        <div class="header-heading">
            <h1>The Vue Project.</h1>            
        </div>
        <div class="header-nav">
            <nav>
                <ul class="nav">
                    <li class="nav-item"><RouterLink to="/" >Home</RouterLink></li>
                    <li class="nav-item"><RouterLink to="/series-form" >Add</RouterLink></li>
                    <li class="nav-item"><RouterLink to="/series-list" >List</RouterLink></li>
                    <li class="nav-item"><RouterLink to="/review" >Review</RouterLink></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
  
</template>

<style lang="postcss" scoped>

.header {
    @apply max-w-none;
}

.header-heading {
    @apply text-3xl uppercase text-center font-serif md:text-6xl py-4 bg-gray-100 ;
}

.header-nav {
    @apply bg-black flex space-x-12 p-1 md:p-2 uppercase font-light;
}

.nav {
    @apply flex;
}

.nav-item {
    @apply px-4 text-gray-100 items-center;
}

.nav-item:hover {
    @apply text-gray-300;
}




  

</style>
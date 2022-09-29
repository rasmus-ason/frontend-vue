<script>
import HomePageBtn from "../components/HomePageBtn.vue";

export default {
  components: {
            HomePageBtn
        }
}

</script>

<template>
  <div>
  
    <div class="header-container">
      <div class="banner-box">
        <img class="header-image" src="../images/banner_01.jpg" alt="">
        </div>
      <div class="banner-box banner-box-text">
        <h1 class="top-heading">"Create a collection of your favourite tv-series!"</h1>
        </div>  
      <div class="banner-box">
        <img class="header-image" src="../images/banner_02.jpg" alt="">
        </div>
      </div>

      <article class="text-box">
        <h2>Om denna webbplats!</h2>
        <p>Denna webbplats omfattar ett intresse för mig, tv-serier. Jag har alltid uppskattat att kolla på tv-serier så
        på denna webbplats kan man skapa ett bibliotek med sina favoritserier. Webbplatsen är skapat som en <i>Single
        Page Application</i> där serierna hämtas från ett API skapat med Laravel.
        </p>
        <HomePageBtn />
      </article>
    

  </div>
  
</template>

<style lang="postcss" scoped>

  .header-container {
    @apply w-full flex flex-col md:flex-row my-4;
  }

  .header-image {
    @apply w-full ;
  }

  .banner-box {
    @apply md:w-1/3 mx-4;
  }


  .top-heading {
            @apply text-4xl p-16 md:text-xl lg:text-3xl lg:p-8 xl:p-14 xl:text-4xl md:p-6 text-black text-center font-extralight;
        }

  .text-box {
    @apply w-full text-sm text-white text-center
    bg-black py-12 mx-auto;
  }

  .text-box h2 {
    @apply uppercase text-4xl mb-6 font-thin
  }

  .text-box p {
    @apply max-w-md mx-auto;
  }
</style>
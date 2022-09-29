<script setup>
  
</script>

<template>
    <div class="review-container">
        <div class="content-box"><img src="../images/banner_01.jpg" alt=""></div>
        <div class="content-box content-text">
            <h1>Review of Vue</h1>
            <p>
                Jag tycker Vue är ett bra verktyg att arbeta med. Det känns relativt lätt att lära sig när man känner 
                till alla funktioner som finns. Jag behöver hitta ett bättre sätt att strukturera upp mina filer, placera i 
                mappar, dela upp innehåll och bestämma vad som ska vara komponentbaserat och så vidare. 
            </p>
        </div>
        <div class="content-box"><img src="../images/banner_02.jpg" alt=""></div>
    </div>

    <div class="textExtra">
        <h2>Fördelar</h2>
        <p>
                Jag ser många fördelar med att arbeta med ramverk för frontend-utveckling och med just Vue gillar jag 
                den tänkta strukturen med vyer och komponenter. Det blir ett effektivt sätt att strukturera upp och 
                fördela filerna så man får kontroll över sitt projekt. Det genererar betydligt mindre kod än 
                motsvarande lösningar med egen JavaScript-kod. När man väl kan ett ramverk ser jag inga direkta
                nackdelar.

            </p>
    </div>
  
  
</template>

<style lang="postcss" scoped>

.top-heading {
            @apply uppercase text-4xl md:text-xl lg:text-3xl lg:p-10 xl:p-10 xl:text-4xl md:p-6 text-black 
            text-center font-extralight py-8;
        }

.review-container {
    @apply flex flex-col md:flex-row;
}

.content-box {
    @apply md:w-1/2  bg-black text-white;
}

.content-text {
    @apply px-8 sm:py-24 md:py-14 text-center text-sm;
}

.textExtra {
    @apply w-full bg-black text-white mx-auto text-sm py-24 my-10;
}

.textExtra p {
    @apply max-w-md mx-auto text-center;
}

.textExtra h2, .content-text h1 {
    @apply text-white uppercase text-4xl md:text-xl lg:text-3xl xl:text-4xl
            text-center font-extralight mb-6;
}

</style>
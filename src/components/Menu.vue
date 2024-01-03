<script >
import { antipasti, tradizionali, originali, speciali, bottleBeers, draftDrinks, desserts } from "../data.js";
export default {
  data() {
    return {
      textMuted: '(*) = Prodotto che potrebbe essere surgelato, per informazioni riguardo ingredienti o alimenti che possono provocare vallergie o intolleranze, chiedere al personale di sala. Comunicare al titolare tempestivamente e prima della consumazione qualsiasi tipo di allergie o intolleranze, grazie per la collaborazione.',
      antipasti,
      tradizionali,
      originali,
      speciali,
      bottleBeers,
      draftDrinks,
      desserts
    };
  },
};
</script>

<template>
    <div class="container my-4">
        <!-- LOGO -->
        <div class="first-page">
            <img src="../../public/logo.jpg" alt="">
            <div class="text-center blue-title fw-semibold my-4">
                <div>di Bertocco G.</div>
                <div>Via Roma, 194 Albignasego (PD)</div>
                <div>Tel: 049-710044</div>
            </div>
            <div class="text-center blue-title fw-semibold my-4">
                <div>Per i vini, abbiamo una carta dedicata! Richiedila al personale di sala!</div>
                <div>Coperto 1,00 €</div>
            </div>
        </div>
        <h1 class="blue-title">Da Mangiare...</h1>
        <!-- ANTIPASTI -->

        <div class="blue-card shadow px-4 py-2 my-4">
            <h2 class="blue-title text-center">Antipasti</h2>
            <div v-for="(antipasto, index) in antipasti" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h4 class="me-2 fw-bold">{{ antipasto.name }} :</h4>
                        <span class="fw-semibold">{{ antipasto.ingredients }}</span>
                    </div>
                    <span class="fw-bold">{{ antipasto.price }}</span>
                </div>
            </div>
        </div>

        <!-- LE TRADIZIONALI -->
        <div class="my-4">
            <h2 class="blue-title text-center">Le Tradizionali</h2>
            <div v-for="(pizza, index) in tradizionali" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h4 class="me-2 fw-bold">{{ pizza.name }} :</h4>
                        <span class="fw-semibold">{{ pizza.ingredients }}</span>
                    </div>
                    <span class="fw-bold">{{ pizza.price }}</span>
                </div>
            </div>
        </div>

        <!-- INTOLLERANZE -->

        <div class="text-muted fw-semibold my-4">{{ textMuted }}</div>

        <!-- LE ORIGINALI -->

        <div class="my-4">
            <h2 class="blue-title text-center">Le Originali</h2>
            <div v-for="(pizza, index) in originali" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h5 class="me-2 fw-bold">{{ pizza.name }} :</h5>
                        <span class="fw-semibold">{{ pizza.ingredients }}</span>
                    </div>
                    <span class="fw-bold">{{ pizza.price }}</span>
                </div>
            </div>
        </div>

        <!-- LE SPECIALI -->

        <div class="my-4">
            <h2 class="blue-title text-center">Le Speciali</h2>
            <div v-for="(pizza, index) in speciali" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h5 class="me-2 fw-bold">{{ pizza.name }} :</h5>
                        <span class="fw-semibold">{{ pizza.ingredients }}</span>
                    </div>
                    <span class="fw-bold">{{ pizza.price }}</span>
                </div>
            </div>
        </div>

        <!-- DA BERE -->

        <h1 class="blue-title my-4">Da Bere...</h1>
        <div class="blue-card shadow px-4 py-2 my-4">

            <!-- BIRRE IN BOTTIGLIA  -->

            <h2 class="blue-title text-center">Birre in bottiglia</h2>
            <div v-for="(bibita, index) in bottleBeers" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h4 class="me-1 fw-bold">{{ bibita.name }}</h4>
                        <span class="me-2 fw-semibold">{{ bibita.grade }} :</span>
                        <span class="fw-semibold">{{ bibita.description }}</span>
                    </div>
                    <span class="fw-bold">{{ bibita.price }}</span>
                </div>
            </div>

            <!-- BIBITE ALLA SPINA -->

            <h2 class="blue-title text-center">Bibite alla spina</h2>
            <div v-for="(bibita, index) in draftDrinks" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h4 class="me-1 fw-bold">{{ bibita.name }}</h4>
                        <span class="me-2 fw-semibold">{{ bibita.grade }} :</span>
                        <span class="fw-semibold">{{ bibita.description }}</span>
                    </div>
                    <span class="fw-bold">{{ bibita.price }}</span>
                </div>
            </div>
        </div>

        <!-- INTOLLERANZE -->

        <div class="text-muted fw-semibold my-4">{{ textMuted }}</div>

        <!-- DESSERT -->

          <div class="my-4">
            <h2 class="blue-title text-center">Dessert</h2>
            <div v-for="(dessert, index) in desserts" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h5 class="me-2 fw-bold">{{ dessert.name }} :</h5>
                        <span class="fw-semibold">{{ dessert.ingredients }}</span>
                    </div>
                    <span class="fw-bold">{{ dessert.price }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.first-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.blue-title{
    color: #1F497D;
}
.blue-card{
    background-color: #C6D9F1;
    border: 10px solid #1F497D;
}

</style>

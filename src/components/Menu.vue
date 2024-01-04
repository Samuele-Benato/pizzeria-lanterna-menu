<script >
import { antipasti, tradizionali, originali, speciali, bottleBeers, draftDrinks, desserts, wines } from "../data.js";
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
      desserts,
      wines
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

        <div class="blue-line"></div>
        <!-- ANTIPASTI -->

        <div class="blue-card shadow px-4 py-2 my-4">
            <h2 class="blue-title text-center">Antipasti</h2>
            <div v-for="(antipasto, index) in antipasti" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h4 class="me-2 fw-bold">
                            {{ antipasto.name }}
                            <span v-if="antipasto.ingredients !== ''">:</span>
                        </h4>
                        <span class="fw-semibold">{{ antipasto.ingredients }}</span>
                    </div>
                    <span class="fw-bold">{{ antipasto.price }}</span>
                </div>
            </div>
        </div>

        <div class="blue-line"></div>
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

        <div class="blue-line"></div>
        <!-- LE ORIGINALI -->

        <div class="my-4">
            <h2 class="blue-title text-center">Le Originali</h2>
            <div v-for="(pizza, index) in originali" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h5 class="me-2 fw-bold">{{ pizza.name }} :</h5>
                        <span class="fw-semibold">{{ pizza.ingredients }} 
                            <br> 
                            <span class="fw-semibold">{{ pizza.ingredientss }}</span>
                        </span>
                    </div>
                    
                    <span class="fw-bold">{{ pizza.price }}</span>
                </div>
            </div>
        </div>

        <div class="blue-line"></div>
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

        <div class="blue-line"></div>
        <!-- DA BERE -->

        <div class="blue-card shadow px-4 py-2 my-4">

            <!-- BIRRE IN BOTTIGLIA  -->

            <h2 class="blue-title text-center">Birre in bottiglia</h2>
            <div v-for="(bibita, index) in bottleBeers" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h4 class="me-1 fw-bold">{{ bibita.name }}</h4>
                        <span class="me-2 fw-semibold">
                            {{ bibita.grade }}
                            <span v-if="bibita.description !== ''">:</span>
                        </span>
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
                        <span class="me-2 fw-semibold">
                            {{ bibita.grade }} 
                            <span v-if="bibita.description !== ''">:</span>
                        </span>
                        <span class="fw-semibold">{{ bibita.description }}</span>
                    </div>
                    <span class="fw-bold">{{ bibita.price }}</span>
                </div>
            </div>
        </div>

        <!-- INTOLLERANZE -->

        <div class="text-muted fw-semibold my-4">{{ textMuted }}</div>

        <div class="blue-line"></div>
        <!-- DESSERT -->
        
          <div class="my-4 dessert-container">
            <h2 class="blue-title text-center">Dessert</h2>
            <div v-for="(dessert, index) in desserts" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <div class='d-flex align-items-center' >
                        <h5 class="me-2 fw-bold">{{ dessert.name }}</h5>
                        <span class="fw-semibold">{{ dessert.ingredients }}</span>
                    </div>
                    <span class="fw-bold">{{ dessert.price }}</span>
                </div>
            </div>
        </div>

        <!-- CARTA DEI VINI -->
        <div class="wine-container">
            <h1 class="blue-title text-center my-5">Carta dei vini</h1>

            <!-- CANTINA DEI COLLI EUGANEI -->

            <table class="table table-striped mt-4">
                <thead>
                    <tr class="text-center">
                    <th class="blue-title" scope="col">
                        <h6>Cantina dei Colli Euganei</h6>
                        <span>Vò (PD)</span>
                    </th>
                    <th class="blue-title" scope="col"><font-awesome-icon :icon="['fas', 'wine-glass']" /></th>
                    <th class="blue-title" scope="col">1/4</th>
                    <th class="blue-title" scope="col">1/2</th>
                    <th class="blue-title" scope="col"><font-awesome-icon :icon="['fas', 'wine-bottle']" /></th>
                    </tr>
                </thead>
                <tbody >

                    <!-- LINEA -->

                    <tr>
                    <th scope="row">
                        <h6>Cabernet DOC</h6>
                        <span>(Cabernet sauvignon 80%-Cabertnet Franc 20%)</span>
                    </th>
                    <td>3€</td>
                    <td>5€</td>
                    <td>8€</td>
                    <td>12€</td>
                    </tr>
                    
                    <!-- LINEA -->

                    <tr>
                    <th scope="row">
                        <h6>Merlot DOC</h6>
                        <span>(Merlot 100%)</span>
                    </th>
                    <td>3€</td>
                    <td>5€</td>
                    <td>8€</td>
                    <td>12€</td>
                    </tr>

                    <!-- LINEA -->

                    <tr>
                    <th scope="row">
                        <h6>Pinot grigio DOC</h6>
                        <span>(Pinot grigio 100%)</span>
                    </th>
                    <td>3€</td>
                    <td>5€</td>
                    <td>8€</td>
                    <td>12€</td>
                    </tr>
                </tbody>
            </table>

            <!-- AZIENDA AGRICOLA REASSI -->

            <div class="row">
                <table class="table table-striped mt-4 w-50">
                    <thead>
                        <tr class="text-center">
                        <th class="blue-title" scope="col">
                            <h6>Azienda Agricola Reassi</h6>
                            <span>Rovolon (PD)</span>
                        </th>
                        <th class="blue-title" scope="col"><font-awesome-icon :icon="['fas', 'wine-bottle']" /></th>
                        </tr>
                    </thead>
                    <tbody >

                        <!-- LINEA -->

                        <tr>
                        <th scope="row ">
                            <h6>Pinello dei Colli Euganei DOC</h6>
                            <span>(Pinella 100% Vino biologico)</span>
                        </th>
                        <td colspan="2">15€</td>
                        </tr>

                    </tbody>
                </table>

                <!-- VIGNA RODA -->

                <table class="table table-striped mt-4 w-50">
                    <thead>
                        <tr class="text-center">
                        <th class="blue-title" scope="col">
                            <h6>Vigna Ròda</h6>
                            <span>Vò (PD)</span>
                        </th>
                        <th class="blue-title" scope="col"><font-awesome-icon :icon="['fas', 'wine-bottle']" /></th>
                        </tr>
                    </thead>
                    <tbody>

                        <!-- LINEA -->

                        <tr>
                        <th class="ps-4" scope="row">
                            <h6>Fior d'Arancio dei Colli Euganei DOCG</h6>
                            <span>(100% Moscato giallo)</span>
                        </th>
                        <td colspan="2">14€</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <!-- BORTOLOMIOL -->

            <div class="row">
                <table class="table table-striped mt-4 w-50">
                    <thead>
                        <tr class="text-center">
                        <th class="blue-title" scope="col">
                            <h6>Bortolomiol</h6>
                            <span>Valdobbiadene (TV)</span>
                        </th>
                        <th class="blue-title" scope="col"><font-awesome-icon :icon="['fas', 'wine-bottle']" /></th>
                        </tr>
                    </thead>
                    <tbody >

                        <!-- LINEA -->

                        <tr>
                        <th scope="row ">
                            <h6>Prosecco DOCG Extra dry Millesimato</h6>
                        </th>
                        <td colspan="2">16€</td>
                        </tr>

                        <!-- LINEA -->

                        <tr>
                        <th scope="row ">
                            <h6>Prosecco DOCG Brut Millesimato</h6>
                        </th>
                        <td colspan="2">16€</td>
                        </tr>

                        <!-- LINEA -->

                        <tr>
                        <th scope="row ">
                            <h6>Prosecco DOCG Extra dry “Banda Rossa” Millesimato</h6>
                        </th>
                        <td colspan="2">20€</td>
                        </tr>

                    </tbody>
                </table>

                <!-- PRATELLO -->

                <table class="table table-striped mt-4 w-50">
                    <thead>
                        <tr class="text-center">
                        <th class="blue-title" scope="col">
                            <h6>Pratello</h6>
                            <span>Padenghe Sul Garda (BS)</span>
                        </th>
                        <th class="blue-title" scope="col"><font-awesome-icon :icon="['fas', 'wine-bottle']" /></th>
                        </tr>
                    </thead>
                    <tbody>

                        <!-- LINEA -->

                        <tr>
                        <th class="ps-4 pt-5" scope="row">
                            <h6>Milleuno Garda Rosso DOC</h6>
                            <span>(Merlot Rebo)</span>
                        </th>
                        <td class="pt-5" colspan="2">20€</td>
                        </tr>

                    </tbody>
                </table>
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
.dessert-container{
    width: 50%;
    margin: 0 auto;
}
.wine-container{
    height: 100vh;
    margin-top: 7rem;
}
.blue-title{
    color: #1F497D;
}
.blue-card{
    background-color: #C6D9F1;
    border: 10px solid #1F497D;
}
.blue-line{
    width: 80%;
    margin: 3rem auto;
    background-color: #1F497D;
    height: 5px;
    border-radius: 5px;
}

td{
    font-weight: 600 !important;
    text-align: center;
}
</style>

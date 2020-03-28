<template>
  <div class="home container-lg">
    <div class="row">
      <b-card-group deck v-for="(pokemon, index) in kantoPokemon" :key="index">

      </b-card-group>
    </div>
  </div>
    
</template>

<script>
// @ is an alias to /src
import axios from "axios";


export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      kantoPokemon: [] //arreglo { name, url }
    }
  },
  mounted() {
    this.getKantoPokemon();
  },
  methods: {
    async getKantoPokemon() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(allPokemon => {
          allPokemon.data.results.forEach( pokemon => {
            this.getPokeData(pokemon);
          })
        })
      } catch (error) {
        console.error(error, 'Something went wrong!');
      }
    },
    async getPokeData(pokemon) {
      const url = pokemon.url;
      const response = await axios.get(url)
      .then(pokeData => console.log(pokeData)
      )
    }
  }
}
</script>

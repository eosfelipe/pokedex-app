<template>
  <div class="container-fluid">
    <div class="px-lg-5 pt-70">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6 mb-4" v-for="pokemon in sortedArray" :key="pokemon.id">
          <div class="bg-white rounded shadow-sm">
            <b-img :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`" fluid>
            </b-img>
            <div class="p-4">
              <h5> <a href="#" class="text-dark">{{pokemon.name | capitalize }}</a></h5>
              <p class="small text-muted mb-0">Base EXP: {{pokemon.base_experience}}</p>
              <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">JPG</span></p>
                <div class="badge badge-danger px-3 rounded-pill font-weight-normal">new</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      kantoPokemon: []
    }
  },
  filters: {
    capitalize: function(value) {
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
        }
        return this.kantoPokemon.sort(compare);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getKantoPokemon();
    })
  },
  methods: {
    async getKantoPokemon() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9');
        response.data.results.forEach(pokemon => {
          this.getPokeData(pokemon);
        })
      } catch (error) {
        console.error(error, 'Something went wrong!');
      }
    },
    async getPokeData(pokemon) {
      const url = pokemon.url;
      try {
        const response = await axios.get(url);
        this.kantoPokemon.push(response.data);
      } catch (error) {
        console.log(error, 'Something went wrong!');
      }
    }
  }
}
</script>

<style lang="css">
  .pt-70 {
    padding-top: 70px !important;
  }
</style>


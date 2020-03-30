<template>
  <div class="container-fluid mt-5">
    <div class="px-lg-5 pt-70">
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6 mb-4"
          v-for="pokemon in sortedArray"
          :key="pokemon.id"
        >
          <div class="bg-white rounded shadow">
            <b-img
              :src="
                `${pokemon.img}`
              "
              fluid
            ></b-img>
            <div class="p-4">
              <h5>#{{pokemon.id}}</h5>
              <h5>
                <a href="#" class="text-dark">
                  {{
                  pokemon.name | capitalize
                  }}
                </a>
              </h5>
              <p class="small text-muted mb-0">Base EXP: {{ pokemon.base_experience }}</p>
              <div
                class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                <div class="badge badge-info px-3 rounded-pill font-weight-normal" 
                v-for="(type,index) in pokemon.types" :key="index">{{type.type.name}}</div>
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
  name: "Home",
  components: {},
  data() {
    return {
      kantoPokemon: [],
      pokemon: 
      {
        id: String,
        order: String,
        name: String,
        base_experience: String,
        img: String,
        types: []
      }
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
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
    });
  },
  methods: {
    async getKantoPokemon() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        response.data.results.forEach(pokemon => {
          this.getPokeData(pokemon);
        });
      } catch (error) {
        console.error(error, "Something went wrong!");
      }
    },
    async getPokeData(pokemon) {
      const url = pokemon.url;
      try {
        const response = await axios.get(url);
        this.pokemon = new Object();
        this.pokemon.id = response.data.id;
        this.pokemon.order = response.data.order;
        this.pokemon.name = response.data.name;
        this.pokemon.base_experience = response.data.base_experience;
        this.pokemon.img = 'https://pokeres.bastionbot.org/images/pokemon/'+response.data.id+'.png';
        this.pokemon.types = response.data.types;
        this.kantoPokemon.push(this.pokemon);
      } catch (error) {
        console.log(error, "Something went wrong!");
      }
    }
  }
};
</script>

<style lang="css">
.pt-70 {
  padding-top: 70px !important;
}
</style>

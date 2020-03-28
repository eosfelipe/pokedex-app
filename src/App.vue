<template>
  <div id="app">
    <div class="loader text-center" v-if="loading">
      <div class="loader-inner">
        <b-img :src="require('./assets/pikachu.gif')" fluid alt="pika-pika"></b-img>
        <b-alert show variant="warning">Loading...</b-alert>
      </div>
    </div>

    <b-navbar toggleable="md" variant="danger" type="dark">
      <b-navbar-brand href="#">PokeDex App</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/about">Liga</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input class="mr-sm-2" size="sm" placeholder="Buscar"></b-form-input>
            <b-button class="my-2 my-sm-0" size="sm" type="submit">Buscar</b-button>
          </b-nav-form>


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      console.log('start');
      this.loading = true;
    },
    finish() {
      setTimeout( () => {
        this.loading = false;
        console.log('finish');
      }, 4000)
    }
  },
  mounted() {
    this.start();
    this.finish();
  },
}
</script>

<style lang="css" scoped>
.router-link-exact-active {
  color: white !important;
}
.loader {
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.loader-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

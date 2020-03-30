<template>
  <div id="app">
    <div class="loader text-center" v-if="loading">
      <div class="loader-inner">
        <b-img
          :src="require('./assets/pikachu.gif')"
          fluid
          alt="pika-pika"
        ></b-img>
        <b-alert show variant="warning">Loading...</b-alert>
      </div>
    </div>

    <b-navbar toggleable="md" variant="danger" type="dark" fixed="top">
      <b-navbar-brand href="#">
        PokeDex App
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">League</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              class="mr-sm-2"
              size="sm"
              placeholder="
Gotta Catch 'Em All"
            ></b-form-input>
            <b-button class="my-2 my-sm-0" size="sm" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item>
            <a href="https://github.com/eosfelipe/pokedex-app" target="_blank">
              <b-img
                :src="require('./assets/github.png')"
                class="d-inline-block align-top"
                fluid
                alt="pokeball"
              ></b-img
            ></a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <!--Footer-->
    <footer class="bg-danger text-white">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <p class="font-italic text-center align-middle pt-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              odio tempora inventore dolorum distinctio sapiente sequi
              voluptatum, maxime fugiat reprehenderit vero blanditiis unde
              doloribus obcaecati cum magnam qui exercitationem deserunt.
            </p>
            <ul class="list-inline mt-4">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="twitter"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6 .offset-md-6 text-center">
            <b-img
              class="lugia"
              :src="require('./assets/footer-lugia.png')"
              fluid
              alt="lugia"
            ></b-img>
          </div>
        </div>
      </div>
      <div class="bg-light py-4">
        <div class="container text-center">
          <p class="text-muted mb-0 py-2">
            © {{ ano }} @eosfelipe All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    <!---->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      ano: new Date().getFullYear()
    };
  },
  methods: {
    start() {
      console.log("start");
      this.loading = true;
    },
    finish() {
      setTimeout(() => {
        this.loading = false;
        console.log("finish");
      }, 4000);
    }
  },
  mounted() {
    this.start();
    this.finish();
  }
};
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
.lugia {
  width: 300px;
  height: 300px;
}
.pt-70 {
  padding-top: 70px !important;
}
</style>

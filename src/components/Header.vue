<template>
  <div class="home" id="app">
    <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo blue-text text-darken-2">Vchamp</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">Manu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link class="blue-text text-darken-2" to="/">Home</router-link></li>
        <li><router-link class="blue-text text-darken-2" to="/about">About</router-link><li>
        <li><router-link class="blue-text text-darken-2" to="/contact">Contact</router-link></li>
        <li><router-link class="blue-text text-darken-2" to="#">Mobile</router-link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link><li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="#">Mobile</router-link></li>
  </ul>  
    <router-view />

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      siteName: "Vchamp"
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

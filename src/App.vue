<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/">Items App</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/shop">Shop</b-nav-item>
            <b-nav-item to="/auth/login">Login</b-nav-item>
            <b-nav-item to="/auth/registration">Registration</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>

    <b-container>
      <main>
        <router-view />
      </main>
    </b-container>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
  main {
    padding-top: 56px;
  }
</style>
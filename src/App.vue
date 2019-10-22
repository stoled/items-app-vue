<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
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
      <router-view />
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


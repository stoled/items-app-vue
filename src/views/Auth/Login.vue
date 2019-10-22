<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col sm="12" md="6">
        <h2>Login</h2>

        <b-form>
          <b-form-group>
            <b-form-input 
            type="email" 
            placeholder="Email" 
            name="email"
            v-model="email">
            </b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-input 
            type="password" 
            placeholder="Password" 
            name="password"
            v-model="password">
            </b-form-input>
          </b-form-group>

          <b-button 
          type="submit" 
          variant="primary"
          @click="onSubmit">
            Submit
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.password) {
        alert("Yeah! " + this.email + ' ' + this.password)
      }
      else {
        alert('Nope')
      }
    }
  }
}
</script>
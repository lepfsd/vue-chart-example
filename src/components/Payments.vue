<template>
  <div>
      <div class="container">
          <div class="card mb-3">
            <div class="card-header text-white bg-secondary">
                payment
            </div>
            <div class="card-body">
                <h5 class="card-title"><strong>Amount:</strong> 4$ <strong>Status:</strong> PENDING</h5>
                <p class="card-text">pucharse a steam game </p>
                <form class="form-inline" @submit.prevent="payment">
                    
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">token</label>
                        <input type="password" class="form-control" v-model="form.token" placeholder="Token">
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Confirm</button>
                </form>
            </div>
        </div>
        
        
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                token: null,
            }
        }
    },
    methods:{
        payment(){
            axios.post('http://127.0.0.1:3000/api/payment', this.form)
                .then( res => { 
                    alert(res.data.message);
                     
                    this.form.token = null;
                })
                .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>
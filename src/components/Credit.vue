<template>
  <div>
      <div class="container">
          
          <div class="card">
            <div class="card-header">
                add funds 
            </div>
            <div class="card-body">
                <form class="" @submit.prevent="credit">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="identification" class="">ID</label>
                                <input type="text" class="form-control" v-model="form.identification">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="telephone" class="">Phone</label>
                                <input type="text" class="form-control" v-model="form.telephone">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="amount" class="">Amount</label>
                                <input type="text" class="form-control" v-model="form.amount">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="description" class="">Description</label>
                                <input type="text" class="form-control" v-model="form.description">
                            </div>
                        </div>
                    </div>
                    
                    <a href="#" class="btn btn-primary">Send</a>
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
                identification: null,
                telephone: null,
                amount: null,
                description: null
            }
        }
    },
    methods:{
        credit(){
            axios.post('http://127.0.0.1:3000/api/credit', this.form)
                .then( res => { 
                    alert(res.data.message);
                     
                    this.form.identification = null;
                    this.form.telephone = null;
                    this.form.amount = null;
                    this.form.description = null;
                })
                .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>
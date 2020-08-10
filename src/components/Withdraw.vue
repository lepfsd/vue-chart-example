<template>
  <div>
      <div class="container">
          <div class="card">
            <div class="card-header">
                withdraw 
            </div>
            <div class="card-body">
                <form class="" @submit.prevent="withdraw">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="identification" class="">ID</label>
                                <input type="text" class="form-control" v-model="identification">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="telephone" class="">Phone</label>
                                <input type="text" class="form-control" v-model="telephone">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="amount" class="">Amount</label>
                                <input type="text" class="form-control" v-model="amount">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="description" class="">Description</label>
                                <input type="text" class="form-control" v-model="description">
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
            axios.post(`http://127.0.0.1:3000/api/debit`, this.form)
                .then(res => console.log(res))
                .catch(error => console.log(error.response.data))
        }
    }
}
</script>

<style>

</style>
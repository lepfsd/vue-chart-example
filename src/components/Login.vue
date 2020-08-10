<template>
    <div class="container">
        <div class="card-deck mb-4 text-center">
            <div class="card mb-3 box-shadow">
                <div class="card-header">
                <h4 class="my-0 font-weight-normal">Login</h4>
                </div>
                <div class="card-body">
                    <form class="form-horizontal" @submit.prevent="login">
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email" class="">E-Mail Address</label>
                                    <input type="email" class="form-control" v-model="form.email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="password" class="">Password</label>
                                    <input type="password" class="form-control" v-model="form.password">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pull-right">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>                        
                    
                    </form>
                </div>
          </div>
        </div>
    </div>
</template>

<script>

import User from '../Services/User';


export default {
    data() {
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    created() {
      if(this.loggedIn()){
        this.$router.push({name: 'transactions'})
      }
    },
    methods: {
        login(){
            this.login(this.form)
        }
    }
}
</script>

<style>

</style>
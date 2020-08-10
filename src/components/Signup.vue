<template>
    <div class="container">
        <div class="card-deck mb-4 text-center">
            <div class="card mb-3 box-shadow">
                <div class="card-header">
                <h4 class="my-0 font-weight-normal">Signup</h4>
                </div>
                <div class="card-body">
                    <form class="form-horizontal" @submit.prevent="signup">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name" class="">Name</label>
                                    <input type="text" class="form-control" v-model="form.name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email" class="">E-Mail Address</label>
                                    <input type="email" class="form-control" v-model="form.email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="password" class="">Password</label>
                                    <input type="password" class="form-control" v-model="form.password">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pull left">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">
                                        Signup
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
import {responseAfterLogin} from '../Services/User';
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                email: null,
                name: null,
                password: null
            }
        }
    },
    methods: {
        signup(){
            axios.post('http://127.0.0.1:3000/api/auth/signup', this.form)
                .then(res => {
                    responseAfterLogin(res)
                    this.$router.push({name: 'transactions'})
                })
                .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>
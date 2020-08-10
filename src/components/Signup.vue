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
                                    <input type="text" class="form-control" v-model="name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email" class="">E-Mail Address</label>
                                    <input type="email" class="form-control" v-model="email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="password" class="">Password</label>
                                    <input type="password" class="form-control" v-model="password">
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

export default {
    data() {
        return {
            form: {
                email: null,
                name: null,
                password: null
            }
        }
    }
}
</script>

<style>

</style>
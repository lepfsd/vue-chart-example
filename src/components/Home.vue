<template>
  <div>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Payments</h1>
        <p class="lead">Load money to the wallet, do a purchase with a confirmation code and check the balance</p>
     </div>
      <div class="container">
        
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Free</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Secured payments</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <router-link to="/signup">
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
              </router-link>  
              
            </div>
          </div>
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Web App</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Get amount balance</li>
                <li>Save money</li>
                <li>Confirm payments</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
            </div>
          </div>
          <div class="card mb-4 box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Wallet</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Make your business </li>
                <li>Easy purchases</li>
                <li>List transactions</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
            </div>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
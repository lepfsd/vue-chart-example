<template>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Wallet</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/credit">
            <a class="p-2 text-dark">Add funds</a>
        </router-link>
        <router-link to="/debit">
            <a class="p-2 text-dark">Withdraw</a>
        </router-link>
        <router-link to="/payment">
            <a class="p-2 text-dark" href="#">Confirm payment</a>
        </router-link>
        <router-link to="/transactions">
            <a class="p-2 text-dark" href="#">Transactions</a>
        </router-link>
      </nav>
      <router-link to="/login">
          <a class="btn btn-outline-primary">Login</a>
      </router-link>
      <router-link  to="/signup">
          <a class="btn btn-outline-primary">Sign up</a>
      </router-link>
      
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
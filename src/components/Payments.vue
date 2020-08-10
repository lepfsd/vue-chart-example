<template>
  <div>
      <div class="container">
          <div class="card mb-3">
            <div class="card-header text-white bg-secondary">
                payment
            </div>
            <div class="card-body">
                <h5 class="card-title"><strong>Amount:</strong> 4$ <strong>Status:</strong> PENDING</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <form class="form-inline">
                    
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">token</label>
                        <input type="password" class="form-control" v-model="token" >
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Confirm</button>
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
        }
    }
}
</script>

<style>

</style>
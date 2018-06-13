<template>
   <div>
      <h1></h1>
      <div class="counter-bar">
         <h3>{{ count }}/10</h3>
      </div>
   </div>
</template>

<script>
import { stateManager } from '../main'

export default {
   computed: {
      count () {
         return stateManager.quoteCounter
      }
   }
}
</script>

<style>

</style>

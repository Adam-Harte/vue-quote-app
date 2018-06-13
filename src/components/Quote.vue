<template>
   <!-- v-for of quote components using an array of quote objects -->
   <div class="col-xs-12 col-sm-6 col-md-4" @click="$emit('deleteQuote', id)">
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
      <slot name="content"></slot>
   </div>
</template>

<script>
export default {
   
}
</script>

<style>

</style>

<template>
   <div>
      <input type="text" v-model="title">
      <input type="text" v-model="subtitle">
      <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
      <button @click="$emit(createQuote);">Create</button>
   </div>
</template>

<script>
export default {
   props: {
      title: String,
      subtitle: String,
      content: String
   }
   
}
</script>

<style>

</style>

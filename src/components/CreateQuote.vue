<template>
   <div>
      <div class="input-group mb-3">
         <div class="input-group-prepend">
            <span class="input-group-text">Title</span>
         </div>
         <input type="text" :value="title" @input="$emit('updateTitle', $event.target.value)">
      </div>
      <div class="input-group mb-3">
         <div class="input-group-prepend">
            <span class="input-group-text">Subtitle</span>
         </div>
         <input type="text" :value="subtitle" @input="$emit('updateSubtitle', $event.target.value)">
      </div>
      <div class="input-group">
         <div class="input-group-prepend">
            <span class="input-group-text">Content</span>
         </div>
         <textarea name="" id="" cols="30" rows="10" :value="content" class="form-control" @input="$emit('updateContent', $event.target.value)"></textarea>
      </div>
      <button class="btn btn-primary" @click="$emit('createQuote');">Create</button>
   </div>
</template>

<script>
export default {
   props: {
      title: String,
      subtitle: String,
      content: String
   },
}
</script>

<style scoped>
   button {
      margin: 20px 0;
   }
</style>

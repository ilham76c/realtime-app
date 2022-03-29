<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ChatForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatForm from './components/ChatForm.vue'

export default {
  name: 'app',
  components: {
    ChatForm
  }
}
</script>

<style>

</style>

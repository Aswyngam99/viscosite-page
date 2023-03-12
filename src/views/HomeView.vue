<template>
  <div>
    <Content/>
    <Navigation/>
  </div>
</template>
<script>
import Content from '../components/Content'
import Navigation from '../components/Navigation'
  export default {
    name: 'Home',

    components: {
      Content,
      Navigation
    },
  }
</script>
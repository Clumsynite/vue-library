<template>
  <div id="shelf">
    <div id="book">
      
    </div>
  </div>
</template>

<script>
import { readFromStorage } from '../crud/read'

export default {
  name: "Shelf",
  data: function() {
    return {
      libraryArray: readFromStorage()
    };
  },
  methods: {}
};
</script>

<style scoped>
#shelf {
  margin: 20px 10px;
}
</style>

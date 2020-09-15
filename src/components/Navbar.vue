<template>
  <div id="navbar">
    <div id="title">
      {{ title }}
    </div>

    <button
      id="add-new-book"
      @mouseover="mouseOver"
      v-on:click="onClick"
      v-show="show"
    >
      {{ btnTitle }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      title: "Clumsyknight's Library",
      btnTitle: "Add New Book",
      show: true
    };
  },
  methods: {
    mouseOver: function(e) {
      e.target.classList.add("animate__animated", "animate__wobble");
      setTimeout(() => {
        e.target.classList = "animate__animated";
      }, 1000);
    },
    onClick: function(e) {
      e.target.classList.add("animate__animated", "animate__zoomOut");
      setTimeout(() => {
        e.target.classList = "animate__animated";
        this.show = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
#navbar {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  justify-content: space-between;
  padding: 5px;
}

#title {
  font-size: 20px;
}

#add-new-book {
  background-color: aliceblue;
  color: #111;
  border: 1px solid grey;
  outline: none;
}
</style>

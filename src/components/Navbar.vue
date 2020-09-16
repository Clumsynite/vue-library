<template>
  <div id="navbar">
    <div id="title">
      {{ title }}
    </div>

    <transition
      enter-active-class="animate__animated animate__lightSpeedInRight"
      leave-active-class="animate__animated animate__lightSpeedOutRight"
    >
      <div id="add-new-book" v-on:click="onClick" v-if="show">
        {{ btnTitle }}
      </div>
    </transition>
  </div>
</template>

<script>
import { serverBus } from "../main";

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
    onClick: function() {
      serverBus.$emit("adding", this.show);
      this.show = false;
    }
  },
  created() {
    serverBus.$on("added", value => {
      this.show = value;
    });
  }
};
</script>

<style scoped>
#navbar {
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid black;
  justify-content: space-between;
  padding: 5px;
}

#title {
  font-size: 20px;
  font-weight: bold;
}

#add-new-book {
  background-color: aliceblue;
  color: #111;
  border: 1px solid grey;
  outline: none;
  padding: 5px;
  
  background: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .5s ease-out;
}
#add-new-book:hover {
  background-position: left bottom;
  color: white;
  font-weight: bold;
}

</style>

<template>
  <div class="app-wrapper">
    <img alt="Vue logo" class="arbuz-img" src="./assets/logo.jpeg" />
    <watermelon-picker :watermelon-rows="watermelonRows" />
  </div>
</template>

<script>
import WatermelonPicker from './components/WatermelonPicker.vue';


export default {
  components: { WatermelonPicker },
  name: 'App',
  data() {
    return {
      watermelonRows: [
        [
          {
            id: 1,
            status: 'unripe',
            weight: 4,
          },
          {
            id: 2,
            status: 'ripe',
            weight: 8,
          },
          {
            id: 3,
            status: 'dropped',
            weight: 12,
          },
          {
            id: 4,
            status: 'dropped',
            weight: 10,
          },
          {
            id: 5,
            status: 'ripe',
            weight: 11,
          },
        ],
        [
          {
            id: 6,
            status: 'dropped',
            weight: 13,
          },
          {
            id: 7,
            status: 'unripe',
            weight: 10,
          },
          {
            id: 8,
            status: 'ripe',
            weight: 8,
          },
          {
            id: 9,
            status: 'unripe',
            weight: 19,
          },
          {
            id: 10,
            status: 'dropped',
            weight: 20,
          },
        ],
        [
          {
            id: 11,
            status: 'ripe',
            weight: 9,
          },
          {
            id: 12,
            status: 'unripe',
            weight: 3,
          },
          {
            id: 13,
            status: 'ripe',
            weight: 5,
          },
          {
            id: 14,
            status: 'dropped',
            weight: 10,
          },
          {
            id: 15,
            status: 'unripe',
            weight: 10,
          },
        ],
        [
          {
            id: 16,
            status: 'dropped',
            weight: 11,
          },
          {
            id: 17,
            status: 'ripe',
            weight: 10,
          },
          {
            id: 18,
            status: 'unripe',
            weight: 10,
          },
          {
            id: 19,
            status: 'ripe',
            weight: 14,
          },
          {
            id: 20,
            status: 'dropped',
            weight: 16,
          },
        ],
      ],
    };
  },

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media(max-width: 500px) {
    .arbuz-img {
        width: 150px;
    }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}
</style>

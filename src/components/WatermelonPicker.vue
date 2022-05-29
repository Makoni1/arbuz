<template>
  <div class="title">Online ordering watermelons from a farmer's garden.</div>
  <div class="wrapper">
    <watermelon-picker-row
      v-for="(row, idx) in watermelonRows"
      :key="idx"
      :watermelon-row="row"
      :row-number="idx"
      @pickWatermelon="addToCart"
    />
  </div>
  <basket-order></basket-order>
  <order-form></order-form>
</template>

<script>
import WatermelonPickerRow from './WatermelonPickerRow.vue';
import BasketOrder from './BasketOrder.vue'
import OrderForm from './OrderForm.vue'

export default {
  components: { WatermelonPickerRow, BasketOrder, OrderForm },
  name: 'WatermelonPicker',
  props: {
    watermelonRows: {
      type: Array,
      required: true,
    },
  },
 
  mounted() {
    console.log(this.watermelonRows);
  },
  methods: {
		addToCart(pickedWatermelon) {
			this.pickedWatermelon = pickedWatermelon;

			this.$emit("pickWatermelon", pickedWatermelon);
		},
	},
};
</script>

<style scoped>
.title {
  color: #7c795d; 
  font-family: 'Trocchi', serif; 
  font-size: 30px; 
  font-weight: normal; 
  line-height: 30px; 
  margin: 0;
}

.order-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.wrapper {
  width: 400px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

@media(max-width: 500px) {
  .wrapper {
    width: 300px;
  }
}
</style>

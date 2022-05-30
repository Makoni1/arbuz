<template>
  <div class="watermelon-row">
    <watermelon-item
     	v-for="(item, idx) in watermelonRow"
			:watermelon="item"
			:key="item.id"
			:place="idx"
			:row="rowNumber"
			@pickWatermelon="addToCart"
    />
  </div>
</template>

<script>
import WatermelonItem from './WatermelonItem.vue';

export default {
  components: { WatermelonItem },
  name: 'WatermelonPickerRow',
  props: {
    watermelonRow: {
      type: Array,
      required: true,
    },
    rowNumber: {
      type: Number,
      required: true,
    },
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
.watermelon-row {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
</style>

<template>
  <div class="watermelon" :class="classes" @click="isActive = !isActive">
    {{ watermelon.status === 'dropped' ? 'x' : '' }}
    <div class="watermelon-info"
      :class="{ 'info-active': isActive }"
      @click.stop
    >
      <p>Ряд: {{ row + 1 }}</p>
      <p>Место: {{ place + 1 }}</p>
      <p>Статус: {{ watermelonStatus }}</p>
      <p>Вес: {{ watermelon.weight }} кг</p>
      <p>Кол-во</p>

      <div class="flex">
        <div class="w-quantity">
          <button @click="minus" type="button" class="btn-success">-</button>
          <input type="number" class="quantity" min="1" max="3" v-model="size" />
          <button @click="plus" type="button" class="btn-success">+</button>
        </div>
      </div>
      <div class="slice">
        <input
          type="checkbox"
          id="slice"
          name="slice"
          @change="Checkbox"
          :class="[isSliced ? 'checked' : '']"
        />
        <label class="slice-label" for="slice">Порезать дольками</label>
      </div>
   
      <button class="add-basket"  @click="addToCart">Добавить в корзину</button>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      size: 1,
      isSliced: false,
      isActive: false,
    };
  },
  name: 'WatermelonItem',
  props: {
    watermelon: {
      type: Object,
      required: true,
    },
    place: {
      type: Number,
      required: true,
    },
    row: {
      type: Number,
      required: true,
    },
  },
  computed: {
    watermelonStatus() {
      let statusToText = {
        ripe: 'Спелый',
        unripe: 'Неспелый',
        dropped: 'Сорван',
      };

      return statusToText[this.watermelon.status];
    },
    classes() {
      return {
        'w-dropped': this.watermelon.status === 'dropped',
        'w-ripe': this.watermelon.status === 'ripe',
        'w-unripe': this.watermelon.status === 'unripe',
      };
    },
  },
  methods: {
    addToCart() {
      if (this.watermelon.status === 'dropped') {
        alert('нельзя, уже сорван');
        return;
      }

      let pickedWatermelon = {
        ...this.watermelon,
        place: this.place + 1,
        row: this.row + 1,
        size: this.size,
        isSliced: this.isSliced,
      };

      this.$emit('pickWatermelon', pickedWatermelon);
      this.isActive = false;
    },
    Checkbox() {
      this.isSliced = !this.isSliced;
    },
    plus() {
      if (this.size >= 3) {
        this.size = 3;
      } else {
        this.size += 1;
      }
    },
    minus() {
      if (this.size <= 1) {
        this.size = 1;
      } else {
        this.size -= 1;
      }
    },
  },
  
};
</script>

<style scoped>
.flex {
  display: flex;
}
.btn-success {
  background-color: rgb(88, 157, 88);
  border: none;
  border-radius: 50%;
  color: white;
  padding: 3px 8px;
  cursor: pointer;
}
.quantity{
  margin-right: 6px;
  margin-left: 6px;
}
.watermelon {
  background-color: #f8f8f8;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.w-dropped {
  background-color: red;
  color: red;
}

.w-ripe {
  background-color: green;
}

.w-unripe {
  background-color: yellow;
}

.watermelon-info {
  display: none;
  position: absolute;
  top: 110%;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  border-radius: 5px;
  min-width: 180px;
  padding: 10px 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.watermelon:hover .watermelon-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  border-radius: 15px;
  background-color: #50c878;
}

.watermelon-info p {
  font-size: 14px;
  line-height: 16px;
}
.add-basket {
  margin-top: 20px;
  border-radius: 8px;
  background: #01796f;
  box-shadow: 0 2px 4px rgba(28, 24, 25, 0.1);
  font-style: normal;
  font-weight: normal;
  width: 100%;
  height: 30px;
  border: 0;
  color: #fff;
}
.quantity-input{
  width: 50px;
  height: 50px;
}
.slice-label {
  margin-left: 4px;
  font-size: 14px;
}
@media(max-width: 500px) {
    .quantity-input{
    width: 30px;
    height: 30px;
    }
    .watermelon {
      width: 36px;
      height: 36px;
    }
}
</style>

<template>
    <div class="basket-order">
        <div class="">
                <!-- <strong>{{product_data.row}}</strong> -->
                <!-- <strong>{{product_data.place}}</strong>
                <strong>{{product_data.watermelonStatus }}</strong> -->
        </div>
        <div class="">
             Корзина пуста
        </div>
    </div>
</template>

<script>

export default {
    name: 'BasketOrder',
    computed: {
   
    },  
}
</script>


<style scoped>
.basket-order{
    width: 400px;
    height: 200px;
    background-color: #50c878;
    border-radius: 15px;
}

@media(max-width: 500px) {
  .basket-order {
    width: 300px;
  }
}
</style>
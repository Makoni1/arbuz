<template>
    <div class="row justify-content-lg-between flex-column align-items-center">
        <div class="mb-3">
            <input class="input__form"
            id="input-phone"
            type="tel"
            required
            placeholder="Введите телефон"
            >
        </div>
        <div class="mb-3">
            <input class="input__form"
            id="input-city"
            type="text"
            required
            placeholder="Введите город"
            >
        </div>
        <div class="mb-3">
            <input class="input__form"
            id="input-address"
            type="text"
            required
            placeholder="Введите адрес"
            >
        </div>

        <div class="mb-3">Выбрать дату и время доставки
            <Datepicker input-class="input__form" v-model="date"></Datepicker>
        </div>

        <div class="mb-3">
            <button type="button" class="btn">
                Оформить заказ
            </button>
        </div>
    </div>
</template>

<script>

 import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
    name: 'OrderForm', 
     components: { Datepicker },
     data() {
        return {
            date: null,
        };
    }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.flex-column {
  flex-direction: column;
}
.align-items-center {
  align-items: center;
}
.justify-content-lg-between {
    justify-content: space-between;
}
.input__form{
  display: block;
  width: 400px;
  height: 48px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.mb-3 {
    margin-bottom: 30px;
}
.btn {
    border-radius: 8px;
    background: #50c878;
    box-shadow: 0 2px 4px rgba(28, 24, 25, 0.1);
    font-style: normal;
    font-weight: normal;
    width: 400px;
    height: 48px;
    border: 0;
    color: #fff;
    font-size: 26px;
}
@media(max-width: 500px) {
    .input__form {
        width: 300px;
    }
    .mb-3 {
        margin-bottom: 20px;
    }
    .btn {
        width: 300px; 
        font-size: 20px;
    }
}
</style>
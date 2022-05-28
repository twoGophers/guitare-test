<template>
  <div class="catalog-item">
      <div class="catalog-item_img">
          <nuxt-link :to="`/products/${product_data.id}`">
            <img 
            :src="require('../../assets/images/' + product_data.images)"  
            :alt="product_data.name" srcset=""
            @click="addToCartSmall(product_data)">
          </nuxt-link>
      </div>
      <div class="catalog-item_name">
          <h3>{{product_data.name}}</h3>
      </div>
      <div class="catalog-item_haracteristic">
          <div class="catalog-item_haracteristic-left">
              <p>Производитель</p>
              <p>Количество струн</p>
              <p>Поверхность</p>
              <p>Цвет</p>
          </div>
          <div class="catalog-item_haracteristic-ringht">
              <p>{{product_data.manufactuter}}</p>
              <p>{{product_data.strings}}</p>
              <p>{{product_data.material}}</p>
              <p>{{product_data.color}}</p>
          </div>
      </div>
      <div class="catalog-item_haracteristic-modal"></div>
      <div class="catalog-item_price">
          <h3>{{product_data.price}} </h3>
      </div>
      <div class="catalog-item_basket" @click="addToCart()">
          <img src="../../assets/images/3081822.png" alt="">
          <button >В корзину</button>
      </div>

  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    props : {
        product_data : Object,
        default () {
            return {}
        }
    },
    methods: {
        addToCart() {
            this.$emit("addToCart", this.product_data);
            console.log(this.product_data)
        },
        addToCartSmall() {
           this.$emit("addToCartSmall", this.product_data);
        },
    },
}
</script>

<style lang="scss" scoped>
.catalog-item{
    background-color: rgb(255, 255, 255);
    width: 250px;
    border: 1px solid rgb(209, 209, 209);
    border-radius: 10px;
    padding: 1%;
    margin : 4% 0.5% 3% 0.5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px 5px rgba(9, 13, 1, 0.2);
        transition: 0.3s;
    }
    .catalog-item_img{
        height: 50%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .catalog-item_name{
        margin-bottom: 5%;
        padding: 5%;
        h3 {
            color: rgb(66, 66, 66);
            font-family: 'Open Sans',sans-serif;
            font-size: 1em;
        }
    }
    .catalog-item_haracteristic{
        width: 100%;
        display: flex;
        flex-direction: row;
        .catalog-item_haracteristic-left{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .catalog-item_haracteristic-ringht{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-end; 
        }
    }
    .catalog-item_price{
        margin-top: 5%;
        display: flex;
        justify-content: center;
        h3 {
            &::after {
                content:"\20BD";
            }
        }
    }
    .catalog-item_basket{
        display: flex;
        flex-direction: row;
        width: 100%;
        background: linear-gradient(90deg, #f17f1b 0%, #f2b61b 100%);
        box-shadow: 0px 5px 5px rgb(241 127 27 / 15%);
        padding: 3%;
        border-radius: 5px;
        margin-top: 10%;
        margin-bottom: 3%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:active {
            box-shadow: 0px 0px 19px 8px rgba(251, 223, 9, 0.54);
            transition: 0.2s;
        }
        img {
            width: 22px;
            margin: 3%;
        }
        button{
            color: azure;
        }
    }

}
</style>
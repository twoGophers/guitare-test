<template>
  <div class="vCart">
    <div class="vCartMain small-item">
      <div class="small-item__images">
        <img class="small-item__images-item" :src="require('@/assets/images/'+ item_cart_small.images)" alt="guitare">
      </div>

      <div class="small-item__haracteristic">
        <div class="small-item__name catalog-item_name">
          <h3> {{item_cart_small.name}}</h3>
        </div>
        <div class="small-item__haracter-general catalog-item_haracteristic">
            <div class="small-item__haracter-left catalog-item_haracteristic-left">
                <p>Производитель</p>
                <p>Количество струн</p>
                <p>Поверхность</p>
                <p>Цвет</p>
            </div>
            <div class="small-item__haracter-ringth catalog-item_haracteristic-ringht">
                <p>{{item_cart_small.manufactuter}}</p>
                <p>{{item_cart_small.strings}}</p>
                <p>{{item_cart_small.material}}</p>
                <p>{{item_cart_small.color}}</p>
            </div>
        </div>
        <div class="small-item__price catalog-item_price">
            <h3>{{item_cart_small.price}}</h3>
        </div>
        <div class="small-item_basket" @click="addToCartSmall()">
          <img src="../../assets/images/3081822.png" alt="">
          <button >В корзину</button>
        </div>
      </div>

      <div class="small-item__information">
        <p>{{item_cart_small.description}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    props : {
      item_cart_small : Object,
      default () {
          return {}
      }
  },
  methods: {
    addToCartSmall() {
            this.$emit("addToCartSmall", this.item_cart_small);
        },
  },
}
</script>

<style lang="scss">
.small-item{
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
  margin-top: 2%;
  background: white;
  &__images{
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
      margin: 2%;
    }
  }
  &__haracteristic {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    align-items: center;
      .small-item__name{
        margin: 2%;
      }
      .small-item__haracter-general{
        display: flex;
        flex-direction: row;
        width: 60%;
        margin-top: 5%;
        .small-item__haracter-left {
          width: 50%;
        }
        .small-item__haracter-ringth {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;

        }
      }
      .small-item_basket{
        display: flex;
        flex-direction: row;
        width: 30%;
        background: linear-gradient(90deg, #f17f1b 0%, #f2b61b 100%);
        box-shadow: 0px 5px 5px rgb(241 127 27 / 15%);
        padding: 1%;
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
      .small-item__price{
          margin-top: 5%;
          h3 {
            &::after {
                content:" \20BD";
            }
          }
        }
  }
  &__information{
    width: 100%;
    margin-top: 3%;
    margin: 2%;
  }

}

@media screen and (max-width : 1160px) {
  .small-item {
    width: 90%;
  }
}
@media screen and (max-width : 850px) {
  .small-item {
    width: 100%;
    &__images {
      img {
        width: 100%;
      }
    }
    &__haracteristic {
      .small-item_basket {
        width: 50%;
      }
      .small-item__haracter-general{
        width: 90%;
      }
    }
  }
}

@media screen and (max-width : 500px) {
  .small-item {
    &__images {
      width: 35%;
      img {
        height: 70%;
      }
    }
    &__haracteristic {
      width: 65%;
    }
  }
}

@media screen and (max-width : 375px) {
    .small-item {
      &__images {
        width: 30%;
        img {
          height: 50%;
        }
      }
      &__haracteristic {
        width: 70%;
      }
    }
}
</style>
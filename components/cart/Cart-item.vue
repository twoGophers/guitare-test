<template>
  <div class="vCart-item">
      <div class="vCart-item_img">
          <img :src="require('../../assets/images/' + cart_item_data.images)">
      </div>
      <div class="vCart-item_name">
          {{cart_item_data.name}}
      </div>
      <div class="vCart-item_price">
            <h3 class="cool">{{cart_item_data.quantity}}</h3>
            <h3 class="cool2"> {{cart_item_data.price * cart_item_data.quantity}}</h3>
      </div>
      <div class="vCart-item_calc">
          <button @click="decrement">-</button>
          <p>{{cart_item_data.quantity}}</p>
          <button @click="increment">+</button>
      </div>
      <div class="vCart-item_delete">
          <div class="testHover" @click="deleteFromCart">
              <span class="close"></span>
          </div>
      </div>
  </div>
</template>

<script>


export default {
    props : {
        cart_item_data : {
            type : Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit("deleteFromCart");
        },

        increment() {
            this.$emit('increment');
        },

        decrement() {
            this.$emit('decrement');
        }
    },
}
</script>

<style lang="scss" scoped>
.vCart-item{
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 7px 20px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    border-radius: 5px;
    margin: 2% 0.2%;
    justify-content: space-between;
    .vCart-item_img {
        width: 20%;
        img {
            width: 100%;
        }
    }
    .vCart-item_name{
        display: flex;
        flex-wrap: wrap;
        width: 35%;
    }
    .vCart-item_calc{
        display: flex;
        flex-direction: row;
        button, p {
            width: 30px;
            height: 30px;
            background: rgb(216, 216, 216);
            margin: 1%;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        p {
            background: rgb(255, 255, 255);
            border: 1px solid rgb(221, 218, 218);
        }
    }
    .vCart-item_price {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        .cool {
            color: rgb(100, 100, 100);
            &::after {
                content: " : ";
                margin-bottom: 21px;
            }
        }
        .cool2{
            color: rgb(100, 100, 100);
            margin-left: 1%;
        }
    }
    .vCart-item_delete{
        width: 2%;
        height: 180px;
        .testHover{
            border-radius: 50%;
            position: relative;
            border: 1px solid rgb(139, 138, 138);
            right: 20px;
            height: 28px;
            width: 28px;
            display: flex;
            justify-content: center;
            text-align: center;
            padding-right: 2px;
            padding-top: 2px;
            cursor: pointer;
            &:hover {
                background: rgb(223, 223, 223);
            }
            .close {
            width: 28px;
            height: 28px;
            opacity: 0.4;
            margin-bottom: 10px;

            }
            .close:hover {
            opacity: 1;
            }
            .close:hover::before {
                transition: 0.5s;
                transform: rotate(22deg);
            }
            .close:hover::after {
                transition: 0.5s;
                transform: rotate(-67deg);
            }
            .close:before, .close:after {
            position: absolute;
            content: ' ';
            height: 23px;
            width: 2.5px;
            background-color: rgb(112, 112, 112);
            }
            .close:before {
            transform: rotate(45deg);
            }
            .close:after {
            transform: rotate(-45deg);
            }
        }

    }
}

@media screen and (max-width : 620px) {
    .vCart-item{
        flex-wrap: wrap;
        position: relative;
        .vCart-item_img,
        .vCart-item_price,
        .vCart-item_name,
        .vCart-item_calc{
            width: 50%;
            margin-top: 5%;
            margin-bottom: 5%;
        }
        .vCart-item_delete {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
}
</style>
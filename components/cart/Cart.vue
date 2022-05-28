<template>
    <div class="vCart">
        
        <div class="vCartMain">
            <h2 v-if="CART.length">Ваши товары...</h2>
            <h2 v-else>Вы не добавили товар...</h2>

            <div class="vCartMain_main">
                <CartItem 
                    v-for="(item, index) in CART"
                    :key="item.id"
                    :cart_item_data="item"
                    @deleteFromCart="deleteFromCart(index)"
                    @increment="increment(index)"
                    @decrement="decrement(index)"
                />
            </div>

            <div class="v-cart__total" v-if="CART.length">
                <p class="v-cart__total__name">Всего : {{cartTotalCost}}</p>
            </div>
            
        </div>

    </div>

</template>

<script>
import {mapGetters, mapActions} from "vuex";
import CartItem from "./Cart-item.vue";

export default {
    components : {
        CartItem
    },
    methods: {
        ...mapActions([
            "DELETE_FROM_CART",
            "INCREMENT_FOR_CART",
            "DECRIMENT_FOR_CART"
        ]),
        
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        },

        increment(index) {
            this.INCREMENT_FOR_CART(index);
        },
        decrement(index) {
            this.DECRIMENT_FOR_CART(index);
        }
     },
    computed : {
        ...mapGetters(['CART']),

        cartTotalCost() {
            let result = [];

            if (this.CART.length) {
            for( let item of this.CART) {
                result.push(item.price * item.quantity)
            }
            result = result.reduce(function(sum, el) {
                return sum + el;
            })
            return result;
            } else {
                return 0;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.vCart{
    display: flex;
    justify-content: center;
    margin-top: 3%;
    .vCartMain{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        min-height: 100%;
        background: white;
        border-radius: 10px;
        h2 {
            margin: 4% 0% 5% 0%;
            text-align: center;
            color: #575757;
        }
        .vCartMain_main{
            width: 80%;
            display: flex;
            flex-wrap: wrap;
            flex: 1 1 auto;
        }
        .v-cart__total {
            margin-top: 4%;
            width: 100%;
            height: 10vh;
            background: rgb(179, 253, 179);
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1 0 auto;
            .v-cart__total__name {
                font-size: 1rem;
                font-weight: 600;
                    &::after {
                    content:" \20BD";
                }
            }
        }

    }
}

@media screen and (max-width : 771px) {
    .vCart {
        .vCartMain {
            width: 95%;
        }
    }
}

@media screen and (max-width : 620px) {
    .vCart {
        .vCartMain {
            width: 100%;
            .vCartMain_main{
                width: 95%;
            }
        }

    }
}
</style>
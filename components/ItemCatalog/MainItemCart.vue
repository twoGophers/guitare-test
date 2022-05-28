<template>
    <div>
        <ItemCart 
        v-for="item in CARTSM"
        :key="item.id"
        :item_cart_small="item"
        @addToCartSmall="addToCartSmall"
        />
    </div>    
</template>

<script>
import ItemCart from "./ItemCart";
import {mapGetters, mapActions } from "vuex";

export default {
    components : {
        ItemCart
    },
    computed : {
        ...mapGetters([
            "CARTSM"
        ])
    },
    methods: {
        ...mapActions ([
            'ADD_TO_CART'
        ]),
        addToCartSmall(data) {
            this.ADD_TO_CART(data);
        }
    },
}
</script>

<style>

</style>
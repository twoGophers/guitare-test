<template>
  <header>
    <div class="vHeader">
      <div class="vHeader_block vheader-logo">
        <img :src="require('@/assets/images/logo.png')" alt srcset />
      </div>

      <div class="vHeader_block vHeader-info">
        <p>Интернет-магазин</p>
        <p>музыкальных</p>
        <p>инструментов</p>
      </div>
      <div class="vHeader-search">
        <form @submit.prevent>
          <input
            v-model="searchValue"
            type="search"
            placeholder="Искать здесь..."
            @keyup.enter="seachString(searchValue)"
          />
          <button @click="seachString(searchValue)">Поиск</button>
        </form>
      </div>
      <div class="vHeader_block vHeader-phone">
        <a href="tel:8(901)-123-45-67">8(901)-123-45-67</a>
        <a href="tel:8(901)-123-45-67">8(901)-123-45-67</a>
      </div>

      <div class="vHeader_block vHeader-cart-price">
        <nuxt-link to="/cart" class="vHeader-cart-price">
          <img :src="require('@/assets/images/basket.png')" alt srcset />
          <h2>{{CART.length}}</h2>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      searchValue: "",
      basketNumber: 0
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE", "CART"])
  },

  methods: {
    seachString(value) {
      this.GET_SEARCH_VALUE(value);
      this.searchValue = "";
    },

    ...mapActions(["GET_SEARCH_VALUE"])
  }
};
</script>

<style lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: center;
  .vHeader {
    width: 80%;
    display: flex;
    flex-direction: row;
    height: 90px;
    .vHeader_block {
      width: 15%;
    }
    .vHeader-search {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      form {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 40%;
        input {
          width: 60%;
          border-radius: 5px 0px 0px 5px;
          background: white;
          padding-left: 20px;
          border: 1px solid rgb(180, 180, 180);
          border-right: none;
        }
        button {
          min-width: 50px;
          border-radius: 0px 5px 5px 0px;
          background-color: rgb(37, 199, 240);
          border: 1px solid rgb(180, 180, 180);
          border-left: none;
          transition: 0.3s;
          color: white;
          &:hover {
            background: rgb(196, 227, 248);
            color: rgb(104, 102, 102);
          }
          &:active {
            font-size: 0.95em;
          }
        }
      }
    }
    .vheader-logo {
      display: flex;
      justify-content: center;
      img {
        height: 100%;
        width: 6rem;
      }
    }
    .vHeader-info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-weight: 600;
        font-size: 95%;
        background-color: #2AA5A0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(90deg, #f17f1b 0%, #f2b61b 100%);
      }
    }
    .vHeader-phone {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      a {
        margin: 1%;
        font-size: 1em;
        color: rgb(95, 94, 94);
      }
    }
    .vHeader-cart-price {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      img {
        width: 17%;
      }
      h2 {
        margin-left: 10px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(90deg, #f17f1b 0%, #f2b61b 100%);
      }
    }
  }
}

@media screen and (max-width: 1040px) {
  header {
    .vHeader {
      width: 100%;
    }
  }
}

@media screen and (max-width: 850px) {
  header {
    .vHeader {
      width: 90%;
      height: auto;
      flex-wrap: wrap;
      .vHeader_block {
        width: 50%;
      }
      .vHeader-info {
        width: 50%;
      }
      .vHeader-search {
        height: 50%;
        width: 50%;
      }
      .vHeader-phone {
        width: 20%;
      }
      .vHeader-cart-price {
        width: 30%;
        img {
          width: 40%;
        }
      }
    }
  }
}

@media screen and (max-width: 670px) {
  header {
    .vHeader {
      .vHeader-search {
        width: 70%;
      }
      .vHeader-phone {
        display: none;
      }
      .vHeader-cart-price {
        img {
          width: 30px;
        }
      }
    }
  }
}

@media screen and (max-width: 375px) {
  header {
    .vHeader {
      .vHeader-search {
        width: 70%;
        height: 55%;
        form {
          input {
            border-radius: 0px;
          }
        }
      }
      .vHeader-phone {
        display: none;
      }
      .vHeader-cart-price {
        img {
          width: 30px;
        }
      }
    }
  }
}
</style>
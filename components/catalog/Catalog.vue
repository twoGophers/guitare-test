<template>
<div class="vCatalog">

  <div class="vCatalog-main">
    <CatalogItem 
    v-for="prod in pagenatedProducts"
    :key="prod.id"
    :product_data="prod"
    @addToCart="addToCart"
    @addToCartSmall="addToCartSmall"
    />
  </div>

  <div class="vPagination">
      <div class="page"
        v-for="page in pages"
        :key="page"
        :class="{'page__activ' : page === pageNumder}"
        @click="pageClick(page)"
      >{{page}}</div>
    </div>

</div>
</template>

<script>

import axios from 'axios';
import {mapGetters, mapActions} from "vuex";


export default {
  data() {
    return {
      sortUserOfUSER : [],
      sumPages : 9,
      pageNumder : 1
    }
  },
  components : {},

  computed: {
    ...mapGetters([
      'USER',
      'SEARCH_VALUE',
      'GUITARE_ALL',
      'SORT_GUITARE'
      ]),
    
    pages() {
      return Math.ceil(this.sortUserOfUSER.length / this.sumPages);
    },

    pagenatedProducts() {
      //this.sortUserOfUSER = [...this.USER];
      let from = (this.pageNumder - 1) * this.sumPages;
      let to = from + this.sumPages;
      return this.sortUserOfUSER.slice(from, to);
    },

    filteredProducts() {
      if (this.sortUserOfUSER.length) {
        return this.sortUserOfUSER;
      } else if(this.sortGuitare.length) {
        return this.sortUserOfUSER;
      } else {
        return USER;
      }
    }
  },

  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    addToCartSmall(data) {
      this.ADD_TO_CART_SMALL(data)
    },
    pageClick(page) {
      this.pageNumder = page;
    },

    ...mapActions([
      'GET_USER_FROM_API',
      'GET_SEARCH_VALUE',
      'GET_GUITARE_ALL',
      'GET_SORT_GUITARE',
      'ADD_TO_CART',
      'ADD_TO_CART_SMALL'
      ]),
    
    sortProductsBySearchValue(value) {
        this.sortUserOfUSER = [...this.USER];
        if (value) {
          this.sortUserOfUSER = this.sortUserOfUSER.filter(function (item) {
              return  item.manufactuter.toLowerCase().includes(value.toLowerCase()) ||
                      item.name.toLowerCase().includes(value.toLowerCase())
          })
        }  else {
          this.sortUserOfUSER = this.USER;
        }
      },

      sortGuitareAll(value) {
        this.sortUserOfUSER = [...this.USER];
        if(value) {
          this.sortUserOfUSER = this.sortUserOfUSER.filter((item) => {
            if(item.article === value) {
              return item.article;
            } else if(value == 'all') {
              return this.sortUserOfUSER = this.USER;
            }
          })
        } else {
          this.sortUserOfUSER = this.USER;
        }
      },

      sortGuitareAlfavit(value) {
        this.sortUserOfUSER = [...this.USER];
          if(value === "a") {
             this.sortUserOfUSER.sort((a, b) => a.name.localeCompare(b.name));
          } else {
             this.sortUserOfUSER.sort((a, b) => b.name.localeCompare(a.name));
          } 
      }

  },

  mounted() {
      this.GET_USER_FROM_API()
      .then((response) => {
        if (response.data) {
          this.sortProductsBySearchValue(this.SEARCH_VALUE);
          this.sortGuitareAll(this.GUITARE_ALL);
          this.sortGuitareAlfavit(this.sortGuitareAlfavit)
        }
      })
  },
  
  watch : {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      },
      GUITARE_ALL () {
        this.sortGuitareAll(this.GUITARE_ALL);
      },
      SORT_GUITARE() {
        this.sortGuitareAlfavit(this.SORT_GUITARE);
      }
  }
  
}
</script>

<style lang="scss" scoped>
.vCatalog{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .vCatalog-main{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .vPagination{
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .page {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      flex-direction: row;
      border: 1px solid rgb(214, 211, 211);
      margin: 5px;
      padding: 5px;
      width: 30px;
      cursor: pointer;
      color: #525151;
      &:hover {
        background: rgb(212, 211, 211);
        transition: 0.5s;
      }
    }
    .page__activ {
      background: linear-gradient(90deg, #f17f1b 0%, #f2b61b 100%);
      transition: 0.5s;
    }
  }

}

@media screen and (max-width : 1034px) {
  .vCatalog {
    .vCatalog-main {
      width: 98%;
    }
  }
}

@media screen and (max-width : 850px) {
  .vCatalog {
    .vCatalog-main {
      justify-content: space-around;
    }
  }
}
</style>
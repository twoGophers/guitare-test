import axios from 'axios'

const state = () => ({
  users : [],
  search_value : '',
  guitageAll : '',
  sortGuitare : '',
  sort : [],
  cart : [],
  cart_small :[]
})

const mutations = {
  SET_CONTENT: (state, users) => {
       return state.users = users;
    },
  
  SET_SEARCH_VALUE: (state, value) => {
     state.search_value = value;
  },

  SET_GUITARE_ALL :(state, value) => {
    state.guitageAll = value;
  },

  SET_SORT_GUITARE : (state, value) => {
    state.sortGuitare = value;
  },

  SET_TO_CART : (state, value) => {
    if(state.cart.length) {
      let isProductEx = false;
      state.cart.map(function (item) {
        if(item.id === value.id) {
          isProductEx = true;
          item.quantity++;
        }
      })
      if(!isProductEx) {
        state.cart.push(value);
      }
    } else {
        state.cart.push(value);
    }
  },

  SET_REMOVE_FROM_CART : (state, index) => {
    state.cart.splice(index, 1);
  },

  INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  SET_ADD_TO_CART_SMALL: (state, item) => {
    state.cart_small.push(item);
    if (state.cart_small.length > 1) {
      return state.cart_small.splice(0, 1)
    } else {
      return state.cart_small
    }
  }

}

const actions = {
    GET_USER_FROM_API({commit}) {
        return axios('https://guitare-514b0-default-rtdb.europe-west1.firebasedatabase.app/guitare/.json', {
          method: "GET"
        })
          .then((users) => {
            commit('SET_CONTENT', users.data);
            return users;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
    },

    GET_SEARCH_VALUE({commit}, value) {
      commit("SET_SEARCH_VALUE", value)
    },

    GET_GUITARE_ALL({commit}, value) {
      commit("SET_GUITARE_ALL", value)
    },

    GET_SORT_GUITARE({commit}, value) {
      commit("SET_SORT_GUITARE", value)
    },

    ADD_TO_CART({commit}, value) {
      commit("SET_TO_CART", value)
    },

    DELETE_FROM_CART({commit}, index) {
      commit("SET_REMOVE_FROM_CART", index)
    },

    INCREMENT_FOR_CART({commit}, index) {
      commit("INCREMENT", index)
    },

    DECRIMENT_FOR_CART({commit}, index) {
      commit("DECREMENT", index)
    },

    ADD_TO_CART_SMALL({ commit }, item) {
      commit("SET_ADD_TO_CART_SMALL", item)
    }

}

const getters = {
    USER: (state) => {
        return state.users;
    },

    SEARCH_VALUE: (state) => {
      return state.search_value;
    },

    GUITARE_ALL: (state) => {
      return state.guitageAll;
    },

    SORT_GUITARE : (state) => {
      return state.sortGuitare;
    },

    CART : (state) => {
      return state.cart;
    },
    CARTSM : (state) => {
      return state.cart_small;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
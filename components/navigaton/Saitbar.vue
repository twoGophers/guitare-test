<template>
  <nav>
        <div class="navbar">
            <nuxt-link to="/"><button>Главная</button></nuxt-link>
            <nuxt-link to="/contact"><button>Контакты</button></nuxt-link>
            <div class="dropdown">
                    <div class="list-img">
                        <button 
                        class="dropbtn"
                        @mouseover="mouseover"
                        @mouseleave="mouseLeave"
                        @click="showItemListHeader"
                        > Все гитары
                        </button>
                        <div 
                        :style="styleArrow"
                        class="img_list"
                        ></div>
                    </div>
                <ul 
                class="dropdown-content"
                v-show="showListItem"
                >
                    <li 
                    @click="listsearch(list.article, $event)"
                    v-for="list in navigation"
                    :key="list.id"
                    >
                    {{list.name}}
                    </li>
                    
                </ul>
            </div>
            <div class="dropdown">
                <div class="list-img">
                    <button 
                        class="dropbtn"
                        @mouseover="mouseover2"
                        @mouseleave="mouseLeave2"
                        @click="showItemListHeader"
                        > Сортировка по алфавиту
                    </button>
                        <div 
                        :style="styleArrow2"
                        class="img_list"
                        ></div>
                    </div>
                    <ul 
                        class="dropdown-content"
                        v-show="showListItem"
                    >
                        <li 
                        @click="listsearch2(sotrAlf.sortId)"
                        v-for="sotrAlf in sort"
                        :key="sotrAlf.id"
                        >{{sotrAlf.name}}</li>
                    </ul>
            </div> 
        </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    data() {
        return {
            navigation : [
                {id : 1, name : "Все гитары", article : "all",},
                {id : 2, name : "Акустичесике гитары", article : "acoustic",},
                {id : 3, name : "Электрогитары", article : "electroguitar",},
                {id : 4, name : "Бас-гитары", article : "bassguitar",},
            ],
            sort : [
                {id : 1, name : "A-Я", sortId : "a"},
                {id : 2, name : "Я-А", sortId : "z"},
            ],

            styleArrow : '',
            styleArrow2 : '',
            listSort : '',
            showitem : [],
            showListItem : false,
        }
    },
    methods: {
        mouseLeave () {
            this.styleArrow = `
                        border-bottom: 2px solid rgb(253, 253, 253);
                        border-right: 2px solid rgb(253, 253, 253);
                        `
        },
        mouseover() {
            this.styleArrow = `
                        border-bottom: 2px solid rgb(71, 71, 71);
                        border-right: 2px solid rgb(71, 71, 71);
                        `
        },
        mouseLeave2 () {
            this.styleArrow2 = `
                    border-bottom: 2px solid rgb(253, 253, 253);
                    border-right: 2px solid rgb(253, 253, 253);
                    `
        },
        mouseover2() {
            this.styleArrow2 = `
                    border-bottom: 2px solid rgb(71, 71, 71);
                    border-right: 2px solid rgb(71, 71, 71);
                    `
        },

        listsearch(value, e) {
            this.GET_GUITARE_ALL(value);
            if(this.showListItem == true && value) {
                this.showListItem = false;
            } else {
                this.showListItem == true;
            }
            
            let test = document.querySelector('.dropdown-content')
            test.addEventListener("click", () => {
                if(e.target.className != 'dropdown-conten') {
                    this.showListItem = false;
                }
            })
        },
        ...mapActions([
            'GET_GUITARE_ALL',
            'GET_SORT_GUITARE'
        ]),

        listsearch2(value) {
            this.GET_SORT_GUITARE(value);
            if(this.showListItem == true && value) {
                this.showListItem = false;
            } else {
                this.showListItem == true;
            }
        },
        showItemListHeader () {
            this.showListItem = true;
        }

    },
    computed : {
        ...mapGetters ([
            'GUITARE_ALL',
            'SORT_GUITARE'
        ])
    },
}
</script>

<style lang="scss">
nav {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(97, 97, 97);
    .navbar {
        width: 80%;
        overflow: hidden;

        button {
        float: left;
        font-size: 1em;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            background-color: rgb(156, 156, 156);
            }
        }

        .dropdown {
            float: left;
            overflow: hidden;
            &:hover {
                background-color: rgb(148, 148, 148);
                cursor: pointer;
            }
            .dropbtn {
                font-size: 1em;  
                border: none;
                outline: none;
                color: white;
                padding: 14px 6px 14px 16px;
                background-color: inherit;
                font-family: inherit;
                margin: 0;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                &:hover {
                    background-color: rgb(148, 148, 148);
                }
                
            }
            .dropdown-content {
                display: none;
                position: absolute;
                background-color: #f9f9f9;
                min-width: 15%;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                z-index: 1;
                li {
                    float: none;
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                    text-align: left;
                    font-size: 0.9em;
                    &:hover {
                        background-color: #ddd;
                    }
                }
            }
            .list-img{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .img_list{
                        padding: 1%;
                        margin-right: 15px;
                        display: block;
                        position: relative;
                        width: 8px;
                        height: 8px;
                        transition: 0.5s;
                        border-bottom: 2px solid rgb(253, 253, 253);
                        border-right: 2px solid rgb(253, 253, 253);
                        transform: rotate(45deg);
                }
            }

        }
        .dropdown:hover .dropdown-content,
        .dropdown:active .dropdown-content{
            display: block;
        }
    }
}
</style>
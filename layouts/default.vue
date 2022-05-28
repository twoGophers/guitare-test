<template>
  <main class="main">
      <div class="main__header">

          <v-parallax
            :style="parallax"
            :src="require('@/assets/images/1616431995_36-p-gitara-fon-40.jpg')">
            <Header />
          </v-parallax>

          <Saitbar />

      </div> 

      <div class="main__container">
          <Nuxt />     
      </div> 


      <div class="main__footer">
        <v-parallax
          style="height:120px"
          :src="require('@/assets/images/1616431995_36-p-gitara-fon-40.jpg')"
          >
          <Footer />
        </v-parallax>
      </div>

  </main>
</template>

<script>
import Saitbar from "../components/navigaton/Saitbar";
export default {
  name : "app",
  data() {
    return {
      parallax : {
        height : ''
      },
      windowWidth: 0 
    }
  },
  components : {
    Saitbar
  },
  //Ширина окна
    methods: {
      onScroll(event) {
        this.windowWidth = document.documentElement.clientWidth;
        if(this.windowWidth < 840) {
          this.parallax.height = `240px`;
        } else {
          this.parallax.height = `120px`;
        }
      }
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    mounted() {
    window.addEventListener("scroll", this.onScroll);
    //console.log(this.test2)

    //определение ширины и высоты окна
    this.$nextTick(function() {
      window.addEventListener("resize", this.onScroll);
      // window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.onScroll();
      // this.getWindowHeight()
    });
  },
  
}

</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
input {
  border: none;
  outline: none;
}
a {
  text-decoration: none;
  color: white;
}
li {
  list-style: none;
}
p {
    line-height: 20px;
    font-family: 'Open Sans',sans-serif;
    font-size: 0.8em;
    color: rgb(90, 90, 90);
}

h3{
    color: rgb(41, 40, 40);
    font-family: 'Open Sans',sans-serif;
    font-size: 1em;
}

html, body { 
  background: rgb(247, 254, 255);
  height: 100%;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main__header{
  flex: 1 0 auto;
}

.main__container{
  margin: 0 auto;
  width: 80%;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  flex: 1 0 auto;
  min-height: 70vh;
}


.main__footer{
  flex: 0 0 auto;
  .v-parallax {
    .v-parallax__content{
      padding: 0px;
    }
  }
}


@media screen and (max-width : 1230px) {
  .main__container {
    width: 95%;
  }
}
</style>
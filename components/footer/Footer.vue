<template>
  <footer class="footer-main">
      <p class="footer__number-phone">
          +8(123)-456-78-98
      </p>
      <div class="footer-main__company">
         <p>zamuhrishka</p> 
      </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      show_form_footer : false,
      input_one : "",
      input_two : ""
    }
  },
  methods: {
    click_form() {
      this.show_form_footer = true;
    },
    input_form() {
      console.log(this.input_one)
    }
  },
}
</script>

<style lang="scss" >
footer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    p {
        color: white;
    }

    
}
</style>
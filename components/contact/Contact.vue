<template>
  <div class="contact">
      <div class="contact__block">
          <div class="contact__images">
              <img src="../../assets/images/2-1.jpg" alt="">
          </div>
          <div class="contact__info-maps">
              <div class="contact__info info">
                  <p class="info__city">Павловский посад</p>
                  <p class="info__adress">ул. Вокзальная</p>
                  <p class="info__work-time">с 09:00 до 21:00</p>
              </div>
              <div class="contact__maps maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17952.79767634731!2d38.67312704619079!3d55.77414008678815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ae05f6df2fd65%3A0xeb281069037af058!2z0J_QsNCy0LvQvtCy0YHQutC40Lkg0J_QvtGB0LDQtA!5e0!3m2!1sru!2sru!4v1632417283735!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact{
    width: 100%;
    &__block {
        display: flex;
        flex-direction: row;
        .contact__images{
            width: 50%;
            display: flex;
            justify-content: center;
            align-content: center;
            img {
              width: 50%;
              margin: 5%;
            }
        }
        .contact__info-maps{
          display: flex;
          flex-direction: column;
          width: 50%;
            .info{
              display: flex;
              flex-direction: row;
              width: 100%;
              justify-content: center;
              p {
                margin: 4%;
                color: rgb(99, 97, 97);
              }
            }
            .maps{
              height: 100%;
              margin: 2%;
              iframe {
                width: 100%;
                height: 100%;
              }
            }
        }
        
    }
}

@media screen and (max-width : 850px) {
  .contact {
    display: flex;
    height: 70vh;
    &__block {
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .contact__info-maps{
        width: 90%;
        height: 100%;
        .maps{
          height: 100%;
        }
      }
    }
  }
}

@media screen and (max-width : 540px) {
  .contact {
    display: flex;
    height: 100vh;
    &__block {
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .contact__info-maps{
        width: 90%;
        height: 100%;
        .maps{
          height: 100%;
        }
      }
      .contact__images{
        width: 100%;
      }
    }
  }
}

@media screen and (max-width : 540px) {
    .contact {
    &__block {
      .contact__info-maps{
        width: 100%;
        height: 100%;
        .info {
          align-items: center;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          p{
            margin: 1%;
          }
        }
        .maps{
          height: 100%;
        }
      }
      .contact__images{
        width: 100%;
      }
    }
  }
}
</style>
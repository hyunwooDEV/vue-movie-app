<template>
  <div class="about">
    <div class="name">
      {{ name }}
    </div>
    <div class="email">
      {{ email }}
    </div>
    <div class="dev">
      {{ dev }}
    </div>
    <div class="phone">
      {{ phone }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.state.about.image
    },
    name() {
      return this.$store.state.about.name
    },
    email() {
       return this.$store.state.about.email
    },
    dev() {
       return this.$store.state.about.dev
    },
    phone() {
       return this.$store.state.about.phone
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.about {
  text-align: center;
  .photo{
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius:50%;
    box-sizing: border-box;
    background-color: $gray-200;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 50px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;

  }
  .email {
    font-size: 20px;
    font-family: "Oswald", sans-serif;


  }
  .dev {
    font-size: 20px;
    font-family: "Oswald", sans-serif;


  }
   .phone {
    font-size: 20px;
    font-family: "Oswald", sans-serif;


  }
}
</style>
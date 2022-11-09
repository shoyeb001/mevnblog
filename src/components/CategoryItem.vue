<template>
  <div class="col-md-3">
    <div class="container">
      <div class="item">
        <a href="#">
          <div class="card">
            <div class="card-img">
              <img class="img" :src="`${img}`">
            </div>
            <div class="card-txt">
              <p>{{ name }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    name: String,
    img: String,
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.card {
  padding: 10px;
  background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
  border-radius: 18px;
  width: 100%;
}

.card-img {
  height: 190px;
  width: 100%;
  border-radius: 12px;
  padding: 20px;
  background: linear-gradient(180deg, #E6F9FF 0%, rgba(255, 255, 255, 0.51) 100%);
  overflow: hidden;
}

.card-txt p {
  color: #fff;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 5px;
}
img{
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
</style>

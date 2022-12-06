<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="logo" src="../assets/logo.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li v-if="this.store.state.islogged == false" class="nav-item dropdown">
            <!-- <div v-if="islogged==false"> -->
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Signin
            </a>
            <!-- </div> -->
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/signin">Signin</router-link>
              </li>
              <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </li>

          <li v-if="this.store.state.islogged == true" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Profile
            </a>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/profile">View</router-link>
              </li>
              <li>
                <a class="dropdown-item" @click="logout()">Logout</a>
              </li>
              <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </li>
        </ul>
        <div class="d-flex form">
          <input class="form-control me-2 search" @input="SearchThis()" v-model="name" type="search"
            placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" @click="Search()"><img class="icon"
              src="../assets/icons/search.png"></button>
        </div>
        <router-link to="/write" v-if="this.store.state.islogged == true" class="btn header-btn btn-primary">New Post
        </router-link>
      </div>
    </div>
  </nav>
  <!-- <div class="search-hinds">
    <ul>
      <li class="urls" v-for="item in data" @click="seturl(item.title)">{{item.title}}</li>
    </ul>
  </div> -->
  <div id="searchs" class="searchs">
    <ul class="hints">
      <li class="urls" v-for="item in data" @click="seturl(item.title)"><img src="../assets/img/sicon.webp" class="search-img">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Header',
  inject: ["store"],
  data() {
    return {
      name: "",
      data: "",
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.store.state.islogged = false;
      this.$router.push("/");
    },
    Search() {
      this.$router.push({ path: "/search", query: { name: this.name } });
    },
    async SearchThis() {
      if (this.name != "") {
        const hint = await axios.get("http://localhost:8000/post/search/" + this.name);
        this.data = hint.data;
        document.getElementById("searchs").style.display="block";
      }else{
        this.data="";
        document.getElementById("searchs").style.display="none";
      }
    },
    seturl(url){
      this.name=url;
    }
  },
  mounted() {
    if (localStorage.getItem("user")) {
      this.store.state.islogged = true;
    }
  }
}
</script>

<style scoped>
.logo {
  width: 160px;
}

.navbar .navbar-nav .nav-item .nav-link {
  color: #253B7C !important;
}

.search {
  border-radius: 50px;
}

.icon {
  width: 20px;
}

.form {
  border: 1px solid #253B7C;
  border-radius: 50px;
}

.form input {
  border: none;
}

.form button {
  background: none;
  border: none;
}

.header-btn {
  background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
  color: #fff;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 14px;
  width: 167px;
}

.navbar {
  background: #fff;
  box-shadow: 0 0px 1rem rgb(0 0 0 / 50%);

}

a {
  cursor: pointer;
}

.urls{
  cursor: pointer;
}

.searchs{
  width: 293px;
  height: auto;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0px 1rem rgb(0 0 0 / 20%);
  position: fixed;
  right: 184px;
  z-index: 2000;
  top: 56px;
  display: none;
}

.searchs ul{
  list-style: none;
  margin: none;
  padding: none;
}

.searchs ul li{
  padding: 10px 15px;
}

.search-img{
  width: 34px;
}

.hints{
  padding-left: 0;
}

@media(max-width:992px) {
  .header-btn {
    margin-top: 10px;
  }
}
</style>

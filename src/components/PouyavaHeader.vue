<template>
  <nav class="navbar navbar-expand-lg pheader">
    <div class="container-xl">
      <a class="navbar-brand" href="#">
        <img src="/public/images/logo.svg">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">{{$t('header.category')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">{{$t('header.movies')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">{{$t('header.series')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">{{$t('header.actors')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">{{$t('header.newDoubbledMovies')}}</router-link>
          </li>
        </ul>
        <ul class="navbar-nav nav-box">
          <li class="nav-item">
            <router-link class="nav-link" to="/login"><i class="bi bi-bell"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register"><i class="bi bi-bookmarks-fill"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register"><i class="bi bi-search"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register"><i class="bi bi-person-circle"></i></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
@import "@/assets/styles/components/pouyavaHeader.scss";
</style>
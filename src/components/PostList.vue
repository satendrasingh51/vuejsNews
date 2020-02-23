<template>
  <div class="post-list">
    <div class="card" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <div class="card">
          <h5 class="card-header">{{post.title}}</h5>
          <div class="card-image">
            <img
              :src="post.urlToImage"
            />
            <span class="card-title">{{post.author}}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content">
            <p class="des">{{post.description}}</p><br>
            <p class="des">{{post.content}}</p>
            <span class="badge">{{post.publishedAt}} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card" v-for="unite in us" :key="unite.id">
      <div class="card-body">
        <div class="card">
          <h5 class="card-header">{{unite.title}}</h5>
          <div class="card-image">
            <img
              :src="unite.urlToImage"
            />
            <span class="card-title">{{unite.author}}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content">
            <p class="des">{{unite.description}}</p><br>
            <p class="des">{{unite.content}}</p>
            <span class="badge">{{unite.publishedAt}} </span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: "PostList",
  props: [
    "posts",
    "us"
    ]
};
</script>

<style>
</style>
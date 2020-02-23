<template>
  <div class="user-list">
    <div class="card" v-for="user in userProfile" :key="user.account_id">
      <div class="card-body">
        <div class="card">
          <h5 class="card-header">{{user.title}}</h5>
          <div class="card-image">
            <img
              :src="user.urlToImage"
            />
            <span class="card-title">{{user.author}}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content">
            <p class="des">{{user.description}}</p><br>
            <p class="des">{{user.personal_message}}</p>
            <span class="badge">{{user.publishedAt}} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props:["userProfile"]
}
</script>
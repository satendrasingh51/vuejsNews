<template>
  <div class="container">
    <AddPost :userProfile="userProfile" />
    <PostList :posts="posts"
              :us="us"
              
              />
  </div>
</template>

<script>
import Axios from "axios";

import AddPost from "./AddPost";
import PostList from "./PostList";

export default {
  name: "Home",
  components: {
    AddPost,
    PostList
  },

  data() {
    return {
      posts: {},
      us:{},
      userProfile:[],
      error: []
    };
  },
  created() {
    Axios.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=5ce2cd9ec498459e9657a38fd0279f15`)
      .then(res => {
        this.posts = res.data.articles;
        // console.log("data", this.posts)
      })
      .catch(e => {
        this.error.push("This is error",e);
      });

      Axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=5ce2cd9ec498459e9657a38fd0279f15`)
      .then(res => {
        this.us = res.data.articles;
        // console.log("data", this.us)
      })
      .catch(e => {
        this.error.push("This is error",e);
      });

Axios.get(`http://acetory.com:3000/api/user_detail/ace`)
      .then(userProfile => {
        this.userProfile = userProfile.data.result;
        console.log("data", this.userProfile)
      })
      .catch(e => {
        this.error.push("This is error",e);
      });


  }
};
</script>

<style>
</style>
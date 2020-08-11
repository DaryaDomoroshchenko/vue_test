<template>
  <div class="card" @click="commentShow($event)">
    <p
      @mouseover="authorInfoIsShown = true"
      @mouseleave="authorInfoIsShown = false"
      class="card__author">{{ author.name }}
    </p>

    <h2 class="card__title">{{ title }}</h2>
    <p class="card__text">{{ text }}</p>

    <!-- <UserTitle
      :authornfo="getUser(post.userId)"/> -->

    <transition name="fade">
      <AuthorInfo
        v-show="authorInfoIsShown"
      />
    </transition>

    <transition name="fade">
      <CommentsList
        v-if="commentsAreShown"
        @hide-comments="commentsAreShown=false"
      />
    </transition>
  </div>
</template>

<script>
import AuthorInfo from "@/components/AuthorInfo.vue";
import CommentsList from "@/components/CommentsList.vue";
/* import UserTitle from "./components/title"; */

export default {
  components: {
    AuthorInfo,
    CommentsList
  },

  props: ["author", "title", "text"],

  data() {
    return {
      authorInfoIsShown: false,
      commentsAreShown: false,
    };
  },

  methods: {
    commentShow(event) {
      if(event.target.className !== "comments__close") {
        this.commentsAreShown = true;
      }
    }
  }
};
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

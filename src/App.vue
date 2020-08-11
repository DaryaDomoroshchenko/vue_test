<template>
  <div class="root">
    <div class="cards-list root__section">
      <Card
        v-for="post in allPosts()" :key="`post-${post.id}`"
        :title="post.title"
        :text="post.body"
        :author="getUser(post.userId)">
        <!-- <UserTitle
          :author="getUser(post.userId)"
        /> -->
      </Card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/* import UserTitle from "./components/title"; */
import Card from "@/components/Card.vue";

export default {
  name: 'App',

  components: {
    /* UserTitle, */
    Card
  },

  methods: {
    ...mapActions(["fetchPosts", "fetchUsers", "fetchComments"]),

    ...mapGetters(["allPosts", "allUsersById", "allUsers"]),

      getUser(id) {
        const user = this.allUsers().find(e => e.id === id);
        return user ? user : '';
      }
  },

  async mounted() {
    this.fetchPosts();
    this.fetchUsers();
    this.fetchComments();
  }
};
</script>

<style>
  @import url(./assets/pages/index.css);
</style>

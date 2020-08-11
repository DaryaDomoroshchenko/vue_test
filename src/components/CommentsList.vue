<template>
  <div class="comments">
    <img @click="hide" src="@/assets/images/close.svg" alt="Закрыть" class="comments__close">
    <CommentItem/>
  </div>
</template>

<script>
import CommentItem from "@/components/CommentItem.vue";

export default {
  components: {
    CommentItem
  },

  data() {
    return {
      comments: []
    };
  },

  methods: {
    hide() {
      this.$emit("hide-comments");
    }
  }
}
</script>

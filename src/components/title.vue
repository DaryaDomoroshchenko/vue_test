<template>
  <div>
    <p class="author-info__author">
      {{ getUser.name }}
    </p>
    <p  class="author-info__login">
      username: {{ getUser.username }}
    </p>
    <p  class="author-info__other-info">
      {{ getUser.email }}
    </p>
    <p  class="author-info__other-info">
      {{ getUser.phone }}
    </p>
    <p  class="author-info__other-info">
      from: {{ getUser.company.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "UserTitle",

  props: {
    author: {
      type: Object
    }
  }
};
</script>

<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content(params.slug).fetch();

      return { article };
    },
  };
</script>

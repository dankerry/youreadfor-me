<script>
import DetailsStarter from "~/screens/DetailsStarter.vue";

const name = "DetailsStarterPage";

const components = { DetailsStarter };

async function asyncData({ $axios }) {
  // check ../nuxt.config.js for where this comes from
  const person = await $axios.$get("/api/person");
  return { person };
}

export default {
  name,
  components,
  asyncData
};
</script>

<template>
  <DetailsStarter :person="person" />
</template>

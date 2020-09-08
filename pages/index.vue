<script>
import FormStarter from "~/screens/FormStarter.vue";

const name = "FormStarterPage";

const components = { FormStarter };

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
  <FormStarter :person="person" />
</template>

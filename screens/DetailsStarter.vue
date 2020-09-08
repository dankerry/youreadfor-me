<script>
const name = "DetailsStarter";

const components = {};

const props = ["person"];

export default {
  name,
  components,
  props
};
</script>

<template>
  <div id="details-starter" class="container">
    <div>person.firstName: {{ person.firstName }}</div>
    <div>person.lastName: {{ person.lastName }}</div>
    <div>person.age: {{ person.age }}</div>
    <div>person.email: {{ person.email }}</div>
  </div>
</template>

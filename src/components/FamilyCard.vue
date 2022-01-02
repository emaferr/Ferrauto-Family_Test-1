<template>
  <div class="card text-dark bg-light family-card" style="width: 20rem">
    <div class="card-header">
      {{ familyComponent.time }} on {{ familyComponent.date }}
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ familyComponent.name }} {{ familyComponent.surname }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "FamilyCard",
  props: {
    familyComponent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.family-card {
  cursor: pointer;
  margin: 1rem;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>

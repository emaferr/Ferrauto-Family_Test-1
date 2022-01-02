<template>
  <h1>FamilyList</h1>
  <div class="card-container">
    <FamilyCard
      v-for="familyComponent in familyComponents"
      :key="familyComponent.id"
      :familyComponent="familyComponent"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FamilyCard from "@/components/FamilyCard.vue"; // @ is an alias to /src

@Options({
  components: {
    FamilyCard,
  },
  data() {
    return {
      familyComponents: [
        {
          id: 1,
          name: "Emanuele",
          surname: "Ferrauto",
          description: "Very Hard Man",
          date: "Dicembre 22, 1990",
          time: "16:00",
        },
        {
          id: 2,
          name: "Martina",
          surname: "Pilato",
          description: "Very Hard Woman",
          date: "Ottobre 02, 1990",
          time: "18:00",
        },
        {
          id: 3,
          name: "Anita",
          surname: "Ferrauto",
          description: "Very Hard Little Woman",
          date: "Dicembre 27, 2012",
          time: "05:00",
        },
        {
          id: 4,
          name: "Enea",
          surname: "Ferrauto",
          description: "Very Hard Little Man",
          date: "Agosto 02, 2016",
          time: "01:45",
        },
      ],
    };
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

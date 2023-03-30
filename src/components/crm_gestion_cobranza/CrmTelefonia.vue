<template>
  <div class="custom-container">
    <v-tabs
      align-with-title
      v-model="tab"
      background-color="#d7e9fc"
      slider-color="purple"
      color="purple"
      height="70"
    >
      <v-tab 
        v-for="item in tabs" 
        :key="item" 
        class="text-capitalize pt-4 text-decoration-none font-weight-bold custom-tab"
        :class="'custom-tab-'+item"
        :href="'#'+item"
        target="_blank"
        :disabled="(item === 'Editar contacto' && currentRoute == 'GestionDeCobranza') || (item === 'Formulario' && currentRoute == 'ActualizacionDeDatos')"
        >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="px-5 pt-5 pb-1 tab-item-content">
      <v-tab-item value="Formulario">
        <form-telefonia/>
      </v-tab-item>
      <v-tab-item value="Editar contacto">
        <perfect-scrollbar style="max-height: 73vh">
        <tab-editar-contacto/>
      </perfect-scrollbar>
      </v-tab-item>
      <v-tab-item value="Historial">
        <perfect-scrollbar style="max-height: 73vh">
          <historial-de-gestion/>
      </perfect-scrollbar>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import TabEditarContacto from "./TabEditarContacto";
import FormTelefonia from "./FormTelefonia";
import { mapGetters } from "vuex";
import HistorialDeGestion from './HistorialDeGestion.vue';
import {
  VTabs,
  VTab,
  VTabsItems,
  VTabItem,
} from "vuetify/lib";

export default {
  name: "CrmTelefonia",

  components: {
    TabEditarContacto,
    FormTelefonia,
    HistorialDeGestion,
    VTabs,
    VTab,
    VTabsItems,
    VTabItem,
  },

  data() {
    return {
      tab: null,
      tabs: ["Formulario", "Editar contacto", "Historial"],
      currentRoute: null
    };
  },

  computed: {
    ...mapGetters("sessionTelefonia", ["getActiveCustomerTelefonia"])
  },

  mounted() {
    this.currentRoute = this.$route.query.tab;
    console.log(this.currentRoute)
  }
};
</script>

<style scoped>

.custom-container{
  background-color: var(--light-grey);
  height: 100%;
  overflow: hidden;
}

.custom-tab-Formulario {
  margin-left: 20px !important;
}
.custom-tab {
  letter-spacing: 0px;
  font-size: 14px;
}

</style>

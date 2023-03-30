<template>
  <div>
    <form-editar-contacto />
    <form-editar-codeudor class="my-4" />
  </div>
</template>

<script>
import FormEditarCodeudor from './FormEditarCodeudor.vue';

import FormEditarContacto from './FormEditarContacto.vue';

export default {
  name: "TabEditarContacto",
  components: { FormEditarContacto, FormEditarCodeudor },

};
</script>

<!-- sin scoped porque son clases propias de los componentes de los formularios -->
<style>
 .tab-item-content {
  background-color: var(--light-grey) !important;
}

 .v-expansion-panel-header{
  padding: 0px 12px !important;
  min-height: 32px !important;
}
</style>

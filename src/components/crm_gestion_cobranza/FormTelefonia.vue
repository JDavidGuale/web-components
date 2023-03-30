<template>
  <div >
    <div class="pb-3">
      <datos-deudor />
    </div>
    <perfect-scrollbar style="max-height: 60vh">
      <form-llamada />
    </perfect-scrollbar>
    
  </div>
</template>

<script>
import DatosDeudor from './DatosDeudor.vue';
import FormLlamada from './FormLlamada.vue';
export default {
  name: "FormTelefonia",
  components: {
    FormLlamada,
    DatosDeudor,
  },
  
};
</script>

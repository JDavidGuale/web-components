<!-- Para exportar el componente como web component:
npm run build -- --target wc --name form-llamada src/App.vue
-->
<template>
  <!-- componente a generar -->
    <crm-telefonia/>
</template>


<script>
import vuetify from '@/plugins/vuetify';
import CrmTelefonia from '@/components/crm_gestion_cobranza/CrmTelefonia';

export default {
  name: 'App',
  vuetify,
  components: {
    CrmTelefonia,
  },
  
  props:{
   
    setIsDialogVisible: {
      type: Function,
      default: () => {
        console.log('setIsDialogVisible no definido');
      },
    },
  },
};
</script>

<style lang="scss">

:root {
  --purple: #b385e7;
  --green: #62d861;
  --blue: #3098d4;
  --navy-blue: #2f78bc;
  --dark-blue: #132347;
  --grey: #848991;
  --light-grey: #f1f5fe;
  --white: #fff;
  --skyblue: #d7e9fc;
  --blue-font: #2196f3;
  --grey-font: #5e6061;
  --primary: var(--blue);
}



</style>

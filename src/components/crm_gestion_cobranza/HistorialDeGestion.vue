<template>
  <div>
    <div class="pb-2">
      <datos-deudor/>
    </div>
    <perfect-scrollbar style="max-height: 90vh">
      <div class="title">Historial de Gestión</div>
      <v-card>
        <v-data-table
          class="custom-table"
          :headers="headers"
          :items="getHistorialDeGestion"
          :search="search"
          locale="es-ES"
          :items-per-page="5"
          :footer-props="footerProps"
        >
          <template v-slot:item.answered="{ item }">
            <v-checkbox
              v-model="item.answered"
              color="var(--green)"
              :label="item.answered ? 'Si' : 'No'"
              class="option-label"
              readonly
              dense
            >
            </v-checkbox>
          </template>
          <template v-slot:item.called="{ item }">
            <v-chip
              :color="
                item.called === 'Deudor'
                  ? 'var(--purple)'
                  : item.called === 'Codeudor'
                  ? 'var(--blue)'
                  : 'var(--green)'
              "
              label
              outlined
              small
            >
              {{ item.called }}
            </v-chip>
          </template>
        </v-data-table>
      </v-card>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import DatosDeudor from './DatosDeudor.vue';
import { VCheckbox, VChip, VDataTable, VCard } from 'vuetify/lib';
export default {
  components: { DatosDeudor, VCheckbox, VChip, VDataTable, VCard },
  name: "HistorialDeGestion",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Fecha",
          align: "start",
          sortable: false,
          value: "date",
          width: "100px",
        },
        { text: "Contestó", value: "answered",
        width: "105px"
       },
        { text: "Llamó", value: "called" },
        { text: "Persona Contactada", value: "person",
        width: "120px"
      },
        { text: "Fecha de promesa de pago", value: "PromiseDate",
        width: "150px"
      },
        { text: "Comentario", value: "commentary", 
        width: "210px"
      }
      ],
      radioAnswered: true,
      footerProps: {
        "items-per-page-text":"Filas por página: ",
      },
      };
  },

  methods: {
    ...mapActions("sessionTelefonia",["setHistorialDeGestion"]),
  },

  computed: {
    ...mapGetters("sessionTelefonia",["getHistorialDeGestion", "getActiveCustomerTelefonia"])
  },

  mounted() {
    this.setHistorialDeGestion(this.getActiveCustomerTelefonia.id);
  }
};
</script>

<style scoped>
.title {
  font-size: 16px !important;
  font-weight: bold;
  padding: 0 0.5rem;
}

::v-deep .v-data-table-header {
  background-color: var(--skyblue);
}

::v-deep .v-data-footer {
  background-color: var(--skyblue);
}

::v-deep td {
    font-size: 12px !important;
    font-weight: normal ;
}

.option-label ::v-deep label{
  font-size: 14px !important;
  color: var(--grey-font);
}
</style>

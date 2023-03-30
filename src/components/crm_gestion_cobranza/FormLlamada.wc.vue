/* eslint-disable */
<template>
  <v-app class="application theme--light">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
  <v-card outlined class="custom-card mt-1">
    <div class="title">Formulario de Llamada</div>
    <div class="px-3 pt-4">
      <div class="d-flex flex-wrap">
        <div class="col-md-3 pb-0">
          <div class="label">Llamada Contestada</div>
          <v-radio-group row v-model="formularioLlamada.llamadaContestada">
            <v-radio
              v-for="opcion in opcionesLlamadaContestada"
              :key="opcion.label"
              :label="`${opcion.label}`"
              :value="opcion.value"
              color="var(--green)"
              class="option-label"
            ></v-radio>
          </v-radio-group>
        </div>
        <div class="col-md-9 pb-0 d-flex justify-space-between flex-wrap">
          <div class="select">
            <div class="label margin-bottom">Persona a quien llamó</div>
            <v-select
              :items="opcionesPersonaLlamada"
              v-model="formularioLlamada.personaLlamada"
              item-text="label"
              background-color="var(--skyblue)"
              filled
              dense
            ></v-select>
          </div>
          <div class="custom-input">
            <div class="label margin-bottom">Persona que contestó</div>
            <v-text-field
              v-model="formularioLlamada.personaContestada"
              filled
              dense
              placeholder="Nombre de la persona"
              background-color="var(--skyblue)"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap">
        <div class="col-md-3 py-0">
          <div>
            <div class="label margin-bottom">Llamar después</div>
            <v-menu offset-y 
            :close-on-content-click="true" 
            class="custom-menu">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  v-model="formularioLlamada.llamarDespues"
                  background-color="var(--white)"
                  append-icon="mdi-menu-down"
                  class="mb-6"
                  filled
                  dense
                  readonly
                  hide-details
                ></v-text-field>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in opcionesLlamarDespues"
                  :key="index"
                  @click="onLlamarDespues(item.label)"
                >
                  <v-list-item-title>{{ item.label }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-dialog
                    ref="llamarDespuesDialog"
                    v-model="llamarDespuesDialog"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="llamarDespuesSelected"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-list-item-content v-bind="attrs" v-on="on">
                        <v-list-item-title>Elegir cuando</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon color="var(--green)"
                          >mdi-clock-time-four-outline</v-icon
                        >
                      </v-list-item-icon>
                    </template>
                    <v-time-picker
                      v-if="llamarDespuesDialog"
                      v-model="llamarDespuesSelected"
                      full-width
                      @click:minute="
                        $refs.llamarDespuesDialog.save(llamarDespuesSelected)
                      "
                    ></v-time-picker>
                  </v-dialog>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div>
            <div class="label">Promesa de pago</div>
            <v-radio-group row v-model="formularioLlamada.promesaPago">
              <v-radio
                v-for="opcion in opcionesPromesaPago"
                :key="opcion.label"
                :label="`${opcion.label}`"
                :value="opcion.value"
                color="var(--green)"
                class="option-label"
              ></v-radio>
            </v-radio-group>
          </div>
          <div class="label">
            <div>Fecha promesa de pago</div>
            <v-dialog
              ref="menuDate"
              v-model="menuDate"
              :close-on-content-click="false"
              :return-value.sync="formularioLlamada.fechaPromesaPago"
              transition="scale-transition"
              offset-y
              min-width="auto"
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="formularioLlamada.fechaPromesaPago"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  class="mt-0 pt-1"
                  background-color="var(--white)"
                  dense
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="formularioLlamada.fechaPromesaPago"
                no-title
                scrollable
                locale="es"
                :min="getCurrentDate"
              >
                <v-spacer></v-spacer>
                <v-btn text 
                color="primary" 
                @click="menuDate = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="
                    $refs.menuDate.save(formularioLlamada.fechaPromesaPago)
                  "
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>

            <div class="d-flex align-center mt-2">
              <v-icon> mdi-clock-time-four-outline </v-icon>
              <v-dialog
                ref="menuHourStart"
                v-model="menuHourStart"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="hourStart"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="hourStart"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    background-color="var(--skyblue)"
                    class="input-width pa-0 ma-0"
                    hide-details="true"
                    dense
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menuHourStart"
                  v-model="hourStart"
                  full-width
                  @click:minute="$refs.menuHourStart.save(hourStart)"
                ></v-time-picker>
              </v-dialog>
              <div class="mx-1">a</div>
              <v-dialog
                ref="menuHourEnd"
                v-model="menuHourEnd"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="hourEnd"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="hourEnd"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    background-color="var(--skyblue)"
                    class="input-width pa-0 ma-0"
                    hide-details="true"
                    dense
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menuHourEnd"
                  v-model="hourEnd"
                  full-width
                  @click:minute="$refs.menuHourEnd.save(hourEnd)"
                  :min="hourStart"
                ></v-time-picker>
              </v-dialog>
            </div>
          </div>
        </div>
        <div class="col-md-9 pt-0">
          <div class="label margin-bottom">Comentarios</div>
          <v-textarea
            v-model="formularioLlamada.comentarios"
            rows="7"
            background-color="white"
            class="pt-0"
          ></v-textarea>
          <div class="d-flex justify-space-between align-center pa-1 w-100">
            <v-checkbox
              v-model="formularioLlamada.actualizarDatos"
              label="Actualizar datos"
              class="mb-0 mt-0 option-label"
              color="var(--green)"
              hide-details="true"
              dense
            ></v-checkbox>
            <v-btn
              color="var(--primary)"
              class="white--text text-none"
              @click="guardarLlamada"
              >Guardar</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </v-card>
</v-app>

</template>

<script>

import {
  VBtn,
  VCard,
  VCheckbox,
  VSelect,
  VDatePicker,
  VTimePicker,
  VDialog,
  VIcon,
  VTextarea,
  VTextField,
  VRadio,
  VRadioGroup,
} from "vuetify/lib";

export default {
  name: "FormLlamada",
  props:{
    setIsDialogVisible: {
      type: Function,
      required: true,
    },
  },

  components: {
    VBtn,
    VCard,
    VCheckbox,
    VSelect,
    VDatePicker,
    VTimePicker,
    VDialog,
    VIcon,
    VTextarea,
    VTextField,
    VRadio,
    VRadioGroup,
  },
  data() {
    return {
      formularioLlamada: {
        actualizarDatos: null,
        comentarios: null,
        fechaPromesaPago: null,
        horaPromesaPago: null,
        llamadaContestada: false,
        llamarDespues: null,
        personaContestada: null,
        personaLlamada: "Deudor",
        promesaPago: false,
      },
      opcionesLlamadaContestada: [
        { label: "Si", value: true },
        { label: "No", value: false },
      ],
      opcionesPersonaLlamada: [
        { label: "Deudor" },
        { label: "Codeudor" },
        { label: "Garante" },
      ],
      opcionesPromesaPago: [
        { label: "Si", value: true },
        { label: "No", value: false },
      ],
      opcionesActualizarDatos: [
        { label: "Si", value: true },
        { label: "No", value: false },
      ],
      opcionesLlamarDespues: [
        { label: "En 30 min" },
        { label: "En 1 hora" },
        { label: "En 3 horas" },
      ],
      menuDate: false,
      menuHourStart: false,
      menuHourEnd: false,
      hourStart: null,
      hourEnd: null,
      llamarDespuesDialog: false,
      llamarDespuesSelected: null,
      isVisible: false,
      menuProps: {
        closeOnClick: false,
        closeOnContentClick: false,
      },
    };
  },

  methods: {
    guardarLlamada() {
      this.formularioLlamada.horaPromesaPago =
        this.hourStart == null || this.hourEnd == null
          ? null
          : this.hourStart + " - " + this.hourEnd;
      console.log(this.formularioLlamada);
      console.log(this.setIsDialogVisible)
      this.setIsDialogVisible(true);
    },

    onLlamarDespues(val) {
      this.formularioLlamada.llamarDespues = val;
    },

    setIsVisible(value) {
      this.isVisible = value;
    },
  },

  computed: {
    getCurrentDate() {
      return "MISC.getCurrentDate()";
    },
  },

  watch: {
    llamarDespuesSelected(val) {
      this.formularioLlamada.llamarDespues = val;
      // console.log(this.formularioLlamada.llamarDespues);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../node_modules/vuetify/dist/vuetify.min.css';
  @import "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css";
  @import url("https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,700,900");

$body-font-family: "Montserrat", sans-serif;
.v-application {
  .text-body-2,
  .text-body-1,
  .display-1,
  .display-2,
  .display-3,
  .display-4,
  .headline,
  .title,
  .subtitle-1,
  .subtitle-2,
  .body-1,
  .body-2,
  .caption,
  .text-h6,
  .overline {
    font-family: $body-font-family !important;
  }
}

.title {
  font-size: 16px !important;
  font-weight: bold;
  padding: 0 0.5rem;
  background-color: #d7e9fc;
}

.custom-card {
  width: 100%;
  background-color: #f1f5fe !important;
}

.label {
  font-size: 12px !important;
  color: #5e6061;
}

.select {
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.custom-input {
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.margin-bottom {
  margin-bottom: 0.5rem;
}

.input-width {
  width: 50%;
}

::v-deep .v-text-field__slot > input {
  font-size: 14px;
}

::v-deep .v-select__slot {
  font-size: 14px;
  color: #5e6061;
}

.option-label ::v-deep label {
  font-size: 14px !important;
  color: #5e6061;
}

::v-deep .v-input__slot:before {
  border-color: transparent !important;
}

::v-deep .v-list-item__title {
  font-size: 12px;
}

.custom-menu ::v-deep .v-list-item {
  min-height: 40px !important;
}
.custom-menu ::v-deep .v-list-item__icon {
  margin: 8px o;
}
</style>

<template>
  <div>
    <div class="custom-row d-flex flex-wrap justify-space-between">
      <div class="card-container flex-wrap">
        <form-indicator
          label="Cuenta de pagos"
          :value="getActiveCustomerTelefonia.contact.paymentAccount"
        />
        <v-divider vertical inset class="custom-divider skyblue"></v-divider>
        <form-indicator
          label="Valor vigente"
          :value="'$' + getActiveCustomerTelefonia.contact.currentValue"
        />
        <v-divider vertical inset class="custom-divider skyblue"></v-divider>
        <form-indicator
          label="Días de morosidad"
          :value="getActiveCustomerTelefonia.contact.debtDays"
        />
        <v-divider vertical inset class="custom-divider skyblue"></v-divider>
        <form-indicator
          label="Calificación"
          :value="getActiveCustomerTelefonia.contact.qualification"
        />
      </div>

      <div class="total-container">
        <form-indicator
          label="Saldo Total"
          value="$11480.12"
          class="bg-skyblue"
        />
        <v-divider vertical inset class="custom-divider light-grey"></v-divider>
        <form-indicator
          label="Fecha de vencimiento"
          value="2023-12-12"
          class="bg-skyblue"
        />
      </div>
    </div>

    <div class="mt-2 chips d-flex flex-wrap">
      <v-chip small text-color="var(--white)" color="var(--blue)"
        >Saldo cuenta de pagos: ${{
          getActiveCustomerTelefonia.contact.paymentAccountBalance
        }}</v-chip
      >
      <v-chip small text-color="var(--white)" color="var(--green)"
        >Valor vencido: ${{
          getActiveCustomerTelefonia.contact.expiredValue
        }}</v-chip
      >
      <v-chip small text-color="var(--white)" color="var(--grey)"
        >Fecha de próximo pago:
        {{ getActiveCustomerTelefonia.contact.nextPaymentDate }}</v-chip
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormIndicator from "./FormIndicator.vue";
import { VDivider, VChip } from "vuetify/lib";

export default {
  name: "FormTelefonia",
  components: {
    FormIndicator,
    VDivider,
    VChip,
  },

  computed: {
    ...mapGetters("sessionTelefonia", ["getActiveCustomerTelefonia"]),
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--light-grey);
  border: 2px solid var(--skyblue);
  border-radius: 5px;

  @media (max-width: 600px) {
    justify-content: space-around;
  }
}

.custom-divider {
  margin: 0.8rem 0 !important;
  border-width: 1.5px !important;
}

.skyblue {
  border-color: var(--skyblue) !important;
}

.light-grey {
  border-color: var(--light-grey) !important;
}

.bg-skyblue {
  background-color: var(--skyblue) !important;
}

.total-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--skyblue);
  border-radius: 5px;
  max-width: max-content;

  @media (max-width: 600px) {
    justify-content: space-between;
    min-width: 100%;
  }
}

.custom-row {
  gap: 1rem;
}

.chips {
  gap: 1rem;

  & .v-chip {
    font-size: 12px !important;
  }
}
</style>

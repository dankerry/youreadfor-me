<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import isNil from "lodash/isNil";

const name = "FormStarter";
const components = { ValidationObserver, ValidationProvider };
const props = ["person"];

const frmMetaDefaults = () => ({
  error: null,
  status: null
});

const frmDefaults = () => ({
  firstName: "",
  lastName: "",
  age: "",
  email: ""
});

function data() {
  return {
    frm: this.person || frmDefaults(),
    frmMeta: frmMetaDefaults()
  };
}

const computed = {
  hasErrors() {
    return isNil(this.frmMeta.error) === false;
  }
};

const methods = {
  isNil,
  reset() {
    this.frm = frmDefaults();
    this.frmMeta = frmMetaDefaults();
  },
  submit() {
    console.log("form submit", this.frm);
    // const params = this.frm;
    // const response = this.$axios.$get("/something", { params });
    // report errors into frmMeta.errors
  }
};

export default {
  name,
  components,
  props,
  data,
  computed,
  methods
};
</script>

<style scoped>
/* #starter-screen {
  border: 1px solid red;
} */
</style>

<template>
  <div id="starter-screen" class="container">
    <div v-if="hasErrors" class="message danger">
      {{ frmMeta.errors[0].message }}
    </div>

    <div class="columns">
      <div class="column is-6">
        <ValidationObserver v-slot="{ invalid, handleSubmit }">
          <form @submit.prevent="handleSubmit(submit)">
            <!-- field: firstName -->
            <ValidationProvider v-slot="{ errors }" rules="required">
              <div class="field">
                <label for="firstName" class="label">First name</label>
                <div class="control">
                  <input
                    id="firstName"
                    v-model="frm.firstName"
                    class="input"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <span class="help is-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <!-- field: lastName -->
            <ValidationProvider v-slot="{ errors }" rules="required">
              <div class="field">
                <label id="lastName" class="label">Last name</label>
                <div class="control">
                  <input
                    v-model="frm.lastName"
                    class="input"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <span class="help is-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <!-- field: age -->
            <ValidationProvider v-slot="{ errors }" rules="required">
              <div class="field">
                <label id="age" class="label">Age</label>
                <div class="control">
                  <input
                    v-model="frm.age"
                    class="input"
                    type="text"
                    placeholder="Age"
                  />
                </div>
                <span class="help is-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <!-- field: email -->
            <ValidationProvider v-slot="{ errors }" rules="required">
              <div class="field">
                <label id="email" class="label">Email</label>
                <div class="control">
                  <input
                    v-model="frm.email"
                    class="input"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <span class="help is-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <!-- submit -->
            <div class="field is-grouped is-grouped-right">
              <div class="control">
                <button class="button" @click="reset">Clear</button>
              </div>
              <div class="control">
                <button
                  type="submit"
                  class="button is-primary"
                  :disabled="invalid"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>

      <div class="column is-60">
        <p>
          Help can be over on the right. Check out the validation by clicking
          around the fields and changing them.
        </p>

        <hr />

        <div class="is-size-3">
          <i class="fab fa-accessible-icon"></i> Icons are already installed.
          <i class="fa fa-american-sign-language-interpreting"></i>
        </div>
      </div>
    </div>
  </div>
</template>

import { extend } from "vee-validate";
import { alpha_spaces, alpha_num, required } from "vee-validate/dist/rules";

extend("alpha_spaces", {
  ...alpha_spaces,
  message: "This field must only contain alphabetic characters"
});

extend("alpha_num", {
  ...alpha_num,
  message: "We're looking for a-z and 0-9 here."
});

extend("required", {
  ...required,
  message: "This field is required"
});

import validMethod from "./validMethod";
import { ms, forms } from "../_config/config";
import regx from "./regx";
import * as yup from "yup";

// VALIDATION CUSTOM METHODS
validMethod("nameFormat", regx.name, ms.name.format);
validMethod("nameLastFormat", regx.nameLast, ms.nameLast.format);
validMethod("nameMiddleFormat", regx.nameMiddle, ms.nameMiddle.format);
validMethod("passwordFormat", regx.password, ms.password.format);
validMethod("ageFormat", regx.age, ms.age.format);
validMethod("emailFormat", regx.email, ms.email.format);
validMethod("phoneFormat", regx.phone, ms.phone.format);

// VALIDATION CUSTOM METHODS
// const user = {
//   name: "a",
//   nameLast: "Hyundai",
//   nameMiddle: "Petrol"
// };

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .test("test-name", ms.name.format, function(value) {
//       return regx.name(value);
//     })
//     .required(),
//   nameLast: yup.string().required(),
//   nameMiddle: yup.string().required()
// });

// VALIDATION RULES
// const ruleNameLast = { required: true, nameLastFormat: true };
// const ruleNameMiddle = { required: true, nameMiddleFormat: true };
// const rulePassword = { required: true, passwordFormat: true };

// VALIDATION MESSAGES
// const messageName = { required: ms.name.empty };
// const messageNameLast = { required: ms.nameLast.empty };
// const messageNameMiddle = { required: ms.nameMiddle.empty };
// const messagePassword = { required: ms.password.empty };

// VALIDATION AUTOMATE
const validAutomate = (formId, callback) => {
  $(formId).on("submit", event => {
    event.preventDefault();
  });
  const fields = $(`${formId} [data-valid-rule]`);
  const rules = {};
  $(fields).each((i, field) => {
    const rule = $(field).attr("data-valid-rule");
    const name = n(`#${field.id}`);
    if (rule === "name") {
      rules[name] = yup.string().required();
    } else if (rule === "nameLast") {
      rules[name] = yup.string().required();
    } else if (rule === "nameMiddle") {
      rules[name] = yup.string().required();
    } else if (rule === "password") {
      rules[name] = yup.string().required();
    }
  });

  const user = {
    nameLast: $("#formRegLastName").val()
  };

  const schema = yup.object().shape({
    rules
  });

  schema
    .validate(user)
    .then(function(value) {
      console.log("bbbbbbbbbb");
      console.log(value);
    })
    .catch(function(err) {
      console.log(err);
    });
};

// FORM REGISTRATION
// const regRules = {
//   [n(forms.reg.name)]: { required: true, nameFormat: true },
//   [n(forms.reg.nameLast)]: { required: true, nameLastFormat: true },
//   [n(forms.reg.nameMiddle)]: { required: true, nameMiddleFormat: true },
//   [n(forms.reg.age)]: { required: true, ageFormat: true },
//   [n(forms.reg.email)]: { required: true, emailFormat: true },
//   [n(forms.reg.phone)]: { required: true, phoneFormat: true },
//   [n(forms.reg.region)]: { required: true },
//   [n(forms.reg.city)]: { required: true },
// [n(form.reg.passw)]: { required: true, passw_format: true },
// [n(form.reg.passw_conf)]: {
//   required: true,
//   passw_format: true,
//   equalTo: form.reg.passw
// },
//   [n(forms.reg.rules)]: { required: true },
//   [n(forms.reg.politic)]: { required: true }
// };
// const regMessages = {
//   [n(forms.reg.name)]: { required: ms.name.empty },
//   [n(forms.reg.nameLast)]: { required: ms.nameLast.empty },
//   [n(forms.reg.nameMiddle)]: { required: ms.nameMiddle.empty },
//   [n(forms.reg.age)]: { required: ms.age.empty },
//   [n(forms.reg.email)]: { required: ms.email.empty },
//   [n(forms.reg.phone)]: { required: ms.phone.empty },
//   [n(forms.reg.region)]: { required: ms.region.empty },
//   [n(forms.reg.city)]: { required: ms.city.empty },
// [n(form.reg.passw)]: { required: ms.passw.empty },
// [n(form.reg.passw_conf)]: {
//   required: ms.passw_conf.empty,
//   equalTo: ms.passw_conf.equal
// },
//   [n(forms.reg.rules)]: { required: ms.rules.empty },
//   [n(forms.reg.politic)]: { required: ms.politic.empty }
// };
// const validationReg = callback => {
//   $(forms.reg.id).validate({
//     rules: regRules,
//     messages: regMessages,
//     submitHandler: callback
//   });
// };

// FORM LOGIN
// const loginRules = {
//   [n(forms.login.email)]: { required: true, emailFormat: true },
//   [n(forms.login.passw)]: { required: true, passwordFormat: true }
// };
// const loginMessages = {
//   [n(forms.login.email)]: { required: ms.email.empty },
//   [n(forms.login.passw)]: { required: ms.passw.empty }
// };
// const validationLogin = callback => {
//   $(forms.login.id).validate({
//     rules: loginRules,
//     messages: loginMessages,
//     submitHandler: callback
//   });
// };

// FORM START
// const rules_start = {
//   [n(form.start.name)]: { required: true, nameFormat: true },
//   [n(form.start.phone)]: { required: true, phoneFormat: true },
//   [n(form.start.rules)]: { required: true }
// };
// const messages_start = {
//   [n(form.start.name)]: { required: ms.name.empty },
//   [n(form.start.phone)]: { required: ms.phone.empty },
//   [n(form.start.rules)]: { required: ms.rules.empty }
// };

// FORM FEEDBACK
// const rules_feedback = {
//   [n(form.feedback.name)]: { required: true, nameFormat: true },
//   [n(form.feedback.phone)]: { required: true, phoneFormat: true },
//   [n(form.feedback.email)]: { required: true, emailFormat: true },
//   [n(form.feedback.reason)]: { required: true },
//   [n(form.feedback.message)]: { required: true },
//   [n(form.feedback.rules)]: { required: true }
// };
// const messages_feedback = {
//   [n(form.feedback.name)]: { required: ms.name.empty },
//   [n(form.feedback.phone)]: { required: ms.phone.empty },
//   [n(form.feedback.email)]: { required: ms.email.empty },
//   [n(form.feedback.reason)]: { required: ms.reason.empty },
//   [n(form.feedback.message)]: { required: ms.message.empty },
//   [n(form.feedback.rules)]: { required: ms.politic.empty }
// };

// // FORM CHANGE
// const rules_change = {
//   [n(form.change.passw1)]: { required: true, passwordFormat: true },
//   [n(form.change.passw2)]: { required: true, passwordFormat: true },
//   [n(form.change.passw3)]: {
//     required: true,
//     passwordFormat: true,
//     equalTo: form.change.passw2
//   }
// };
// const messages_change = {
//   [n(form.change.passw1)]: { required: ms.passw.empty },
//   [n(form.change.passw2)]: { required: ms.passw_new.empty },
//   [n(form.change.passw3)]: {
//     required: ms.passw_conf.empty,
//     equalTo: ms.passw_conf.equal
//   }
// };

// HELPERS
function n(id) {
  return $(id).attr("name");
}

export { validAutomate };

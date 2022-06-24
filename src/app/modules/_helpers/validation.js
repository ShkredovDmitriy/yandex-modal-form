import validMethod from './validMethod';
import { forms, ms } from '../_config/config';
import regx from './regx';

// VALIDATION CUSTOM METHODS
validMethod('nameFormat', regx.name, ms.name.format);
validMethod('nameLastFormat', regx.nameLast, ms.nameLast.format);
validMethod('nameMiddleFormat', regx.nameMiddle, ms.nameMiddle.format);
validMethod('passwordFormat', regx.password, ms.password.format);
validMethod('ageFormat', regx.age, ms.age.format);
validMethod('emailFormat', regx.email, ms.email.format);
validMethod('phoneFormat', regx.phone, ms.phone.format);
validMethod('dateFormat', regx.date, ms.date.format);
validMethod('timeFormat', regx.time, ms.time.format);
validMethod('promoCodeFormat', regx.promoCode, ms.promoCode.format);

// VALIDATION AUTOMATE
const validAutomate = (formId, callback) => {
  const fields = $(`${formId} [data-valid-rule]`);

  const rules = {};
  const messages = {};
  $(fields).each((i, field) => {
    const rule = $(field).attr('data-valid-rule');
    const name = n(`#${field.id}`);
    if (rule === 'name') rules[name] = { required: true, nameFormat: true };
    if (rule === 'name') messages[name] = { required: ms.name.empty };
    if (rule === 'nameLast')
      rules[name] = { required: true, nameLastFormat: true };
    if (rule === 'nameLast') messages[name] = { required: ms.nameLast.empty };
    if (rule === 'nameMiddle')
      rules[name] = { required: true, nameMiddleFormat: true };
    if (rule === 'nameMiddle')
      messages[name] = { required: ms.nameMiddle.empty };
    // if (rule === 'password')
    //   rules[name] = { required: true, passwordFormat: true };
    // if (rule === 'password') messages[name] = { required: ms.password.empty };
    // if (rule === 'passwordNew')
    //   rules[name] = { required: true, passwordFormat: true };
    // if (rule === 'passwordNew')
    //   messages[name] = { required: ms.passwNew.empty };
    // if (rule === 'passwordConfirm') {
    //   rules[name] = {
    //     required: true,
    //     passwordFormat: true,
    //     equalTo: forms.reg.passw,
    //   };
    //   messages[name] = {
    //     required: ms.password.empty,
    //     equalTo: ms.passwConf.equal,
    //   };
    // }
    // if (rule === 'passwordNewConfirm') {
    //   rules[name] = {
    //     required: true,
    //     passwordFormat: true,
    //     equalTo: forms.change.passw2,
    //   };
    //   messages[name] = {
    //     required: ms.passwNew.empty,
    //     equalTo: ms.passwConf.equal,
    //   };
    // }
    if (rule === 'email') rules[name] = { required: true, emailFormat: true };
    if (rule === 'email') messages[name] = { required: ms.email.empty };
    if (rule === 'phone') rules[name] = { required: true, phoneFormat: true };
    if (rule === 'phone') messages[name] = { required: ms.phone.empty };
    if (rule === 'age') rules[name] = { required: true, ageFormat: true };
    if (rule === 'age') messages[name] = { required: ms.age.empty };
    if (rule === 'region') rules[name] = { required: true };
    if (rule === 'region') messages[name] = { required: ms.region.empty };
    if (rule === 'city') rules[name] = { required: true };
    if (rule === 'city') messages[name] = { required: ms.city.empty };

    if (rule === 'address') {
      rules[name] = { required: true };
      messages[name] = { required: ms.address.empty };
    }

    if (rule == 'required') {
      rules[name] = { required: true };
      messages[name] = { required: ms.field.empty };
    }

    if (rule === 'message') rules[name] = { required: true };
    if (rule === 'message') messages[name] = { required: ms.message.empty };
    if (rule === 'select') rules[name] = { required: true };
    // if (rule === 'select') messages[name] = { required: ms.select.empty };

    if (rule === 'rules') rules[name] = { required: true };
    if (rule === 'rules') messages[name] = { required: ms.rules.empty };
    if (rule === 'politic') rules[name] = { required: true };
    if (rule === 'politic') messages[name] = { required: ms.politic.empty };
  });
  $(formId).validate({
    rules: rules,
    messages: messages,
    submitHandler: callback,
  });
};

// HELPERS
function n(id) {
  return $(id).attr('name');
}

export { validAutomate };

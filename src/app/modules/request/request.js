import { modals, forms } from '../_config/config';
import { validAutomate } from '../_helpers/validation';
import { apiRequest } from '../_helpers/api';
import { modalInfo } from '../_helpers/modalInfo';
// import { modalFormReset } from "../_helpers/reset";
import log from '../_helpers/log';

if (document.querySelector(forms.request.id)) {
  log('REQUEST', 'start');
  // modalFormReset(modals.feedback);
  validAutomate(forms.request.id, sendFormData);
}

// HELPERS
function sendFormSuccess(data) {
  // const res = JSON.parse(data);
  if (data.status) {
    modalInfo('requestSuccess');
    $(forms.request.id).trigger('reset');
  }
}

function sendFormError() {
  // $(modals.reg).modal('hide');
  modalInfo('someError');
}

// API
function sendFormData(form, event) {
  apiRequest(sendFormSuccess, sendFormError);
}

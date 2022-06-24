import { urlsDev, urlsProd, forms } from '../_config/config';

let urls = urlsProd;
if (process.env.NODE_ENV === 'development') urls = urlsDev;

const apiRequest = (sucess, error) => {
  const formData = {};
  formData.firstName = $(forms.request.firstName).val();
  formData.lastName = $(forms.request.lastName).val();
  formData.email = $(forms.request.email).val();
  formData.tarif = $(forms.request.tarif).val();
  formData.message = $(forms.request.message).val();
  formData.agreement = $(forms.request.agreement).val();

  $.ajax({
    type: 'POST',
    url: urls.apiRequest,
    data: formData,
    dataType: 'json',
    success: sucess,
    error: error,
  });
};

// const apiRegistration = (sucess, error) => {
//   const formData = {};
//   formData.name = $(forms.reg.name).val();
//   formData.lastName = $(forms.reg.nameLast).val();
//   formData.password = $(forms.reg.passw).val();
//   formData.city = $(forms.reg.city).val();
//   formData.email = $(forms.reg.email).val();
//   formData.phone = $(forms.reg.phone).val();
//   formData.rules = "1";
//   formData.politic = "1";
//   formData.mailings = "1";
//   $.ajax({
//     type: "POST",
//     url: urls.apiRegistration,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiCity = (formData, sucess, error) => {
//   $.ajax({
//     type: "POST",
//     url: urls.apiCity,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiRecovery = (sucess, error) => {
//   const formData = {};
//   formData.email = $(forms.rec.email).val();
//   $.ajax({
//     type: "POST",
//     url: urls.apiRecovery,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiLogin = (sucess, error) => {
//   const formData = {};
//   formData.email = $(forms.login.email).val();
//   formData.password = $(forms.login.passw).val();
//   $.ajax({
//     type: "POST",
//     url: urls.apiLogin,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiConfirm = (sucess, error) => {
//   const formData = {};
//   formData.email = $(forms.confirm.email).val();
//   $.ajax({
//     type: "POST",
//     url: urls.apiConfirm,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiChange = (sucess, error) => {
//   const formData = {};
//   formData.oldPassw = $(forms.change.passw1).val();
//   formData.newPassw = $(forms.change.passw2).val();
//   $.ajax({
//     type: "POST",
//     url: urls.apiChange,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiAvatar = (sucess, error) => {
//   var formData = new FormData();
//   formData.append("file", $(forms.avatar.file).prop("files")[0]);
//   $.ajax({
//     type: "POST",
//     url: urls.apiAvatar,
//     data: formData,
//     dataType: "json",
//     processData: false,
//     contentType: false,
//     success: sucess,
//     error: error
//   });
// };

// const apiEdit = (sucess, error) => {
//   const formData = {};
//   formData.name = $(forms.edit.name).val();
//   formData.lastName = $(forms.edit.nameLast).val();
//   formData.phone = $(forms.edit.phone).val();
//   $.ajax({
//     type: "POST",
//     url: urls.apiEdit,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiPromoCode = (sucess, error) => {
//   const formData = {};
//   formData.code = $(forms.promoCode.code).val();
//   $.ajax({
//     type: "POST",
//     url: urls.apiPromoCode,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiWinData1 = (sucess, error) => {
//   const formData = {};
//   formData.name = $(forms.winData1.name).val();
//   formData.lastName = $(forms.winData1.nameLast).val();
//   formData.patronymic = $(forms.winData1.nameMiddle).val();
//   formData.phone = $(forms.winData1.phone).val();
//   $.ajax({
//     type: "POST",
//     url: urls.apiWinData,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

// const apiWinData2 = (sucess, error) => {
//   const formData = {};
//   formData.name = $(forms.winData2.name).val();
//   formData.lastName = $(forms.winData2.nameLast).val();
//   formData.patronymic = $(forms.winData2.nameMiddle).val();
//   formData.delivery_address = $(forms.winData2.address).val();
//   formData.phone = $(forms.winData2.phone).val();

//   $.ajax({
//     type: "POST",
//     url: urls.apiWinData,
//     data: formData,
//     dataType: "json",
//     success: sucess,
//     error: error
//   });
// };

export {
  // apiRegistration,
  // apiCity,
  // apiRecovery,
  // apiLogin,
  // apiConfirm,
  // apiChange,
  // apiAvatar,
  // apiEdit,
  // apiPromoCode,
  apiRequest,
  // apiWinData1,
  // apiWinData2
};

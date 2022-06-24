import { modals } from '../_config/config';

const variants = {
  requestSuccess: {
    title: 'Спасибо за Ваш запрос.',
    message: 'Наш менеджер свяжится с Вами в течении 24 часов.',
  },
  // winDataSuccess: {
  //   title: 'Данные приняты',
  //   message: 'Мы свяжемся с вами в течении двух рабочих дней.',
  // },

  someError: {
    title: 'Ошибка сети',
    message: 'Проверьте интернет соединение.',
  },
  // recSuccess: {
  //   title: 'Восстановление пароля',
  //   message: 'Новый пароль был отправлен на Вашу электронную почту.',
  // },
  // confirmSuccess: {
  //   title: 'Подтверждение электронной почты',
  //   message: 'Письмо было отправлено на ваш email повторно.',
  // },
  // handSuccess: {
  //   title: 'Данные приняты',
  //   message: 'Мы свяжемся с вами в течении двух рабочих дней.',
  // },
  // feedbackSend: {
  //   title: 'Обратная связь',
  //   message:
  //     'Сообщение отправлено. Мы свяжемся с вами в течение двух рабочих дней.',
  // },
  // file_duplicate: {
  //   title: "Ошибка",
  //   message: "Данный файл уже загружали ранее."
  // },
  // file_time_limit_min: {
  //   title: "Ошибка",
  //   message: "Вы превысили лимит, можно загрузить 1 чек в 3 минуты"
  // },
  // file_time_limit_day: {
  //   title: "Ошибка",
  //   message: "Вы превысили лимит, можно загрузить 10 чеков в сутки"
  // },
  // check_success: {
  //   title: "Данные приняты",
  //   message: "Мы свяжемся с вами в течении двух рабочих дней."
  // },
  // check_exist: {
  //   title: "Ошибка",
  //   message: "Данный чек уже загружен"
  // },
  // rec_success: {
  //   title: "СБРОС ПАРОЛЯ",
  //   message: "Новый пароль был отправлен на Вашу электронную почту."
  // },

  // passw_changed: {
  //   title: "Смена пароля",
  //   message: "Ваш Пароль был упешно именен."
  // },
  // feedback_send: {
  //   title: "Обратная связь",
  //   message:
  //     "Сообщение отправлено. Мы свяжемся с вами в течение двух рабочих дней."
  // },
  // end_registered: {
  //   title: "чат-бот",
  //   message:
  //     "Завершите регистрацию через чат-бот, затем войдите в личный кабинет используя логин и пароль."
  // },
};

const modalInfo = (variant) => {
  const title = variants[variant].title;
  const message = variants[variant].message;
  $('#modalInfo .modal-title').html(title);
  $('#modalInfo .modal-info__mess').html(message);
  setTimeout(() => {
    $(modals.info).modal('show');
  }, 500);
};

export { modalInfo };

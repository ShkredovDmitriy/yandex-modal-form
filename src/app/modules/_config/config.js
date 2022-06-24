const urlsDev = {
  apiRequest: 'http://localhost:8081/request.php',
  // apiCity: "http://localhost:8081/api/city",
  // apiRecovery: "http://localhost:8081/api/recovery",
  // apiLogin: "http://localhost:8081/api/login",
  // apiConfirm: "http://localhost:8081/api/confirm",
  // apiHand: "http://localhost:8081/api/hand",
  // apiFeedback: "http://localhost:8081/api/feedback",
  // apiAvatar: "http://localhost:8081/api/avatar",
  // apiChange: "http://localhost:8081/api/password-change",
  // apiEdit: "http://localhost:8081/api/edit",
  // apiPromoCode: "https://svoiya.testpromo.site/api/promo-code.php",
  // apiWinData: "https://svoiya.testpromo.site/api/data.php"
};

const urlsProd = {
  apiRequest: './request.php',
  // apiCity: "/api/city.php",
  // apiRecovery: "/api/pass-restore.php",
  // apiLogin: "/api/login.php",
  // apiConfirm: "/api/send-new-link.php",
  // apiHand: "/api/hand.php",
  // apiFeedback: "/api/feedback.php",
  // apiAvatar: "/api/avatar.php",
  // apiChange: "/api/password-change.php",
  // apiEdit: "/api/edit.php",
  // apiPromoCode: "/api/promo-code.php",
  // apiWinData: "/api/data.php"
};

const modals = {
  // login: '#modalLogin',
  // reg: '#modalReg',
  // rec: '#modalRecovery',
  // change: '#modalChange',
  // feedback: '#modalFeedback',
  // edit: '#modalEdit',
  // winData: '#modalWinData',
  // upload: '#modalFileUpload',
  // uploadSucces: '#modalUploadSuccess',
  // uploadFalse: '#modalUploadFalse',
  // instruction: '#modalInstruction',
  // hand: '#modalHand',
  info: '#modalInfo',
  // winners: '#modalWinners',
  // confirm: '#modalConfirm',
  // winData1: '#modalWinData1',
  // winData2: '#modalWinData2',
};

const forms = {
  request: {
    id: '#formRequest',
    firstName: '#formRequestFirstName',
    lastName: '#formRequestLastName',
    email: '#formRequestEmail',
    tarif: '#formRequestTarif',
    message: '#formRequestMessage',
    agreement: '#formRequestPersonalData',
  },
  // reg: {
  //   id: '#formReg',
  //   name: '#formRegName',
  //   nameLast: '#formRegLastName',
  //   nameMiddle: '#formRegMiddleName',
  //   age: '#formRegAge',
  //   email: '#formRegEmail',
  //   phone: '#formRegPhone',
  //   passw: '#formRegPassw',
  //   passw_conf: '#formRegPasswConf',
  //   region: '#formRegRegion',
  //   city: '#formRegCity',
  //   rules: '#formRegRules',
  //   politic: '#formRegData',
  //   mailings: '#formRegMailings',
  //   submit: '#formRegSubmit',
  // },
  // rec: {
  //   id: '#formRecovery',
  //   email: '#formRecoveryEmail',
  // },
  // filter: {
  //   id: '#filterWinners',
  //   week: '#filterWinnersWeek',
  //   phone: '#filterWinnersPhone',
  //   table: '#tableWinners',
  // },
  // feedback: {
  //   id: '#formFeedback',
  //   name: '#formFeedbackName',
  //   email: '#formFeedbackEmail',
  //   subject: '#formFeedbackSubject',
  //   message: '#formFeedbackMessage',
  //   data: '#formFeedbackData',
  //   captcha: '#formFeedbackCaptcha',
  // },
  // change: {
  //   id: '#formChange',
  //   passw1: '#formChangePassw1',
  //   passw2: '#formChangePassw2',
  //   passw3: '#formChangePassw3',
  // },
  // confirm: {
  //   id: '#formConfirm',
  //   email: '#formConfirmEmail',
  //   button: '#formConfirmButton',
  // },
  // avatar: {
  //   id: '#personalAvatarUploadForm',
  //   file: '#personalAvatarUploadImage',
  // },
  // edit: {
  //   id: '#formEdit',
  //   name: '#formEditName',
  //   nameLast: '#formEditLastName',
  //   email: '#formEditEmail',
  //   phone: '#formEditPhone',
  // },
  // winData1: {
  //   id: '#formWinData1',
  //   name: '#formWinDataName',
  //   nameLast: '#formWinDataLastName',
  //   nameMiddle: '#formWinDataMiddleName',
  //   address: '#formWinDataAddress',
  //   phone: '#formWinDataPhone',
  // },
  // winData2: {
  //   id: '#formWinData2',
  //   name: '#formWinData2Name',
  //   nameLast: '#formWinData2LastName',
  //   nameMiddle: '#formWinData2MiddleName',
  //   passpData: '#formWinData2PassportData',
  //   passpOrg: '#formWinData2PassportOrg',
  //   passpCode: '#formWinData2PassportCode',
  //   passpDate: '#formWinData2PassportDate',
  //   address: '#formWinData2Address',
  //   phone: '#formWinData2Phone',
  //   inn: '#formWinData2Inn',
  //   paspAddress: '#formWinDataPaspAddress',
  // },
  // link: {
  //   id: '.form-link',
  //   link: '#formLinkLink',
  // },
  // upload: {
  //   id: '#formUpload',
  //   file1: '#formUploadFile1',
  //   file2: '#formUploadFile2',
  //   file3: '#formUploadFile3',
  //   file4: '#formUploadFile4',
  //   file5: '#formUploadFile5',
  //   error: '#formUpload .form-error',
  // },
  // instruction: {
  //   button: '#formInstructionButton',
  // },
  // hand: {
  //   id: '#formHand',
  //   fn: '#formHandFN',
  //   fd: '#formHandFD',
  //   fp: '#formHandFP',
  //   date: '#formHandDate',
  //   time: '#formHandTime',
  //   summ: '#formHandSumm',
  // },
  // promoCode: {
  //   id: '#formPromoCode',
  //   code: '#formPromoCodeCode',
  //   submit: '#buttonSendPromoCode',
  // },
};

const ms = {
  name: {
    empty: 'Вы не заполнили поле Имя.',
    format: 'Кириллица от 2 до 20 символов.',
  },
  nameLast: {
    empty: 'Вы не заполнили поле Фамилия.',
    format: 'Кирилица от 2 до 20 символов.',
  },
  nameMiddle: {
    empty: 'Вы не заполнили поле Отчество.',
    format: 'Кирилица от 2 до 20 символов.',
  },
  age: {
    empty: 'Вы не заполнили поле Возраст.',
    format: 'Цифра от 18 и старше.',
  },
  email: {
    empty: 'Вы не заполнили поле «E-mail»',
    format: 'Используйте формат xxxxxx@xxxx.xx',
    exist: 'E-mail уже зарегистрирован.',
  },
  phone: {
    empty: 'Вы не заполнили поле «Телефон»',
    format: 'Используйте формат +7(9ХХ)XXXXXXX',
    exist: 'Телефон уже зарегистрирован.',
  },
  password: {
    empty: 'Вы не заполнили поле «Пароль»',
    format: 'Цифры и латиница, от 6 до 16 символов.',
  },
  passwNew: {
    empty: 'Вы не заполнили поле «Новый пароль»',
    format: 'Цифры и латиница, от 6 до 16 символов.',
  },
  passwConf: {
    equal: 'Пароли не совпадают',
  },
  subject: {
    empty: 'Укажите причину обращения',
  },
  region: {
    empty: 'Вы не указали область',
  },
  city: {
    empty: 'Вы не указали город',
  },
  address: {
    empty: 'Вы не заполнили поле «Адрес»',
  },
  date: {
    empty: 'Вы не заполнили поле «Дата»',
    format: 'Используйте формат 25.06.2021',
  },
  time: {
    empty: 'Вы не заполнили поле «Время»',
    format: 'Используйте формат 15:25',
  },
  message: {
    empty: 'Вы не заполнили поле Сообщение',
  },
  select: {
    empty: 'Вы не выбрали вариант из списка.',
  },
  rules: {
    empty: 'Вы не согласились с правилами',
  },
  politic: {
    empty: 'Вы не согласились с политикой обработки Ваших персональных данных.',
  },
  mailings: {
    empty: 'Вы не согласились на получение рассылок.',
  },
  info: {
    empty: 'Вы не согласились на получение информации',
  },
  field: {
    empty: 'Вы не заполниои поле.',
  },
  captcha: {
    empty: 'Подтвердите что вы не робот.',
  },
  promoCode: {
    empty: 'Введите промо код',
    format: 'Цифры и латиница, 10 символов.',
  },
  nerwork: {
    error: 'Ошибка. Проверьте интернет соединение.',
  },
};

export { urlsDev, urlsProd, modals, forms, ms };

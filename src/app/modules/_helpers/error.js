const variants = {
  regEnd: {
    message: "Период регистрации завершен."
  },
  regPhoneExist: {
    message: "Телефон уже зарегистрирован."
  },
  regEmailExist: {
    message: "Email уже зарегистрирован."
  },
  emailNotExist: {
    message: "Email не зарегистрирован."
  },
  emailConfirmed: {
    message: "Данный email уже подтвержден."
  },
  recoveryLimit: {
    message: "Вы превысили лимит отправки. Повторите позднее."
  },
  noUserOrPassw: {
    message: "Неверный логин или пароль"
  },
  userBlocked: {
    message: "Пользователь заблокирован"
  },
  checkExist: {
    message: "Данный чек уже зарегистрирован"
  },
  avatarOutSize: {
    message: "Размер аватара превышает 200KB"
  },
  avatarOutFormat: {
    message: "Испоользуйте форматы jpg, png, gif"
  },
  wrongOldPassw: {
    message: "Неверный старый пароль"
  },
  promoCodeSuccess: {
    message: "код успешно зарегистрирован"
  },
  promoCodeError: {
    message: "код не найден или уже использован"
  },
  promoCodeBlock: {
    message: "Вы заблокированы за 5 некорректных попыток вводакода"
  },
  promoCodeBlock6h: {
    message: "Вы заблокированы на 6 часов за 5 некорректных попыток ввода кода"
  },
  promoCodeBlock24h: {
    message: "Вы заблокированы на 24 часа за 5 некорректных попыток ввода кода"
  },
  serverError: {
    message: "Ошибка. Проверьте интернет соединение."
  }
};

const error = formId => {
  const serverError = variant => {
    if (variant) {
      const message = variants[variant].message;
      $(`${formId} .form-error`).html(
        `<div class="form-error__text">${message}</div>`
      );
    } else {
      $(`${formId} .form-error`).html("");
    }
  };
  return serverError;
};

export { error };

import { type FormEventHandler, useEffect, useState } from 'react';

import Validator, { type ValidationError } from 'fastest-validator';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { LogoButton } from '~/shared/ui/buttons/LogoButton/LogoButton';
import { Input } from '~/shared/ui/Input/Input';
import { Submit } from '~/shared/ui/Submit/Submit';
import { registerUserAsyncAction } from '~/store/reducers/register/actions';
import {
  changeThemeSelector,
  registerSelector
} from '~/store/selectors/selectors';

import styles from './styles.module.scss';

const signUpValidationSchema = {
  name: {
    type: 'string',
    min: 3,
    max: 48,
    optional: true
  },
  email: {
    type: 'email',
    optional: true
  },
  password: {
    type: 'string',
    min: 8,
    max: 16,
    optional: true,
    nullable: true
  },
  confirmpassword: {
    type: 'equal',
    field: 'password',
    optional: true,
    nullable: true
  }
};

interface FormData {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  username: {
    value: string;
  };
  confirm_password: {
    value: string;
  };
}

export const check = (schema: object, data: object) => {
  const validator = new Validator();
  const compiledValidator = validator.compile(schema);

  return compiledValidator(data);
};

export const SignUp = () => {
  const hasTheme = useSelector(changeThemeSelector);
  const register = useSelector(registerSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nameApiError, setNameApiError] = useState('');
  const [emailApiError, setEmailApiError] = useState('');
  const [formError, setFormError] = useState<ValidationError[]>([]);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = event.currentTarget as unknown as FormData;
    const result = check(signUpValidationSchema, {
      name: formData.username.value,
      email: formData.email.value,
      password: formData.password.value,
      confirmpassword: formData.confirm_password.value
    });
    if (result === true) {
      setFormError([]);
      const name: string = formData.username.value;
      const email: string = formData.email.value;
      const password: string = formData.password.value;

      dispatch(
        registerUserAsyncAction(name, email, password, () =>
          navigate('/confirmation', { state: email })
        )
      );
    } else {
      setFormError(result as ValidationError[]);
    }
  };
  useEffect(() => {
    for (const key in register.errors) {
      if (key === 'username') {
        const userNameError: string[] = register.errors[key];
        if (userNameError) {
          setNameApiError('Пользователь с этим именем уже существует');
        } else {
          setNameApiError('');
        }
      } else if (key === 'email') {
        const userEmailError: string[] = register.errors[key];
        if (userEmailError) {
          setEmailApiError('Пользователь с этой почтой уже существует');
        } else {
          setEmailApiError('');
        }
      }
    }
  }, [register.errors, nameApiError, emailApiError]);

  return (
    <>
      <LogoButton className={styles.logo_button} />
      <form
        onSubmit={handleSubmit}
        className={
          hasTheme
            ? `${styles.form_container} ${styles.light}`
            : `${styles.form_container}`
        }
      >
        <h2>Регистрация</h2>
        <Input
          type={'text'}
          label={'Имя'}
          placeholder={'Введите ваше имя'}
          name={'username'}
        />
        {formError.map((error) => (
          <span
            key={error.field}
            className={styles.errors}
          >
            {error.message ===
            `The 'name' field length must be greater than or equal to 3 characters long.`
              ? 'Имя должно содержать хотя бы 3 символа'
              : ''}
          </span>
        ))}
        <span className={styles.errors}>{nameApiError}</span>
        <Input
          type={'email'}
          label={'Email'}
          placeholder={'Введите ваш email'}
          name={'email'}
        />
        <span className={styles.errors}>{emailApiError}</span>
        {formError.map((error) => (
          <span
            key={error.field}
            className={styles.errors}
          >
            {error.message === `The 'email' field must not be empty.`
              ? 'Поле почты не должны быть пустое'
              : ''}
          </span>
        ))}
        <Input
          type={'password'}
          label={'Пароль'}
          placeholder={'Введите ваш пароль'}
          name={'password'}
        />
        {formError.map((error) => (
          <span
            key={error.field}
            className={styles.errors}
          >
            {error.message ===
            `The 'password' field length must be greater than or equal to 8 characters long.`
              ? 'Пароль должен быть от 8 символов'
              : '' ||
                error.message ===
                  `The 'password' field length must be less than or equal to 16 characters long.`
              ? 'Пароль должен быть до 16 символов'
              : ''}
          </span>
        ))}
        <Input
          type={'password'}
          label={'Подтверждение пароля'}
          placeholder={'Подтвердите ваш пароль'}
          name={'confirm_password'}
        />
        {formError.map((error) => (
          <span
            key={error.field}
            className={styles.errors}
          >
            {error.message ===
            `The 'confirmpassword' field value must be equal to 'password' field value.`
              ? 'Пароли не совпадают'
              : ''}
          </span>
        ))}
        <Submit value={'Зарегестрироваться'} />
        <p>
          Есть аккаунт? <NavLink to={'/signin'}>Авторизоваться</NavLink>
        </p>
      </form>
    </>
  );
};

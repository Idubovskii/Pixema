import { type FormEventHandler, useEffect, useState } from 'react';

import Validator, { type ValidationError } from 'fastest-validator';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { LogoButton } from '~/shared/ui/buttons/LogoButton/LogoButton';
import { Input } from '~/shared/ui/Input/Input';
import { Submit } from '~/shared/ui/Submit/Submit';
import { getUserAsyncAction } from '~/store/reducers/auth/actions';
import { authSelector, changeThemeSelector } from '~/store/selectors/selectors';

import styles from './styles.module.scss';

const signInValidationSchema = {
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
  }
};

interface FormData {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}
interface AuthErrors {
  [key: string]: string[];
}

export const check = (schema: object, data: object) => {
  const validator = new Validator();
  const compiledValidator = validator.compile(schema);

  return compiledValidator(data);
};

export const SignIn = () => {
  const hasTheme = useSelector(changeThemeSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(authSelector);
  const [formError, setFormError] = useState<ValidationError[]>([]);
  const [apiErrors, setApiErrors] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = event.currentTarget as unknown as FormData;
    const result = check(signInValidationSchema, {
      email: formData.email.value,
      password: formData.password.value
    });
    if (result === true) {
      setFormError([]);
      const email: string = formData.email.value;
      const password: string = formData.password.value;
      dispatch(
        getUserAsyncAction(email, password, () => {
          navigate('/');
        })
      );
    } else {
      setFormError(result as ValidationError[]);
    }
  };
  useEffect(() => {
    for (const key in auth.errors) {
      if (auth.errors === null) {
        setApiErrors('');
      } else {
        const errors: AuthErrors = auth.errors;
        if (
          errors[key].includes(
            'No active account found with the given credentials'
          )
        ) {
          setApiErrors('Неверный логин либо пароль');
        }
      }
    }
  }, [auth.errors, apiErrors]);

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
        <h2>Авторизация</h2>
        <Input
          type={'email'}
          placeholder={'Введите вашу почту'}
          name={'email'}
          label={'Почта'}
        />
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
              : `Пароль должен быть до 16 символов`}
          </span>
        ))}
        <span className={styles.errors}>{apiErrors}</span>
        <NavLink
          className={styles.forgot_link}
          to={'/reset'}
        >
          Забыли пароль?
        </NavLink>
        <Submit value={'Войти'} />
        <p>
          Нет аккаунта? <NavLink to={'/signup'}>Зарегестрироваться</NavLink>
        </p>
      </form>
    </>
  );
};

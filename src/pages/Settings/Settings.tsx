import { type FormEventHandler, useEffect, useState } from 'react';

import Validator, { type ValidationError } from 'fastest-validator';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Input } from '~/shared/ui/Input/Input';
import { Submit } from '~/shared/ui/Submit/Submit';
import {
  patchEmailAsyncAction,
  patchPasswordAsyncAction,
  patchUserAsyncAction
} from '~/store/reducers/auth/actions';
import { ThemeColorAction } from '~/store/reducers/theme/actions';
import {
  authSelector,
  changeThemeSelector,
  userSelector
} from '~/store/selectors/selectors';

import styles from './styles.module.scss';

const settingsValidationSchema = {
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
  oldpassword: {
    type: 'string',
    min: 8,
    max: 16,
    optional: true,
    nullable: true
  },
  newpassword: {
    type: 'string',
    min: 8,
    max: 16,
    optional: true,
    nullable: true
  },
  confirmpassword: {
    type: 'equal',
    field: 'newpassword',
    optional: true,
    nullable: true
  }
};

export const check = (schema: object, data: object) => {
  const validator = new Validator();
  const compiledValidator = validator.compile(schema);

  return compiledValidator(data);
};

export const Settings = () => {
  const auth = useSelector(authSelector);
  const [formNameError, setFormNameError] = useState<ValidationError[]>([]);
  const [formEmailError, setFormEmailError] = useState<ValidationError[]>([]);
  const [formPasswordError, setFormPasswordError] = useState<ValidationError[]>(
    []
  );
  const [nameError, setNameError] = useState('');
  const [nameSuccess, setNameSuccess] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasTheme = useSelector(changeThemeSelector);
  const toggleTheme = () => {
    dispatch(ThemeColorAction());
  };
  const user = useSelector(userSelector);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const name: string =
      (event.currentTarget.elements.namedItem('username') as HTMLInputElement)
        ?.value ?? '';
    const email: string =
      (event.currentTarget.elements.namedItem('email') as HTMLInputElement)
        ?.value ?? '';
    const oldpassword: string =
      (
        event.currentTarget.elements.namedItem(
          'oldpassword'
        ) as HTMLInputElement
      )?.value ?? '';
    const newpassword: string =
      (
        event.currentTarget.elements.namedItem(
          'newpassword'
        ) as HTMLInputElement
      )?.value ?? '';
    const confirmpassword: string =
      (
        event.currentTarget.elements.namedItem(
          'confirmpassword'
        ) as HTMLInputElement
      )?.value ?? '';

    const changeNameResult = check(settingsValidationSchema, {
      name: name
    });
    const changeEmailResult = check(settingsValidationSchema, {
      email: email,
      oldpassword: oldpassword
    });
    const changePasswordResult = check(settingsValidationSchema, {
      oldpassword: oldpassword,
      newpassword: newpassword,
      confirmpassword: confirmpassword
    });

    if (changeNameResult === true) {
      setFormNameError([]);
      if (user?.username === name) {
        setNameError('Вы хотите поменять своё же имя');
      } else {
        dispatch(
          patchUserAsyncAction(name, () => setNameSuccess('Имя изменено!'))
        );
        setNameError('');
      }
    } else {
      setFormNameError(changeNameResult as ValidationError[]);
    }

    if (oldpassword === '') {
      return;
    } else if (changeEmailResult === true && oldpassword) {
      if (email === user?.email) {
        setEmailError('Вы хотите поменять свою же почту');
      } else {
        dispatch(
          patchEmailAsyncAction(oldpassword, email, () =>
            setEmailSuccess('Почта изменена!')
          )
        );
        setEmailError('');
      }
    } else {
      setFormEmailError(changeEmailResult as ValidationError[]);
    }

    if (newpassword === '') {
      return;
    } else if (changePasswordResult === true && newpassword) {
      if (oldpassword === newpassword) {
        setPasswordError('Вы хотите поменять свой же пароль');
      } else {
        dispatch(
          patchPasswordAsyncAction(newpassword, oldpassword, () =>
            setPasswordSuccess('Пароль изменен!')
          )
        );
        setPasswordError('');
      }
    } else {
      setFormPasswordError(changePasswordResult as ValidationError[]);
    }
  };
  useEffect(() => {
    for (const key in auth.errors) {
      switch (key) {
        case 'username': {
          const userNameError = auth.errors[key];
          if (userNameError) {
            setNameError('Пользователь с этим именем уже существует');
          } else {
            setNameError('');
          }

          break;
        }
        case 'new_email': {
          const userEmailError = auth.errors[key];
          if (userEmailError) {
            setEmailError('Пользователь с этой почтой уже существует');
          } else {
            setEmailError('');
          }

          break;
        }
        case 'current_password': {
          const userPasswordError = auth.errors[key];
          if (userPasswordError) {
            setPasswordError('Неправильный пароль');
          } else {
            setPasswordError('');
          }

          break;
        }
      }
    }
  }, [auth.errors, nameError, emailError, passwordError]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={
          hasTheme
            ? `${styles.settings_container} ${styles.light}`
            : `${styles.settings_container}`
        }
      >
        <div className={user ? '' : `${styles.disable}`}>
          <h2>Профиль</h2>
          <div className={styles.form_container}>
            <div className={styles.input_container}>
              <Input
                type={'text'}
                label={'Имя'}
                placeholder={'Имя'}
                name={'username'}
                defaultValue={user?.username}
              />
              {formNameError.map((error) => (
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
              <span className={styles.errors}>{nameError}</span>
              <span className={styles.success}>{nameSuccess}</span>
            </div>
            <div className={styles.input_container}>
              <Input
                type={'email'}
                label={'Email'}
                placeholder={'Почта'}
                name={'email'}
                defaultValue={user?.email}
              />
              {formEmailError.map((error) => (
                <span
                  key={error.field}
                  className={styles.errors}
                >
                  {error.message === `The 'email' field must not be empty.`
                    ? 'Поле почты не должны быть пустое'
                    : ''}
                </span>
              ))}
              <span className={styles.errors}>{emailError}</span>
              <span className={styles.success}>{emailSuccess}</span>
            </div>
          </div>
        </div>
        <div className={user ? '' : `${styles.disable}`}>
          <h2>Пароль</h2>
          <div className={styles.form_container}>
            <div className={styles.input_container}>
              <Input
                type={'password'}
                label={'Пароль'}
                placeholder={'Ваш пароль'}
                name={'oldpassword'}
              />
              <span className={styles.errors}>{passwordError}</span>
              {formEmailError.map((error) => (
                <span
                  key={error.field}
                  className={styles.errors}
                >
                  {error.message ===
                  `The 'oldpassword' field length must be greater than or equal to 8 characters long.`
                    ? 'Пароль должен быть от 8 символов'
                    : '' ||
                      error.message ===
                        `The 'oldpassword' field length must be less than or equal to 16 characters long.`
                    ? 'Пароль должен быть до 16 символов'
                    : ''}
                </span>
              ))}
              {formPasswordError.map((error) => (
                <span
                  key={error.field}
                  className={styles.errors}
                >
                  {error.message ===
                  `The 'oldpassword' field length must be greater than or equal to 8 characters long.`
                    ? 'Пароль должен быть от 8 символов'
                    : '' ||
                      error.message ===
                        `The 'oldpassword' field length must be less than or equal to 16 characters long.`
                    ? 'Пароль должен быть до 16 символов'
                    : ''}
                </span>
              ))}
              <span className={styles.success}>{passwordSuccess}</span>
            </div>
            <div
              className={`${styles.new_password_container} ${styles.input_container}`}
            >
              <Input
                type={'password'}
                label={'Новый пароль'}
                placeholder={'Новый пароль'}
                name={'newpassword'}
              />
              {formPasswordError.map((error) => (
                <span
                  key={error.field}
                  className={styles.errors}
                >
                  {error.field === 'newpassword'
                    ? 'Пароль должен быть от 8 символов'
                    : '' || error.field === 'newpassword'
                    ? 'Пароль должен быть до 16 символов'
                    : ''}
                </span>
              ))}
              <Input
                type={'password'}
                label={'Подтверждение пароля'}
                placeholder={'Подтверждение пароля'}
                name={'confirmpassword'}
              />
              {formPasswordError.map((error) => (
                <span
                  key={error.field}
                  className={styles.errors}
                >
                  {error.message ===
                  `The 'confirmpassword' field value must be equal to 'newpassword' field value.`
                    ? 'Пароли не совпадают'
                    : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
        <h2>Тема</h2>
        <div className={styles.theme_container}>
          <div className={styles.theme_description}>
            <p>Тёмная тема</p>
            <p>Используется тёмная тема</p>
          </div>
          <div className={styles.switch_container}>
            <input
              id="toggle"
              className={`${styles.theme_toggle} ${styles.theme_toggle_round}`}
              type="checkbox"
              checked={!hasTheme}
              onChange={toggleTheme}
            />
            <label htmlFor="toggle"></label>
          </div>
        </div>
        <div className={styles.settings_footer}>
          <button
            onClick={() => navigate('/')}
            className={styles.cancel_button}
          >
            Закрыть
          </button>
          <Submit value={'Сохранить'} />
        </div>
      </form>
    </>
  );
};

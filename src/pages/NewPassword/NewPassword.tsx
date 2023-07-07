import { type FormEventHandler, useState } from 'react';

import Validator, { type ValidationError } from 'fastest-validator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { LogoButton } from '~/shared/ui/buttons/LogoButton/LogoButton';
import { Input } from '~/shared/ui/Input/Input';
import { Submit } from '~/shared/ui/Submit/Submit';
import { resetPasswordAsyncAction } from '~/store/reducers/reset/actions';
import { changeThemeSelector } from '~/store/selectors/selectors';

import styles from './styles.module.scss';

const newPasswordValidationSchema = {
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

export const check = (schema: object, data: object) => {
  const validator = new Validator();
  const compiledValidator = validator.compile(schema);
  return compiledValidator(data);
};

interface FormData {
  new_password: {
    value: string;
  };
  confirm_password: { value: string };
}

export const NewPassword = () => {
  const [formError, setFormError] = useState<ValidationError[]>([]);
  const navigate = useNavigate();
  const [massage, setMessage] = useState('');
  const hasTheme = useSelector(changeThemeSelector);
  const { uid, token } = useParams();
  const dispatch = useDispatch();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = event.currentTarget as unknown as FormData;
    const result = check(newPasswordValidationSchema, {
      password: formData.new_password.value,
      confirmpassword: formData.confirm_password.value
    });
    if (result === true) {
      const newPassword: string = formData.new_password.value;
      if (uid && token) {
        setMessage('Ваш пароль изменён');
        setTimeout(() => {
          dispatch(
            resetPasswordAsyncAction(uid, token, newPassword, () =>
              navigate('/signin')
            )
          );
        }, 4000);
      }
    } else {
      setFormError(result as ValidationError[]);
    }
  };

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
        <h2>Новый пароль</h2>
        <span>{massage}</span>
        <Input
          type={'password'}
          placeholder={'Введите новый пароль'}
          name={'new_password'}
          label={'Новый пароль'}
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
          label={'Подтверждение нового пароля'}
          placeholder={'Подтвердите ваш новый пароль'}
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
        <Submit value={'Установить пароль'} />
      </form>
    </>
  );
};

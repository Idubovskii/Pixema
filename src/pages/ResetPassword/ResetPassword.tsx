import { type FormEventHandler, useState } from 'react';

import Validator, { type ValidationError } from 'fastest-validator';
import { useSelector } from 'react-redux';

import { Submit } from '~/shared/ui/Submit/Submit';

import styles from './styles.module.scss';
import { fetchResetPassword } from '../../api/userService';
import { LogoButton } from '../../shared/ui/buttons/LogoButton/LogoButton';
import { Input } from '../../shared/ui/Input/Input';
import { changeThemeSelector } from '../../store/selectors/selectors';

interface FormData {
  email: {
    value: string;
  };
}
const resetValidationSchema = {
  email: { type: 'email' }
};

export const check = (schema: object, data: object) => {
  const validator = new Validator();
  const compiledValidator = validator.compile(schema);
  return compiledValidator(data);
};

export const ResetPassword = () => {
  const [formError, setFormError] = useState<ValidationError[]>([]);
  const [email, setEmail] = useState('');
  const hasTheme = useSelector(changeThemeSelector);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = event.currentTarget as unknown as FormData;
    const result = check(resetValidationSchema, {
      email: formData.email.value
    });
    if (result === true) {
      setFormError([]);
      const email: string = formData.email.value;
      void fetchResetPassword(email);
      setEmail(
        `Письмо с ссылкой на восстановление пароля отправлено на вашу почту ${email}`
      );
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
        <h2>Сбросить пароль</h2>
        <span>{email}</span>
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
        <Submit value={'Сбросить'} />
      </form>
    </>
  );
};

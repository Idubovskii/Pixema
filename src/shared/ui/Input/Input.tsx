import { useSelector } from 'react-redux';

import { changeThemeSelector } from '~/store/selectors/selectors';

import styles from './styles.module.scss';

interface IInputProperties {
  type: string;
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  label,
  placeholder,
  name,
  defaultValue,
  value,
  onChange
}: IInputProperties) => {
  const hasTheme = useSelector(changeThemeSelector);

  return (
    <div
      className={
        hasTheme
          ? `${styles.input_container} ${styles.light}`
          : `${styles.input_container}`
      }
    >
      <span className={styles.label}>{label}</span>
      <input
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

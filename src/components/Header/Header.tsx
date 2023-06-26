import MediaQuery from 'react-responsive';
import { useLocation, useParams } from 'react-router-dom';

import { SearchBar } from './SearchBar/SearchBar';
import styles from './styles.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { BurgerButton } from '../buttons/BurgerButton/BurgerButton';
import { LogoButton } from '../buttons/LogoButton/LogoButton';
import { UserButton } from '../buttons/UserButton/UserButton';
import { ModalFilter } from '../ModalFilter/ModalFilter';

export const Header = () => {
  const location = useLocation();
  const { uid, token } = useParams();

  return (
    <>
      <header
        className={
          location.pathname === '/signin' ||
          location.pathname === '/signup' ||
          location.pathname === '/reset' ||
          location.pathname === '/newpassword' ||
          location.pathname === 'activate/:uid/:token' ||
          location.pathname === '/confirmation' ||
          location.pathname === '/success' ||
          location.pathname ===
            `/password/reset/confirm/${uid ?? ''}/${token ?? ''}`
            ? `${styles.disable}`
            : `${styles.header}`
        }
      >
        <div className={styles.left_container}>
          <MediaQuery minWidth={769}>
            <BurgerButton />
          </MediaQuery>
          <LogoButton />
        </div>
        <MediaQuery minWidth={769}>
          <SearchBar />
        </MediaQuery>
        <UserButton />
        <MediaQuery maxWidth={768}>
          <SearchBar />
        </MediaQuery>
      </header>
      <MediaQuery minWidth={769}>
        <BurgerMenu />
      </MediaQuery>
      <ModalFilter />
    </>
  );
};

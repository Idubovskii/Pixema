import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { BackgroundMovie } from '~/components/BackgroundMovie/BackgroundMovie';
import { BurgerMenu } from '~/components/BurgerMenu/BurgerMenu';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import {
  changeThemeSelector,
  toggleFilterSelector
} from '~/store/selectors/selectors';

interface RouteParameters {
  uid: string;
  token: string;
  [key: string]: string | undefined;
}

export const MainLayout = () => {
  const location = useLocation();
  const hasTheme = useSelector(changeThemeSelector);
  const { uid, token } = useParams<RouteParameters>();
  const canToggleFilter = useSelector(toggleFilterSelector);
  return (
    <>
      <div
        style={{ overflowY: canToggleFilter ? 'hidden' : 'auto' }}
        className={
          location.pathname === '/signin' ||
          location.pathname === '/signup' ||
          location.pathname === '/reset' ||
          location.pathname === '/newpassword' ||
          location.pathname === '/confirmation' ||
          location.pathname === '/success' ||
          location.pathname ===
            `/password/reset/confirm/${uid ?? ''}/${token ?? ''}`
            ? 'bg-app app'
            : 'app' && hasTheme
            ? 'light bg-app-light  app'
            : 'app'
        }
      >
        <Header />
        {location.pathname === '/' && <BackgroundMovie />}
        <main className="wrapper">
          <Outlet />
        </main>
        <Footer />
      </div>
      <MediaQuery maxWidth={768}>
        <BurgerMenu />
      </MediaQuery>
    </>
  );
};

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { Activation } from '../pages/Activation/Activation';
import { Confirmation } from '../pages/Confirmation/Confirmation';
import { Favorites } from '../pages/Favorites/Favorites';
import { Filter } from '../pages/Filter/Filter';
import { Main } from '../pages/Main/MainPage';
import { NewPassword } from '../pages/NewPassword/NewPassword';
import { NotFound } from '../pages/NotFound/NotFound';
import { ResetPassword } from '../pages/ResetPassword/ResetPassword';
import { Search } from '../pages/Search/Search';
import { SelectedMovie } from '../pages/SelectedMovie/SelectedMovie';
import { SelectedPerson } from '../pages/SelectedPerson/SelectedPerson';
import { Settings } from '../pages/Settings/Settings';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { Success } from '../pages/Success/Success';

const routerSchema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'confirmation',
        element: <Confirmation />
      },
      {
        path: 'activate/:uid/:token',
        element: <Activation />
      },
      {
        path: 'success',
        element: <Success />
      },
      {
        path: 'reset',
        element: <ResetPassword />
      },
      {
        path: 'password/reset/confirm/:uid/:token',
        element: <NewPassword />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'film/:id',
        element: <SelectedMovie />
      },
      {
        path: 'name/:id',
        element: <SelectedPerson />
      },
      {
        path: 'search/:name',
        element: <Search />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'filter',
        element: <Filter />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};

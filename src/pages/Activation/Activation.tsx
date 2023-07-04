import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { activateUserAsyncAction } from '../../store/reducers/register/actions';

export const Activation = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (uid && token) {
      dispatch(activateUserAsyncAction(uid, token, () => navigate('/success')));
    }
  }, [navigate, token, uid, dispatch]);

  return <div>Activating...</div>;
};

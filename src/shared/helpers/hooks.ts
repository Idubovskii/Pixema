import { useDispatch } from 'react-redux';

import { type GlobalDispatch } from '~/store/store';

export const useAppDispatch: () => GlobalDispatch = useDispatch;

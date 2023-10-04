import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '@/store/config';

/**
 * The pre-typed hook `useDispatch` from React-Redux, use instead of the standard hook.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * The pre-typed hook `useSelector` from React-Redux, use instead of the standard hook.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

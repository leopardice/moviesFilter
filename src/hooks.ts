import { useDispatch, useSelector } from 'react-redux';
import { IStore } from './interfaces';
import {
  closeLoginModal, logIn, logOut, openLoginModal,
} from '../redux/actions';

export default function useLoginModalStatus() {
  const loginModalStatus: boolean = useSelector((state: IStore) => state.isLoginModalOpen);

  const dispatch = useDispatch();

  function isModalOpen(action: boolean): void {
    switch (action) {
      case true:
        dispatch(openLoginModal());
        break;
      case false:
        dispatch(closeLoginModal());
        break;
      default:
        dispatch(closeLoginModal());
    }
  }
  return [loginModalStatus, isModalOpen] as const;
}

export function useAuthenticationStatus() {
  const authenticationStatus: boolean = useSelector((state: IStore) => state.isLoggedIn);

  const dispatch = useDispatch();

  function setAuthenticationStatus(action: boolean): void {
    switch (action) {
      case true:
        dispatch(logIn());
        break;
      case false:
        dispatch(logOut());
        break;
      default:
        dispatch(logOut());
    }
  }
  return [authenticationStatus, setAuthenticationStatus] as const;
}

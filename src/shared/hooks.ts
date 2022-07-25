import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { closeLogin, openLogin } from "./features/login-modal";
import { logIn, logOut } from "./features/authorization";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useLoginModalStatus() {
  const loginModalStatus = useAppSelector((state) => state.loginModal.open);

  const dispatch = useAppDispatch();

  function isModalOpen(action: boolean): void {
    switch (action) {
      case true:
        dispatch(openLogin());
        break;
      case false:
        dispatch(closeLogin());
        break;
      default:
    }
  }
  return [loginModalStatus, isModalOpen] as const;
}

export function useAuthenticationStatus() {
  const authenticationStatus = useAppSelector((state) => state.auth.loggedIn);

  const dispatch = useAppDispatch();

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

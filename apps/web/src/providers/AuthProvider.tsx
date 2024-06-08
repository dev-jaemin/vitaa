import { createContext, useState, useContext, useEffect } from 'react';

import { User } from '@repo/ui';
import { enqueueSnackbar } from 'notistack';

import { useGetUserInfo } from '../apis/auth/_hooks/me';
import { AUTH_WHITE_LIST } from '../constants/authWhiteList';
import { useFlow } from '../layouts/stackflow';

type ProviderContextType = {
  user: User | null;
  setUser?: (user: User | null) => void;
};

const ProviderContext = createContext<ProviderContextType>({ user: null });

export function useAuthUser() {
  const context = useContext(ProviderContext);

  if (context === undefined) {
    throw new Error('useAuthUser must be used within a AuthProvider');
  }

  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { push } = useFlow();
  const [user, setUser] = useState<User | null>(null);
  const { data: userData, isLoading } = useGetUserInfo();
  const pathname = window.location.pathname;

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }

    if (!AUTH_WHITE_LIST.includes(pathname) && !isLoading && !userData) {
      enqueueSnackbar('비타에 로그인 해 주세요!', { variant: 'warning' });
      push('AuthActivity', {});
    }
  }, [userData, isLoading, pathname]);

  return <ProviderContext.Provider value={{ user, setUser }}>{children}</ProviderContext.Provider>;
}

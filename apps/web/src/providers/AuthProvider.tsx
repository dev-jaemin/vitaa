import { createContext, useState, useContext } from 'react';

import { User } from '@repo/ui';

type ProviderContextType = {
  user: User | null;
  setUser?: (user: User) => void;
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
  const [user, setUser] = useState<User | null>(null);

  return <ProviderContext.Provider value={{ user, setUser }}>{children}</ProviderContext.Provider>;
}

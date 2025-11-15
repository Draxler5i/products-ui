import { useEffect, useState } from 'react';
import type { AuthResponse, User } from '../Types';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (authData: AuthResponse) => {
    setUser(authData.user);
    setToken(authData.token);
    sessionStorage.setItem('token', authData.token);
    sessionStorage.setItem('user', JSON.stringify(authData.user));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  };

  return { user, token, loading, login, logout, isAuthenticated: !!token };
};

export default useAuth;

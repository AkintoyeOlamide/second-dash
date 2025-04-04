import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  isVisitor?: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  loginAsVisitor: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      const userSession = {
        id: '1',
        username: 'user',
        name: 'User',
        email: email,
        isVisitor: false
      };
      setUser(userSession);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userSession));
    } catch (error) {
      throw error;
    }
  };

  const signup = async (email: string, password: string, username: string) => {
    try {
      // Simulate API call
      const userSession = {
        id: '1',
        username: username,
        name: username,
        email: email,
        isVisitor: false
      };
      setUser(userSession);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userSession));
    } catch (error) {
      throw error;
    }
  };

  const loginAsVisitor = () => {
    const visitorUser = {
      id: 'visitor',
      username: 'Visitor',
      name: 'Visitor',
      email: 'visitor@example.com',
      isVisitor: true
    };
    setUser(visitorUser);
    setIsAuthenticated(false);
    localStorage.setItem('user', JSON.stringify(visitorUser));
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    loginAsVisitor
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
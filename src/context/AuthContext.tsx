import React, { ReactNode, createContext, useContext, useState } from 'react';
import { client } from '../network/api';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (values: { email: string; password: string }) => Promise<void>;
    logout: () => void;
}

interface IValidationLogin {
    email: string,
    password: string,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (values: IValidationLogin) => {
        try {
            const userExist = (await client.get(`/users?email=${values.email}`)).data;
            const validatePassword = values.password === userExist[0].password;

            if (userExist.length < 1 || !validatePassword) {
                alert('Usuário ou senha inválido!')
                return
            }

            setIsAuthenticated(true);
        } catch (error) {
            console.log('Não foi possível realizar o login: ', error);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

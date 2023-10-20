import { create } from 'zustand';
import { persist } from "zustand/middleware";
import {
    fetchLogin,
    fetchRegister,
    fetchRefresh
} from '../services';


const userState = {
    id: "",
    name: "",
    email: "",
    photo: "",
    verified: false,
    password: "",
    role: "user"
}

export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            user: userState,
            loading: false,
            isAuth: false,
            errors: null,
            setToken: (token) =>
                set(() => ({
                    token,
                    isAuth: !!token,
            })),
            register: async (values) => {
                set(() => ({ loading: true }));

                try {
                    await fetchRegister(values);
                    set(() => ({ loading: false }));
                } catch (error) {
                    set(() => ({
                        errors: error.response.data.status,
                        loading: false
                    }));
                }
            },
            login: async (values) => {
                set(() => ({ loading: true }));

                try {
                    const response = await fetchLogin(values);

                    set(() => ({
                        token: response.data.data,
                        isAuth: true,
                        loading: false
                    }));
                } catch (error) {
                    set(() => ({
                        errors: error.response.data.status,
                        loading: false
                    }));
                }
            },        
            refresh: async () => {
                try {
                    const response = await fetchRefresh();
                    set(() => ({
                        user: response.data.data,
                    }));              
                } catch (error) {
                    if (error.response) {
                        set(() => ({
                            errors: error.response.data.status,
                        }));
                    }
                }

            },
            logout: () => set(() => ({
                token: null,
                user: null,
                isAuth: false
            })),
            cleanErrors: () => set(() => ({ errors: null })),
        }),

        {name: "auth",}
    )
);
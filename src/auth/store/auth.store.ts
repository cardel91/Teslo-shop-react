import { create } from 'zustand'
import { loginAction } from '../actions/login.action';
import type { User } from '@/interfaces/user.interface';
import { checkAuthAction } from '../actions/check-auth.action';
import { registerAction } from '../actions/register.action';
import { toast } from 'sonner';
import type { CustomAxiosError } from '@/interfaces/axios.interface';

// type Store = {
//     count: number
//     inc: () => void,
//     dec: () => void,
//     incBy: (value: number) => void
// };


// export const useCounterStore = create<Store>()((set) => ({
//     count: 100,
//     inc: () => set((state) => ({ count: state.count + 1 })),
//     dec: () => set((state) => ({ count: state.count - 1 })),
//     incBy: (value: number) => set((state) => ({ count: state.count + value }))
// }));

type AuthStatus = 'auth' | 'checking' | 'not-auth';


type AuthState = {
    // props
    user: User | null;
    token: string | null;
    authStatus: AuthStatus;

    // getters
    isAdmin: () => boolean;

    // actions
    register: (email: string, password: string, fullName: string) => Promise<boolean>;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void,
    checkAuthStatus: () => Promise<boolean>

};

export const useAuthStore = create<AuthState>()((set, get) => ({
    user: null,
    token: null,
    authStatus: 'checking',

    isAdmin: () => {
        const roles = get().user?.roles || [];
        return roles.includes('admin');
    },

    register: async (email: string, password: string, fullName: string) => {
        try {
            const data = await registerAction(email, password, fullName);
            localStorage.setItem('token', data.token);
            set({ user: data.user, token: data.token, authStatus: "auth" });
            return true;
        } catch (error) {
            const { response } = error as CustomAxiosError;
            [...(Array.isArray(response.data.message) ? response.data.message : [response.data.message])]
                .forEach((element) => toast.error(element));
            localStorage.removeItem('token');
            set({ user: null, token: null, authStatus: 'not-auth' });
            return false;
        }
    },

    login: async (email: string, password: string) => {
        // console.log({ email, password });
        try {
            const data = await loginAction(email, password);
            console.log({ data });
            localStorage.setItem('token', data.token);
            set({ user: data.user, token: data.token, authStatus: "auth" });
            return true;

        } catch (error) {
            const { response } = error as CustomAxiosError;
            [...(Array.isArray(response.data.message) ? response.data.message : [response.data.message])]
                .forEach((element) => toast.error(element));
            localStorage.removeItem('token');
            set({ user: null, token: null, authStatus: 'not-auth' });
            return false;

        }
    },
    logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null, authStatus: "not-auth" });

    },
    checkAuthStatus: async () => {
        try {
            const { user, token } = await checkAuthAction();
            set({
                user,
                token,
                authStatus: 'auth'
            });
            return true;

        } catch {
            set({
                user: undefined,
                token: undefined,
                authStatus: 'not-auth'
            });
            return false;
        }
    }


}));




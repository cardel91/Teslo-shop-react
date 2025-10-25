import { create } from 'zustand'
import { loginAction } from '../actions/login.action';
import type { User } from '@/interfaces/user.interface';

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

    // gets
    // isAdmin: boolean;

    // actions
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void

};

export const useAuthStore = create<AuthState>()((set) => ({
    user: null,
    token: null,
    authStatus: 'checking',

    login: async (email: string, password: string) => {
        console.log({ email, password });
        try {
            const data = await loginAction(email, password);
            console.log({ data });
            localStorage.setItem('token', data.token);
            set({ user: data.user, token: data.token });
            return true;

        } catch {
            localStorage.removeItem('token');
            set({ user: null, token: null });
            return false;

        }
    },
    logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null });

    }


}));




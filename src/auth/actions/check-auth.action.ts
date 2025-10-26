import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "@/interfaces/auth.response";

export const checkAuthAction = async () => {
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Token not found');

    try {
        const { data } = await tesloApi.get<AuthResponse>('/auth/check-status',
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // }
        );
        localStorage.setItem('token', data.token);
        return data;
    } catch {
        localStorage.removeItem('token');
        throw new Error('Token not valid');
    }
}
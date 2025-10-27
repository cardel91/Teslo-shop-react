import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "@/interfaces/auth.response";
import type { CustomAxiosError } from "@/interfaces/axios.interface";

export const loginAction = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email, password
        });
        return data;

    } catch (error) {
        throw error as CustomAxiosError;
    }
}
import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "@/interfaces/auth.response";
import type { CustomAxiosError } from "@/interfaces/axios.interface";

export const registerAction = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            email, password, fullName
        });

        console.log(data)

        return data;

    } catch (error) {
        console.log(error);
        throw error as CustomAxiosError;
    }
}
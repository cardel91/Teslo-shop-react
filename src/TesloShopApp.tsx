import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "sonner";
import { checkAuthAction } from "./auth/actions/check-auth.action";
import type { PropsWithChildren } from "react";
import { FullScreenLoading } from "./components/custom/FullScreenLoading";


const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const { isLoading } = useQuery({
        queryKey: ['auth'],
        queryFn: checkAuthAction,
        retry: false,
        refetchInterval: 1000 * 360 * 1.5,
        refetchOnWindowFocus: true
    });

    if (isLoading) return <FullScreenLoading />
    return children;
}

export const TesloShopApp = () => {



    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            {/* The rest of your application */}
            <CheckAuthProvider>
                <RouterProvider router={appRouter} />
            </CheckAuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

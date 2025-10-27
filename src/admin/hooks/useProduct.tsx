import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import { crudProductAction } from "../actions/crud-product.action";
import type { Product } from "@/interfaces/product.interface";

export const useProduct = (id: string) => {

    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
        enabled: !!id

    });

    // useMutation tanstack

    const mutation = useMutation({
        mutationFn: crudProductAction,
        onSuccess: (product: Product) => {
            console.log("Yey");
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['product', { id: product.id }] });

            queryClient.setQueryData(['products', { id: product.id }], product);

        }
    });


    // const handleSubmitForm = async (productLike: Partial<Product>) => {
    //     console.log({ productLike });
    // }

    return {
        ...query,
        mutation
    }
}
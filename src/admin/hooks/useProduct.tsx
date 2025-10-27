import { useMutation, useQuery } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import { crudProductAction } from "../actions/crud-product.action";

export const useProduct = (id: string) => {

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
        onSuccess: () => {
            console.log("Yey")
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
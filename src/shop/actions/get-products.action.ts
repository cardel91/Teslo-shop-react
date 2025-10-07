import { tesloApi } from "@/api/tesloApi"
import { baseURL } from "@/config";
import type { ProductsResponse } from "@/interfaces/products.response";

export const getProductsAction = async () => {
    const { data } = await tesloApi.get<ProductsResponse>('/products');

    const productsWithImage = data.products.map(p => ({
        ...p,
        images: p.images.map((i) => (`${baseURL}/files/product/${i}`)),
    }));

    // console.log(data)
    return { ...data, products: productsWithImage };
}
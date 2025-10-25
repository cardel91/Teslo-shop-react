import { tesloApi } from "@/api/tesloApi"
import { baseURL } from "@/config";
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string;
    gender?: string;
    minPrice?: number;
    maxPrice?: number;
    query?: string;

}

export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {
    const { limit, offset, sizes, gender, minPrice, maxPrice, query } = options;

    const { data, request } = await tesloApi.get<ProductsResponse>('/products', {
        params: {
            limit,
            offset,
            sizes,
            gender,
            minPrice,
            maxPrice,
            q: query
        }
    });

    console.log(data);
    console.log(request);

    const productsWithImage = data.products.map(p => ({
        ...p,
        images: p.images.map((i) => (`${baseURL}/files/product/${i}`)),
    }));

    // console.log(data)
    return { ...data, products: productsWithImage };
}
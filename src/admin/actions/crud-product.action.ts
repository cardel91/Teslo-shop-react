import { tesloApi } from "@/api/tesloApi";
import type { Product } from "@/interfaces/product.interface"
import { sleep } from "@/lib/sleep";

export const crudProductAction = async (partialProduct: Partial<Product>): Promise<Product> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, user, images = [], ...rest } = partialProduct;
    const isCreating = id === 'new';

    rest.stock = Number(rest.stock || 0);
    rest.price = Number(rest.price || 0);

    const { data } = await tesloApi<Product>({
        url: isCreating ? '/products' : `/products/${id}`,
        method: isCreating ? 'POST' : 'PATCH',
        data: rest
    });

    await sleep();

    return {
        ...data,
        images: data.images.map(image => {
            if (image.includes('http')) return image;
            return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
        })
    }


}
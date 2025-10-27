import { tesloApi } from "@/api/tesloApi";
import type { Product } from "@/interfaces/product.interface"
import { sleep } from "@/lib/sleep";

export const crudProductAction = async (partialProduct: Partial<Product> & { files?: File[] }): Promise<Product> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, user, images = [], files = [], ...rest } = partialProduct;
    const isCreating = id === 'new';

    rest.stock = Number(rest.stock || 0);
    rest.price = Number(rest.price || 0);

    console.log({ files });

    // prepare images
    if (files.length > 0) {
        const imgNames = await uploadFiles(files);
        images.push(...imgNames);
    }

    const imgsToSave = images.map(image => {
        if (image.includes('http')) return image.split('/').pop() || '';
        return image;
    })

    const { data } = await tesloApi<Product>({
        url: isCreating ? '/products' : `/products/${id}`,
        method: isCreating ? 'POST' : 'PATCH',
        data: { ...rest, images: images }
    });

    await sleep();

    return {
        ...data,
        images: imgsToSave
    };
};

export interface FileUploadResponse {
    secureUrl: string;
    fileName: string;
}

const uploadFiles = async (files: File[]) => {
    const uploadPromises = files.map(async file => {
        const formData = new FormData();
        formData.append('file', file);

        const { data } = await tesloApi<FileUploadResponse>({
            url: '/files/product',
            method: 'POST',
            data: formData
        });

        return data.fileName;

    });

    const uploadedFilenames = await Promise.all(uploadPromises);
    return uploadedFilenames;

}
// https://github.com/Klerith/bolt-product-editor

import { Navigate, useNavigate, useParams } from 'react-router';
import { useProduct } from '@/admin/hooks/useProduct';
import { FullScreenLoading } from '@/components/custom/FullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';



export const AdminProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading, isError, data: product, mutation } = useProduct(id || '');

    const title = id === 'new' ? 'New product' : 'Edit product';
    const subtitle =
        id === 'new'
            ? 'Here you can create a new product.'
            : 'Here you can edit the product.';

    const handleSubmit = async (partialProduct: Partial<Product>) => {
        await mutation.mutateAsync(partialProduct, {
            onSuccess: (data) => {
                toast.success('Product updated')
                navigate(`/admin/products/${data.id}`)
            },
            onError: (error) => {
                console.log(error);
                toast.error('Failed');
            }
        });
    }

    if (isError) {
        return <Navigate to='/admin/products' />
    }

    if (isLoading) {
        return <FullScreenLoading />
    }

    if (!product) return <Navigate to={'/admin/products'} />


    return <ProductForm title={title} subtitle={subtitle} product={product} onSubmit={handleSubmit} />
};

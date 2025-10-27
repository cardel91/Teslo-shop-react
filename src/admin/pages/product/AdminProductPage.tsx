// https://github.com/Klerith/bolt-product-editor

import { Navigate, useParams } from 'react-router';
import { useProduct } from '@/admin/hooks/useProduct';
import { FullScreenLoading } from '@/components/custom/FullScreenLoading';
import { ProductForm } from './ui/ProductForm';



export const AdminProductPage = () => {
    const { id } = useParams();
    const { isLoading, isError, data: product } = useProduct(id || '');
    console.log({ isLoading, product });

    const title = id === 'new' ? 'New product' : 'Edit product';
    const subtitle =
        id === 'new'
            ? 'Here you can create a new product.'
            : 'Here you can edit the product.';


    if (isError) {
        return <Navigate to='/admin/products' />
    }

    if (isLoading) {
        return <FullScreenLoading />
    }

    if (!product) return <Navigate to={'/admin/products'} />


    return <ProductForm title={title} subtitle={subtitle} product={product} />
};

import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomHeadSection } from "@/shop/components/CustomHeadSection"
import { ProductGrid } from "@/shop/components/ProductGrid"
import { useProducts } from "@/shop/hooks/useProducts"

export const HomePage = () => {
    const { data } = useProducts();
    return (
        <div>
            <CustomHeadSection title="Todos los productos" />
            <ProductGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 1} />
        </div>
    )
}

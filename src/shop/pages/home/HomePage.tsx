import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/data/products.data"
import { CustomHeadSection } from "@/shop/components/CustomHeadSection"
import { ProductGrid } from "@/shop/components/ProductGrid"

export const HomePage = () => {
    return (
        <div>
            <CustomHeadSection title="Todos los productos" />
            <ProductGrid products={products} />
            <CustomPagination totalPages={5} />
        </div>
    )
}

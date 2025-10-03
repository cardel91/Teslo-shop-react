import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/data/products.data"
import { CustomHeadSection } from "@/shop/components/CustomHeadSection"
import { ProductGrid } from "@/shop/components/ProductGrid"
import { useParams } from "react-router"

export const GenderPage = () => {

    const { gender } = useParams()
    const genderLabel = gender === 'men' ? 'Men' : gender === 'women' ? 'Women' : 'Kids';
    return (
        <>
            <CustomHeadSection title={genderLabel} />
            <ProductGrid products={products} />
            <CustomPagination totalPages={5} />
        </>
    )
}

import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomHeadSection } from "@/shop/components/CustomHeadSection"
import { ProductGrid } from "@/shop/components/ProductGrid"
import { useProducts } from "@/shop/hooks/useProducts"
import { useParams } from "react-router"

export const GenderPage = () => {

    const { gender } = useParams();
    const { data } = useProducts();
    const genderLabel = gender === 'men' ? 'Men' : gender === 'women' ? 'Women' : 'Kids';
    return (
        <>
            <CustomHeadSection title={genderLabel} />
            <ProductGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 1} />
        </>
    )
}

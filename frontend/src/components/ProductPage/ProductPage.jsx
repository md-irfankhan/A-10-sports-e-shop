import ProductCard from "../ProductCard/ProductCard";

const ProductPage = () => {
    return (
        <div className="mt-20 mb-20">
            <div className="flex justify-center mb-3.5">
                <h1 className="text-3xl font-bold">Products</h1>
            </div>
            <div className="max-w-[1250px] mx-auto place-items-center grid grid-cols-1 lg:grid-cols-3 gap-2.5">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>

            </div>
            
        </div>
    );
};

export default ProductPage;
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import Loading from "../../app/layout/Loading";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

// distucturing props into what we need for this component just to avoid using 'props.something'
export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // second parameter is an empty array to ensure this callback is executed only once. Otherwise, useEffect will be triggered every time component render.
    useEffect(() => {
        agent.Catalog.list()
            .then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []);

    if (loading) return (<Loading message="Loading products...." />)

    return (
        // <> equivalent of using <Fragment>
        <>
            <ProductList products={products} />
        </>
    )
}
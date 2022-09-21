import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

// distucturing props into what we need for this component just to avoid using 'props.something'
export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    // second parameter is an empty array to ensure this callback is executed only once. Otherwise, useEffect will be triggered every time component render.
    useEffect(() => {

        fetch('http://localhost:5091/api/Products')
            .then(response => response.json())
            .then(data => setProducts(data))

    }, []);

    return (
        // <> equivalent of using <Fragment>
        <>
            <ProductList products={products} />
        </>
    )
}
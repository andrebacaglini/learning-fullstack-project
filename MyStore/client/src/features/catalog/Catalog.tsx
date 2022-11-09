import { useEffect } from "react";
import Loading from "../../app/layout/Loading";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

// distucturing props into what we need for this component just to avoid using 'props.something'
export default function Catalog() {

    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoadedState, status } = useAppSelector(state => state.catalog)
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (!productsLoadedState) {
            dispatch(fetchProductsAsync());
        }

    }, [productsLoadedState, dispatch]);

    if (status.includes('pending')) return (<Loading message="Loading products...." />)

    return (
        // <> equivalent of using <Fragment>
        <>
            <ProductList products={products} />
        </>
    )
}
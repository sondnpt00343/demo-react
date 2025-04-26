import { Link } from "react-router-dom";

import config from "@/config";
import useCurrentUser from "@/hooks/useCurrentUser";
import {
    useGetAllProductsQuery,
    // useUpdateProductMutation,
} from "@/services/product";
// import { useEffect } from "react";

function Products() {
    const user = useCurrentUser();
    const { data, isLoading } = useGetAllProductsQuery();
    // const [updateProduct] = useUpdateProductMutation();

    // useEffect(() => {
    //     updateProduct({
    //         id: 1,
    //         name: "Name",
    //     });
    // }, [updateProduct]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const products = data.data.items;

    return (
        <div>
            <h1>Products page</h1>
            {user && <p>Hi, {user.firstName}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`${config.routes.products}/${product.slug}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;

// SPA - Single Page Application

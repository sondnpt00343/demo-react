import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import config from "@/config";
import * as productService from "@/services/productService";
import useCurrentUser from "@/hooks/useCurrentUser";

function Products() {
    const [products, setProducts] = useState([]);
    const user = useCurrentUser();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await productService.getAll();
            setProducts(response.data.items);
        };
        fetchProducts();
    }, []);

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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import config from "@/config";
import * as productService from "@/services/productService";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handle = async () => {
            const res = await productService.getAll();
            setProducts(res.data);
        };
        handle();
    }, []);

    return (
        <div>
            <h1>Products page</h1>
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

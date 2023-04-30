import { Link } from "react-router-dom";

// usually we'll fetch data from backend
const PRODUCTS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
];

function ProductsPage() {
    return (
        <>
            <h1>Products page</h1>
            <ul>
                {PRODUCTS.map(prod => (
                    <li key={prod.id}>
                        <Link to={prod.id}>{prod.title}</Link>
                    </li>    
                ))}
            </ul>
        </>
    )
};

export default ProductsPage
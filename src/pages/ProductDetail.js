import { useParams, Link } from 'react-router-dom'


function ProductDetail() {

   const parameterId = useParams();

   return <>
   
      <h1>Product Details</h1>
      <p>{parameterId.productId}</p>
      <p><Link to=".." relative='path'>Back</Link></p>

   </>

};

export default ProductDetail;
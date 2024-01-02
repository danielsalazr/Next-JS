import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {

    // Forma1
    // const router = useRouter();

    const { query:{ productId }} = useRouter();

  return (
    <div>
      {/* Forma 1
      Esta es la pagina del producto: {router.query.productId} */}

      {/* forma2 */}
      Esta es la pagina del producto: {productId} 
    </div>
  )
}

export default ProductItem

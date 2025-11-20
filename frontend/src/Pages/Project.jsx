import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useLocation } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/DescriptionBox/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

function Project() {
  const { all_product } = useContext(ShopContext);
  const location = useLocation();


  const urlParts = location.pathname.split('/');
  const productId = Number(urlParts[urlParts.length - 1]);

  const product = all_product.find((e) => e.id === productId);

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  );
}

export default Project;

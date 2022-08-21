// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Selling } from '../pages/selling/selling';
import { Product, selectCartItems } from './store/cart.slice';

export function App() {
  const product = {
    id: 1,
    brand: 'Tesla',
    name: 'Model S',
    description:
      "Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.",
    price: 4500,
    quantity: 6,
    discount: 98,
    images: [
      '../../assets/modelS-1.png',
      '../../assets/modelS-2.png',
      '../../assets/modelS-3.png',
      '../../assets/modelS-4.png',
    ],
  };

  const items = useSelector(selectCartItems);

  const getQuantity = useCallback(
    (product: Product) => {
      return items.length > 0
        ? items.filter((item) => item.product.id === product.id).length
        : 0;
    },
    [items]
  );

  return <Selling product={product} quantity={getQuantity(product)}></Selling>;
}

export default App;

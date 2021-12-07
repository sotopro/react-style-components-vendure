import {  GET_ALL_PRODUCTS} from '../../graphql/queries';
import  { useQuery } from '@apollo/client';
import { Products } from '../Products'
import { Container, Dot } from './style';
export const ProductList = () =>{
  const {data, error, loading} = useQuery(GET_ALL_PRODUCTS);
  console.log(data);
  if (error) return <p>{error}</p>;
  return (
    <div>
      {loading ? (
        <Container>
          <h3>Loading</h3>
          <Dot delay="0s" />
          <Dot delay="0.1s" />
          <Dot delay="0.2s" />
        </Container>
        
        
      ) : (
        <Products products={data.products}/>
      )}
    </div>
  );
}

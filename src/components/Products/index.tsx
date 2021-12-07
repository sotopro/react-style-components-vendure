import {FC, useState} from 'react';
import { Header } from '../Header';
import { useMutation, useQuery } from '@apollo/client';
import {GET_ACTIVE_ORDER, ADD_TO_CART } from '../../graphql/index';
import type { ProductsNode, Product } from '../../types/index'
import { Container, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from './style';
import { useStateWithStorage } from '../../hooks/useStateWithStorage';

interface Props {
    className?: string
    products: ProductsNode
}

export const Products: FC<Props> = ({products}) => {
    const [allItems, setAllItems] = useState([]);
    const [order, setOrder] = useStateWithStorage("ORDER", "");
  const { items } = products;
  const { loading, error, data } = useQuery(GET_ACTIVE_ORDER);
  let list: Product[] | any = [];
    const [addItemToOrder] = useMutation(ADD_TO_CART, {
        update: (cache, mutationResult) => {
          console.log({cache, mutationResult});
          const { activeOrder } = cache.readQuery<any>({
            query: GET_ACTIVE_ORDER,
          });
    
          cache.writeQuery({
            query: GET_ACTIVE_ORDER,
            data: {
              activeOrder: mutationResult.data.addItemToOrder,
            },
          });
        },
        onCompleted: () => {
          list.push(data);
          setAllItems(list);
        },
      });
    const addProduts = async (id : number) => {
        const result = await addItemToOrder({
          variables: {
            productVariantId: Number(id),
            quantity: 1,
          },
        });
        setOrder(result.data.addItemToOrder);
      };
    if(products === null) {
        return <div>No products found</div>
    }
    return (
      <>
      <Header data={order}/>
      <Container>
        {items.map((item : Product) => {
          const imgUrl = item.assets[0].source;

          return (
            <div className='card-item' key={item.slug}>
                <CardActionArea>
                  <CardMedia
                    src={imgUrl}
                    alt={item.slug}
                  />
                  <CardContent>
                    <Typography variant='header'>
                      {item.name}
                    </Typography>
                    <Typography variant='content'>
                      {item.description}
                    </Typography>
                    <Typography variant='content'>
                      {`${item.variants[0].currencyCode} ${item.variants[0].price}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    type='button'
                    color='primary'
                    onClick={() => addProduts(item.variants[0].id)}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
            </div>
          );
        })}
      </Container>
      </>
    )
}
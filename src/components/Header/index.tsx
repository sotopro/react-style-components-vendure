import { HeaderNav } from './Header.style'
import { useStateWithStorage } from '../../hooks/useStateWithStorage';

export const Header = ( data : any)  => {
  const [order] = useStateWithStorage("ORDER", '');
  const {total, currencyCode} = data.data || order;
  
  return (
    <HeaderNav>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      {total && (
        <p> {`Total: ${currencyCode} ${total.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          })}`}</p>
      )}
    </HeaderNav>
  );
}

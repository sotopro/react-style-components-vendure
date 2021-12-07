import styled, {keyframes} from "styled-components"

export interface Props {
    readonly delay: string;
  }

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const Dot = styled.div`
  background-color: #212121;
  border-radius: 50%;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 0.2rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props: Props) => props.delay};
`

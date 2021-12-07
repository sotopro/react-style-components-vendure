import styled from "styled-components"

export interface Props {
    readonly variant: string;
  }

export const Container = styled.section`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 5em 0;
    flex-wrap: wrap;
    .card-item {
        width: 30%;
        height: 440px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const CardActionArea = styled.div`
`;
export const CardMedia = styled.img`
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    height: 160px;
`;
export const CardContent = styled.div``;
export const CardActions = styled.div``;

export const Typography = styled.p<Props>`
    font-size: ${(props) => props.variant === 'header' ? '20px' : '16px'};
    font-weight: ${(props) => props.variant === 'header' ? 'bold' : 'normal'};
    line-height: ${(props) => props.variant === 'header' ? '1em' : '1.5em'};
    color: ${(props) => props.variant === 'header' ? '#212121' : '#3F403F'};
`;

export const Button = styled.button`
    background: none;
    border: 1px solid #E6E8E6;
    padding: 10px;
    color: black;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background: #212121;
        color: #E6E8E6;
        border: 1px solid #212121;
    }
`;

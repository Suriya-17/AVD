import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  grid-column: span ${props => props.colSpan || 1};
  grid-row: span ${props => props.rowSpan || 1};
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);
  border-radius: inherit; 
  overflow: hidden;
  
    &:hover {
    transform: scale(1.03);
    filter: brightness(1);
  }
`;

const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.backgroundLight};
  font-weight: 600;
  font-size: 12px;
  border: none;
  border-radius: 999px;
  padding: 5px 12px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ), ${props => props.theme.colors.primary};
  }
`;

function ImageContainer(props) {
  return (
    <Card colSpan={props.colSpan} rowSpan={props.rowSpan}>
      <ImageBox src={props.image} height={props.height} width={props.width}>
        {props.buttonText && <Button>{props.buttonText}</Button>}
      </ImageBox>
    </Card>
  );
}

export default ImageContainer;
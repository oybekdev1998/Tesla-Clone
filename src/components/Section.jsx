import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <CartItem>
        <h1>{title}</h1>
        <p>{description}</p>
      </CartItem>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const CartItem = styled.div`
  padding-top: 100px;
  h1 {
    font-size: 40px;
    color: #171A20;
    padding: 0;
    margin: 0 auto;
  }
  p {
    font-size: 14px;
    padding: 6px 24px 16px
  }
`;
const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 26, 32, 0.85);
  padding: 4px 24px;
  margin: 5px;
  color: white;
  opacity: 0.85;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

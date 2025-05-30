import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <span className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 106px;
    height: 56px;
    display: block;
    margin: 30px auto;
    background-image: linear-gradient(#e1e1e1 50px, transparent 0), linear-gradient(#e1e1e1 50px, transparent 0), linear-gradient(#e1e1e1 50px, transparent 0), linear-gradient(#e1e1e1 50px, transparent 0), radial-gradient(circle 14px, #e1e1e1 100%, transparent 0);
    background-size: 48px 15px , 15px 35px, 15px 35px, 25px 15px, 28px 28px;
    background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
    background-repeat: no-repeat;
    position: relative;
    transform: rotate(-45deg);
    box-sizing: border-box;
  }

  .loader::after,
  .loader::before {
    content: '';
    position: absolute;
    width: 56px;
    height: 56px;
    border: 6px solid #e1e1e1;
    border-radius: 50%;
    left: -45px;
    top: -10px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#e1e1e1 64px, transparent 0), linear-gradient(#e1e1e1 66px, transparent 0), radial-gradient(circle 4px, #e1e1e1 100%, transparent 0);
    background-size: 40px 1px , 1px 40px, 8px 8px;
    background-position: center center;
    box-sizing: border-box;
    animation: bike 0.3s linear infinite;
  }

  .loader::before {
    left: 25px;
    top: 60px;
  }

  @keyframes bike {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Loader;

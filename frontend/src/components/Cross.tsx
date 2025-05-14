import React from 'react';
import styled from 'styled-components';


interface SmallButtonProps {
  onClick?: () => void; 
}


const SmallButton: React.FC<SmallButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    console.log('Cross button clicked!');
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledSmallWrapper>
      <div className="small-button" onClick={handleClick}> {/* Use the local handleClick */}
        <div className="small-button-box">
          <span className="small-button-elem">
            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
            </svg>
          </span>
          <span className="small-button-elem">
            <svg viewBox="0 0 46 40">
              <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
            </svg>
          </span>
        </div>
      </div>
    </StyledSmallWrapper>
  );
};
const StyledSmallWrapper = styled.div`
  .small-button {
    display: block;
    position: relative;
    width: 36px;
    height: 36px;
    margin: 0;
    overflow: hidden;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border: 0;
   
  }

  .small-button:before,
  .small-button:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 5px;
  }

  .small-button:before {
    border: 2px solid #f0eeef;
    transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
      transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
  }

  .small-button:after {
    border: 2px solid #96daf0;
    transform: scale(1.2);
    transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
  }

  .small-button:hover:before,
  .small-button:focus:before {
    opacity: 0;
    transform: scale(0.8);
  }

  .small-button:hover:after,
  .small-button:focus:after {
    opacity: 1;
    transform: scale(1);
  }

  .small-button-box {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
  }

  .small-button-elem {
    display: block;
    width: 14px;
    height: 14px;
    margin: 11px 11px 0 11px;
    transform: rotate(180deg);
    fill: #f0eeef;
  }

  .small-button:hover .small-button-box,
  .small-button:focus .small-button-box {
    transition: 0.4s;
    transform: translateX(-36px);
  }
`;

export default SmallButton;

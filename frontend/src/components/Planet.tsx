import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="solar-system">
        <div className="sun">
          <div className="corona" />
        </div>
        <div className="orbit mercury-orbit">
          <div className="planet mercury" />
        </div>
        <div className="orbit venus-orbit">
          <div className="planet venus" />
        </div>
        <div className="orbit earth-orbit">
          <div className="planet earth">
            <div className="moon" />
          </div>
          <div className="iss">
            <div className="iss-panels" />
          </div>
        </div>
        <div className="orbit mars-orbit">
          <div className="planet mars" />
        </div>
        <div className="stars">
          <div className="star star-1" />
          <div className="star star-2" />
          <div className="star star-3" />
          <div className="star star-4" />
          <div className="star star-5" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .solar-system {
    position: relative;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sun {
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: linear-gradient(to bottom right, #f59e0b, #ea580c, #dc2626);
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 60px rgba(255, 165, 0, 0.5);
    z-index: 4;
  }

  .sun::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 236, 153, 0.2),
      rgba(220, 38, 38, 0.2)
    );
    animation: spin 3s linear infinite;
  }

  .corona {
    position: absolute;
    inset: -1rem;
    border-radius: 50%;
    background: linear-gradient(
      to bottom right,
      rgba(245, 158, 11, 0.2),
      rgba(220, 38, 38, 0.2)
    );
    filter: blur(8px);
    animation: pulse 2s ease-in-out infinite;
  }

  /* Orbity */
  .orbit {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mercury-orbit {
    width: 8rem;
    height: 8rem;
  }

  .venus-orbit {
    width: 11rem;
    height: 11rem;
  }

  .earth-orbit {
    width: 14rem;
    height: 14rem;
    z-index: 2;
  }

  .mars-orbit {
    width: 18rem;
    height: 18rem;
  }

  /* Planety */
  .planet {
    position: absolute;
    border-radius: 50%;
    z-index: 3;
  }

  .mercury {
    width: 0.75rem;
    height: 0.75rem;
    background: linear-gradient(to bottom right, #d1d5db, #9ca3af);
    box-shadow: 0 0 15px rgba(156, 163, 175, 0.5);
    --orbit-width: 8rem;
    animation: orbit 4s linear infinite;
  }

  .venus {
    width: 1rem;
    height: 1rem;
    background: linear-gradient(to bottom right, #fef3c7, #fcd34d);
    box-shadow: 0 0 15px rgba(252, 211, 77, 0.5);
    --orbit-width: 11rem;
    animation: orbit 6s linear infinite;
  }

  .earth {
    width: 1.25rem;
    height: 1.25rem;
    background: linear-gradient(to bottom right, #60a5fa, #34d399);
    box-shadow: 0 0 15px rgba(96, 165, 250, 0.5);
    --orbit-width: 14rem;
    animation: orbit 8s linear infinite;
  }

  .moon {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #d1d5db;
    box-shadow: inset 0 0 4px rgba(156, 163, 175, 0.5);
    animation: orbit 2s linear infinite;
  }

  .mars {
    width: 1rem;
    height: 1rem;
    background: linear-gradient(to bottom right, #f87171, #dc2626);
    box-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
    --orbit-width: 18rem;
    animation: orbit 10s linear infinite;
  }

  /* ISS */
  .iss {
    position: absolute;
    width: 0.6rem;
    height: 0.3rem;
    background: #e5e7eb;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    z-index: 3;
    --iss-orbit: 7.5rem;
    animation: iss-orbit 5s linear infinite;
  }

  .iss-panels {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.2rem;
    height: 0.15rem;
    background: linear-gradient(to right, #60a5fa, #93c5fd);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(96, 165, 250, 0.5);
  }

  .iss::after {
    content: "";
    position: absolute;
    inset: -1px;
    background: white;
    border-radius: 2px;
    opacity: 0;
    animation: iss-flare 1.5s linear infinite;
  }

  /* Gwiazdy */
  .stars {
    position: absolute;
    inset: -2.5rem;
    z-index: 1;
  }

  .star {
    position: absolute;
    width: 0.25rem;
    height: 0.25rem;
    background: white;
    border-radius: 50%;
  }

  .star-1 {
    top: 25%;
    left: 25%;
    animation: ping 2s ease-in-out infinite;
  }
  .star-2 {
    top: 75%;
    left: 33%;
    animation: ping 3s ease-in-out infinite 0.5s;
  }
  .star-3 {
    top: 33%;
    right: 25%;
    animation: ping 2.5s ease-in-out infinite 0.7s;
  }
  .star-4 {
    bottom: 25%;
    right: 33%;
    animation: ping 2.7s ease-in-out infinite 0.3s;
  }
  .star-5 {
    top: 50%;
    right: 50%;
    animation: ping 2.3s ease-in-out infinite 0.8s;
  }

  /* Animacje */
  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(calc(var(--orbit-width) / 2))
        rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(calc(var(--orbit-width) / 2))
        rotate(-360deg);
    }
  }

  @keyframes iss-orbit {
    from {
      transform: rotate(0deg) translateX(var(--iss-orbit)) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(var(--iss-orbit)) rotate(-360deg);
    }
  }

  @keyframes iss-tilt {
    0%,
    100% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(15deg);
    }
  }

  @keyframes iss-flare {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.8;
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }`;

export default Loader;

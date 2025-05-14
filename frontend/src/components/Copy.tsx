import React, { useRef, useState } from "react";
import styled from "styled-components";

const Button = () => {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const handleCopy = () => {
    const text = textRef.current.textContent;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Container>
      <Text ref={textRef}>npmkritiman</Text>
      <CopyButton onClick={handleCopy}>
        <Tooltip>{copied ? "Copied!" : "Copy to clipboard"}</Tooltip>
        {!copied ? (
          <ClipboardIcon />
        ) : (
          <CheckmarkIcon />
        )}
      </CopyButton>
    </Container>
  );
};

export default Button;

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.span`
  font-size: 18px;
  font-family: monospace;
  color: #ccc;
`;

const CopyButton = styled.button`
  position: relative;
  background-color: #353434;
  border: none;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #464646;
    color: #8bb9fe;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: -32px;
  background: #f4f3f3;
  color: #333;
  font-size: 12px;
  font-family: monospace;
  padding: 6px 8px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s ease;
  ${CopyButton}:hover & {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background: #f4f3f3;
    z-index: -1;
  }
`;

const ClipboardIcon = () => (
  <svg
    viewBox="0 0 6.35 6.35"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: "currentColor" }}
  >
    <path d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    height={18}
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: "currentColor" }}
  >
    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
  </svg>
);

import styled from 'styled-components';

export const WindowContainer = styled.div`
  background: transparent;
  color: #d5d5d5;
  height: ${(props) => props.height};
  margin: 0.75rem 0;
  overflow-y: scroll;
  padding: 0 0.7rem;
  padding-top: 0;
  width: ${(props) => props.width};

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: #222;
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 0.5rem;
  }
`;

export const Window = styled.div`
  * {
    font-size: 90%;
    line-height: 1.3rem;
  }
`;

export const Border = styled.div`
  background-color: #333;
  height: 0.01rem;
  width: 100%;
`;

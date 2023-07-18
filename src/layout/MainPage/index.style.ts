import { styled } from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export const StyleGameBox = styled.div`
  width: 768px;
  height: 500px;
  border-radius: 15px;
  background-color: #225b38;
  box-shadow: 1px 1px 3px 1px #dadce0;
`;

export const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 20%;
  position: relative;
`;

export const StyleMain = styled.main`
  width: 100%;
  height: 80%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

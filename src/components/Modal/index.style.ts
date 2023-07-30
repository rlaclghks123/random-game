import { styled } from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #000000a1;
`;

export const ModalBox = styled.section`
  display: flex;
  flex-direction: column;

  position: relative;

  height: 400px;
  width: 500px;

  background-color: white;
`;

export const StyleCloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  border: none;
  border-radius: 50%;
  padding: 10px;

  background-color: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const StyleHeader = styled.header`
  padding: 20px 0px;
  font-weight: 700;
  text-align: center;
`;

export const StyleMain = styled.main`
  height: inherit;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  overflow: auto;
`;

export const StyleUl = styled.ul`
  width: 100%;
  height: 100%;
  line-height: 20px;
`;

export const StyleLi = styled.li`
  margin: 40px 0px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.7;
`;

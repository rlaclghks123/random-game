import { styled } from 'styled-components';

export const StyleHeader = styled.div`
  padding: 15px;
`;

export const StyleTitle = styled.div`
  @media screen and (max-width: 320px) {
    a {
      font-size: 16px;
    }
  }

  a {
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', '맑은 고딕', helvetica,
      'Apple SD Gothic Neo', helvetica, '나눔바른고딕 옛한글', 'NanumBarunGothic YetHangul',
      sans-serif;
    color: white;
    text-align: center;

    &:hover {
      color: #cd8542;
    }
  }
`;

export const StyleMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
`;

export const StyleMoveBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 100%;

  font-size: 20px;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50px;

    color: white;
    background-color: #cd8542;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #cd8542;
    }
  }
`;

export const StyleModalBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  color: white;
  background-color: #cd8542;
  border-radius: 10px;
  cursor: pointer;

  margin: 10px 0px;

  &:hover {
    background-color: white;
    color: #cd8542;
  }
`;

export const StyleButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: inherit;
  background-color: inherit;
  color: inherit;
  font-size: inherit;
`;

import { styled } from 'styled-components';

export const StyleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      color: #a7642a;
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

export const StyleFormContainer = styled.div``;

export const StyleForm = styled.form`
  display: flex;
  justify-content: center;

  margin: 10px 0px;

  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;

  input {
    padding: 5px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #a7642a;
    cursor: pointer;

    &:focus {
      border: none;
      outline: none;
      background-color: white;
      color: #a7642a;
    }
  }
`;

export const StyleInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyleMessage = styled.label`
  font-size: 12px;
  font-weight: 800;

  color: white;
`;

export const StyleCountBox = styled.div`
  color: white;
  font-size: 50px;
`;

export const StyleImg = styled.img`
  background-color: inherit;
  border: none;
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

import { styled } from 'styled-components';

export const StyleForm = styled.form`
  position: relative;
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

export const StyleButton = styled.button`
  position: absolute;
  right: 5px;
  top: 59%;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  color: #225b38;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #225b38;
    color: white;
  }
`;

export const StyleMessage = styled.label`
  font-size: 12px;
  font-weight: 800;
  color: white;
`;

export const StyleImg = styled.img`
  background-color: inherit;
  border: none;
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

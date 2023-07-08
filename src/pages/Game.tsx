import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import MainPage from './MainPage.tsx';
import { fetchGifList } from '../utils/api.ts';
import { IImgList } from '../types/types.ts';

const StyleHeader = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;

  align-items: center;
  div {
    width: 33%;
  }
`;

const StyleBackBtnBox = styled.div`
  a {
    width: 10%;
    margin-left: 20px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    background-color: #cd8542;
    color: white;

    &:hover {
      color: #cd8542;
      background-color: white;
    }
  }
`;

const StyleTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;
  color: white;
  text-align: center;
`;

const StyleMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px -5px;
  }
`;

const StyleFormContainer = styled.div``;

const StyleForm = styled.form`
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
    background-color: #cd8542;
    cursor: pointer;

    &:focus {
      border: none;
      outline: none;
      background-color: white;
      color: #cd8542;
    }
  }
`;

const StyleMessage = styled.div`
  font-size: 12px;
  font-weight: 800;

  color: #cd8542;
`;

const StyleCountBox = styled.div`
  color: white;
  font-size: 50px;
`;

function Game() {
  const [list, setList] = useState([]);

  const [currentImg, setCurrentImg] = useState<IImgList | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^[1-9]$|^[1-4][0-9]$|^50$/;
    const inputElement = e.currentTarget.elements[0] as HTMLInputElement;

    if (!regex.test(inputElement.value)) {
      alert('1에서 50까지의 숫자만 입력해주세요.');
      setInputValue('');
      return;
    }

    updateImg();
    setCountdown(3);
    setIsCounting(true);
    setInputValue('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getRandomImg = (list: IImgList[]): IImgList | null => {
    if (list.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const updateImg = async () => {
    const result = await fetchGifList();
    setList(result.data);
  };

  useEffect(() => {
    if (isCounting) {
      if (countdown === 0) {
        setCurrentImg(getRandomImg(list));
        setIsCounting(false);
        return;
      }

      const timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCounting, countdown, list]);

  return (
    <MainPage>
      <StyleHeader>
        <StyleBackBtnBox>
          <Link to={'/'}>{'＜'}</Link>
        </StyleBackBtnBox>
        <StyleTitle>복불복 게임</StyleTitle>
      </StyleHeader>

      <StyleMain>
        {isCounting ? (
          <StyleCountBox>{countdown}</StyleCountBox>
        ) : (
          <>
            <StyleFormContainer>
              <StyleForm onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleOnChange} />
              </StyleForm>
              <StyleMessage>{'1부터 50까지의 숫자를 입력'}</StyleMessage>
            </StyleFormContainer>

            {currentImg && <img src={currentImg.images?.original?.url} alt={'GIF'} />}
          </>
        )}
      </StyleMain>
    </MainPage>
  );
}

export default Game;

import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { fetchImgList } from '../utils/api.ts';
import { IImgList } from '../types/types.ts';
import MainPage from './MainPage.tsx';
import { Link } from 'react-router-dom';

const StyleHeader = styled.div`
  padding: 15px;

  a {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    background-color: #cd8542;
    color: white;

    &:hover {
      color: #cd8542;
      background-color: white;
    }
  }
`;

const StyleHeaderContents = styled.div`
  position: relative;
`;

const StyleTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;
  color: white;
`;

const StyleForm = styled.form`
  display: flex;
  justify-content: center;

  margin: 10px 0px;

  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;

  select {
    border: none;
    color: white;
    border-radius: 5px;
    background-color: #cd8542;
  }

  input {
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    color: white;
    background-color: #cd8542;
    cursor: pointer;

    &:hover {
      color: #cd8542;
      background-color: white;
    }
  }
`;

const StyleMessage = styled.div`
  font-size: 12px;
  font-weight: 800;
  position: absolute;
  padding-left: 10%;
  color: #cd8542;
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

const StyleBtn = styled.button`
  top: 10px;
  padding: 8px;

  border: none;
  border-radius: 10px;

  background-color: #cd8542;
  color: white;

  font-weight: 900;
  font-family: Georgia, 'Times New Roman', serif;

  cursor: pointer;

  &:hover {
    color: #cd8542;
    background-color: white;
  }
`;

const StyleCountBox = styled.div`
  color: white;
  font-size: 50px;
`;

function Game() {
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState<IImgList[]>([]);

  const [currentImg, setCurrentImg] = useState<IImgList>();
  const [inputValue, setInputValue] = useState('');
  const [alarm, setAlarm] = useState('카테고리를 선택해주세요');

  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const selectRef = useRef<HTMLSelectElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(inputValue);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValue(e.target.value);
  };

  const getRandomImg = (list: IImgList[]) => {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
  };

  const handleClick = () => {
    setCountdown(3);
    setIsCounting(true);
  };

  const updateImg = async (keyword: string) => {
    const result = await fetchImgList(keyword);
    setList(result);
  };

  useEffect(() => {
    const handleFocus = () => {
      setAlarm('선택을 눌러주세요');
    };

    const handleBlur = () => {
      setAlarm('');
    };
    const current = selectRef.current;

    current?.addEventListener('focus', handleFocus);
    current?.addEventListener('blur', handleBlur);

    return () => {
      current?.removeEventListener('focus', handleFocus);
      current?.removeEventListener('blur', handleBlur);
    };
  }, []);

  useEffect(() => {
    if (keyword !== '') updateImg(keyword);
  }, [keyword]);

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
        <Link to={'/'}>{'＜'}</Link>
        <StyleHeaderContents>
          <StyleTitle>복불복 게임</StyleTitle>

          <StyleForm onSubmit={handleSubmit}>
            <select name="category" form="myForm" onChange={handleOnChange} ref={selectRef}>
              <option value="">선택해주세요</option>
              <option value="people">People</option>
              <option value="dogs">Dogs</option>
              <option value="birds">Birds</option>
              <option value="chairs">Chairs</option>
              <option value="number">Number</option>
            </select>
            <input type="submit" value="선택"></input>
          </StyleForm>
          <StyleMessage>{alarm}</StyleMessage>
        </StyleHeaderContents>
      </StyleHeader>

      {keyword !== '' && (
        <StyleMain>
          {isCounting ? (
            <StyleCountBox>{countdown}</StyleCountBox>
          ) : (
            <>
              <StyleBtn onClick={handleClick}>{`🔍 Find ${keyword}`}</StyleBtn>
              {currentImg && <img src={currentImg?.urls.thumb} alt={currentImg?.alt_description} />}
            </>
          )}
        </StyleMain>
      )}
    </MainPage>
  );
}

export default Game;

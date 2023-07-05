import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { fetchImgList } from './utils/api';

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const StyleGameBox = styled.div`
  width: 700px;
  height: 500px;
  background-color: #d4b995;
`;

const StyleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;

  position: relative;

  form {
    margin: 10px 0px;
  }
`;

const StyleBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5px;
  right: 5px;

  button {
    margin-bottom: 5px;
  }
`;

const StyleMessage = styled.div`
  font-size: 12px;
  color: #a17955;
  font-weight: 800;
`;

const StyleTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const StyleMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70%;

  border-top: 1px solid rgba(0, 0, 0, 0.2);

  div {
    width: 200px;
    height: 200px;
    text-align: center;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px -5px;
  }
`;

const StyleBtn = styled.button`
  border-color: transparent;
  border-radius: 10px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

interface IImgList {
  id: string;
  urls: {
    thumb: string;
  };

  alt_description: string;
}

function App() {
  const [keyword, setKeyword] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<IImgList[]>();
  const [currentImg, setCurrentImg] = useState<IImgList>();
  const [alarm, setAlarm] = useState(false);

  const selectRef = useRef<HTMLSelectElement | null>(null);

  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
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
    if (list) setCurrentImg(getRandomImg(list));
  };

  const updateImg = async (keyword: string) => {
    const result = await fetchImgList(keyword);
    setList(result);
  };

  useEffect(() => {
    const handleFocus = () => {
      setAlarm(true);
    };

    const handleBlur = () => {
      setAlarm(false);
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

  return (
    <StyleContainer>
      <StyleGameBox>
        <StyleHeader>
          <StyleTitle>복불복 게임</StyleTitle>
          <StyleBtnBox></StyleBtnBox>

          <form onSubmit={handleSub}>
            <select name="category" form="myForm" onChange={handleOnChange} ref={selectRef}>
              <option value="">선택해주세요</option>
              <option value="people">People</option>
              <option value="dogs">Dogs</option>
              <option value="birds">Birds</option>
              <option value="chairs">Chairs</option>
              <option value="number">Number</option>
            </select>
            <input type="submit" value="선택"></input>
          </form>
          {alarm && <StyleMessage>선택을 눌러주세요</StyleMessage>}
        </StyleHeader>
        <StyleMain>
          {keyword !== '' && <StyleBtn onClick={handleClick}>{`🔍 Find ${keyword}`}</StyleBtn>}
          {keyword !== '' && !currentImg && <div>Good Luck!</div>}
          {currentImg && <img src={currentImg?.urls.thumb} alt={currentImg?.alt_description} />}
        </StyleMain>
      </StyleGameBox>
    </StyleContainer>
  );
}

export default App;

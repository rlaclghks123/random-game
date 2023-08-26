import { useCallback, useState } from 'react';

import { ALERT_MESSAGE, INPUT_REQUEST_MESSAGE } from '../../utils/constants/game';
import { checkInput } from '../../utils/inputUtil';

import { IImgList } from '../../types/types';
import { StyleForm, StyleInputBox, StyleButton, StyleMessage, StyleImg } from './index.style';

interface Props {
  currentImg: IImgList;
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchImage = ({ currentImg, setIsCounting }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const inputElement = e.currentTarget.elements[0] as HTMLInputElement;

      if (!checkInput(inputElement.value)) {
        alert(ALERT_MESSAGE);
        setInputValue('');
        return;
      }

      setIsCounting(true);
      setInputValue('');
    },
    [setIsCounting]
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <StyleForm onSubmit={handleSubmit} role="form">
          <StyleInputBox>
            <StyleMessage htmlFor="input">{INPUT_REQUEST_MESSAGE}</StyleMessage>
            <input
              type="text"
              id="input"
              value={inputValue}
              onChange={handleOnChange}
              maxLength={2}
            />

            <StyleButton>입력</StyleButton>
          </StyleInputBox>
        </StyleForm>
      </div>
      {currentImg && <StyleImg src={currentImg.images?.original?.url} alt={currentImg.title} />}
    </>
  );
};

export default SearchImage;

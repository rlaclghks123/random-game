import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { HOME_LINK, RANDOM_GAME_TITLE } from '../constants/home';

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
      color: #a7642a;
    }
  }
`;

const Header = () => {
  return (
    <StyleHeader>
      <StyleTitle>
        <Link to={HOME_LINK}>{RANDOM_GAME_TITLE}</Link>
      </StyleTitle>
    </StyleHeader>
  );
};

export default Header;

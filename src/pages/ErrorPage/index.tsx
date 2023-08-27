import { styled } from 'styled-components';
import Header from '../../components/Header';
import MainPage from '../../layout/MainPage';

const MainContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Span = styled.p`
  margin: 20px 0px;
  color: white;
  font-size: 25px;
`;

const ErrorPage = () => {
  return (
    <MainPage>
      <Header />
      <MainContainer>
        <Span>잘못된 페이지 요청입니다.</Span>
        <Span>홈페이지로 이동해주세요</Span>
      </MainContainer>
    </MainPage>
  );
};

export default ErrorPage;

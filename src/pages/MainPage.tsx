import { Children, FC } from 'react';
import { styled } from 'styled-components';

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const StyleGameBox = styled.div`
  width: 768px;
  height: 500px;
  border-radius: 15px;
  background-color: #225b38;
  box-shadow: 1px 1px 3px 1px #dadce0;
`;

const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 20%;
  position: relative;
`;

const StyleMain = styled.main`
  width: 100%;
  height: 80%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

type MainPageProps = {
  children?: React.ReactNode;
};

const MainPage: FC<MainPageProps> = ({ children: childrenProp }) => {
  const [header, ...children] = Children.toArray(childrenProp);
  return (
    <StyleContainer>
      <StyleGameBox>
        <StyleHeader>{header}</StyleHeader>
        <StyleMain>{children}</StyleMain>
      </StyleGameBox>
    </StyleContainer>
  );
};

export default MainPage;

import { Children, FC } from 'react';
import { StyleContainer, StyleGameBox, StyleHeader, StyleMain } from './index.style';

interface MainPageProps {
  children?: React.ReactNode;
}

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

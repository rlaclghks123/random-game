import { Children} from 'react';
import { StyleContainer, StyleGameBox, StyleHeader, StyleMain } from './index.style';

interface MainPageProps {
  children?: React.ReactNode;
}

const MainPage = ({ children: childrenProp }:MainPageProps) => {
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

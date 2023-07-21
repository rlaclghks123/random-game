import { render, screen } from '@testing-library/react';
import Home from '../index';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Home 페이지 2가지의 버튼 클릭시 테스트', () => {
  test('Guide 클릭시 Guide 관련 Modal이 열리는지 Test', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    const modalComponentBeforeClick = screen.queryByText('복불복 게임 설명서');
    expect(modalComponentBeforeClick).not.toBeInTheDocument();

    const Guide = screen.getByText('Guide');
    await user.click(Guide);

    const modalComponentAfterClick = screen.getByText('복불복 게임 설명서');
    expect(modalComponentAfterClick).toBeInTheDocument();
  });

  test('FAQ 클릭시 FAQ 관련 Modal이 열리는지 Test', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    const faqComponentBeforeClick = screen.queryByText('복불복 게임 FAQ');
    expect(faqComponentBeforeClick).not.toBeInTheDocument();

    const FAQ = screen.getByText('FAQ');
    await user.click(FAQ);

    const faqComponentAfterClick = screen.getByText('복불복 게임 FAQ');
    expect(faqComponentAfterClick).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Game from '../index';

describe('Giphy API test', () => {
  test('Giphy API test when status code is 200', () => {
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );

    const inputMessage = screen.getByText('1부터 50까지의 숫자를 입력해주세요');
    expect(inputMessage).toBeInTheDocument();
  });
});

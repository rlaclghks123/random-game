import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Game from '../index';
import { ERROR_CODE } from '../../../components/Error/index';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

const resetHandler = (statusCode: number) => {
  return server.resetHandlers(
    rest.get(
      `https://api.giphy.com/v1/gifs/search?q=people&api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
      }&limit=50`,
      (req, res, ctx) => {
        return res(
          ctx.status(statusCode),
          ctx.json({
            data: [
              {
                images: {
                  original: {
                    url: 'https://media1.giphy.com/media/3oEjHY2dCdoXcTsHDi/giphy.gif?cid=486bfaafwjd7f2h44p8bdh0frhdkv623z7i1cjz65dd7lmrb&ep=v1_gifs_search&rid=giphy.gif&ct=g',
                  },
                },
              },
            ],
            status: statusCode,
          })
        );
      }
    )
  );
};

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

  test('Giphy API test when status code is 400', async () => {
    const STATUS_CODE = 400;
    resetHandler(STATUS_CODE);
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );

    const alertMessage = await screen.findByText('사진을 받아오는데 문제가 발생했습니다');
    expect(alertMessage).toBeInTheDocument();

    const inputElement = await screen.findByLabelText('Message');
    expect(inputElement).toHaveValue(ERROR_CODE[STATUS_CODE]);
  });

  test('Giphy API test when status code is 401', async () => {
    const STATUS_CODE = 401;
    resetHandler(STATUS_CODE);
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );

    const alertMessage = await screen.findByText('사진을 받아오는데 문제가 발생했습니다');
    expect(alertMessage).toBeInTheDocument();

    const inputElement = await screen.findByLabelText('Message');
    expect(inputElement).toHaveValue(ERROR_CODE[STATUS_CODE]);
  });

  test('Giphy API test when status code is 403', async () => {
    const STATUS_CODE = 403;
    resetHandler(STATUS_CODE);
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );

    const alertMessage = await screen.findByText('사진을 받아오는데 문제가 발생했습니다');
    expect(alertMessage).toBeInTheDocument();

    const inputElement = await screen.findByLabelText('Message');
    expect(inputElement).toHaveValue(ERROR_CODE[STATUS_CODE]);
  });

  test('Giphy API test when status code is 404', async () => {
    const STATUS_CODE = 404;
    resetHandler(STATUS_CODE);
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );

    const alertMessage = await screen.findByText('사진을 받아오는데 문제가 발생했습니다');
    expect(alertMessage).toBeInTheDocument();

    const inputElement = await screen.findByLabelText('Message');
    expect(inputElement).toHaveValue(ERROR_CODE[STATUS_CODE]);
  });

  test('Giphy API test when status code is 500', async () => {
    const STATUS_CODE = 500;
    resetHandler(STATUS_CODE);
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );

    const alertMessage = await screen.findByText('사진을 받아오는데 문제가 발생했습니다');
    expect(alertMessage).toBeInTheDocument();

    const inputElement = await screen.findByLabelText('Message');
    expect(inputElement).toHaveValue(ERROR_CODE[STATUS_CODE]);
  });

  test('Giphy API test when status code is 503', async () => {
    const STATUS_CODE = 503;
    resetHandler(STATUS_CODE);
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );

    const alertMessage = await screen.findByText('사진을 받아오는데 문제가 발생했습니다');
    expect(alertMessage).toBeInTheDocument();

    const inputElement = await screen.findByLabelText('Message');
    expect(inputElement).toHaveValue(ERROR_CODE[STATUS_CODE]);
  });
});

import { rest } from 'msw';

const STATUS_CODE = 200;

export const handlers = [
  rest.get(
    `https://api.giphy.com/v1/gifs/search?q=people&api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&limit=50`,
    (_, res, ctx) => {
      return res(
        ctx.status(STATUS_CODE),
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
          status: STATUS_CODE,
        })
      );
    }
  ),
];

import { data } from './data';
import { rest } from 'msw';

export const handlers = [
  rest.get('/test', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.post('/test', async (req, res, ctx) => {
    data.push(await req.json());
    return res(ctx.status(201));
  }),
];

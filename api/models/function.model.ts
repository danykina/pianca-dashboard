import { NowRequest, NowResponse } from '@vercel/node';

export type FunctionHandler = (
  request: NowRequest,
  response: NowResponse,
) => Promise<NowResponse>;

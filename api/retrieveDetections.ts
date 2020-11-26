import { NowRequest, NowResponse } from '@vercel/node';

import axios from 'axios';

const retrieveDetections = async (
  request: NowRequest,
  response: NowResponse,
): Promise<NowResponse> => {
  try {
    const res = await axios.get(
      'https://www.protezionecivile.fvg.it/it/api/drupal/stazione/99/detail/all',
    );
    return response.status(200).send(res.data);
  } catch (error) {
    return response.send(error);
  }
};

export default retrieveDetections;

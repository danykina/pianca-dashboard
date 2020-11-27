import { FunctionHandler } from './models/function.model';

import axios from 'axios';

const retrieveDetections: FunctionHandler = async (request, response) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      'https://www.protezionecivile.fvg.it/it/api/drupal/stazione/99/detail/all',
    );

    return response.status(200).send(data);
  } catch (error) {
    return response.status(500).send(error);
  }
};

export default retrieveDetections;

import { FunctionHandler } from './models/function.model';

import axios from 'axios';

const { CIVIL_PROTECTION_BASE_URL } = process.env;

const retrieveControlUnits: FunctionHandler = async (_, response) => {
  try {
    const { data } = await axios.get(
      `${CIVIL_PROTECTION_BASE_URL}/it/api/drupal/stazioni/list`,
    );

    return response.json(data);
  } catch (error) {
    return response.status(500).send(error);
  }
};

export default retrieveControlUnits;

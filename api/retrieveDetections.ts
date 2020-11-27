import { FunctionHandler } from './models/function.model';

import axios from 'axios';

const { CIVIL_PROTECTION_BASE_URL } = process.env;

const retrieveDetections: FunctionHandler = async (request, response) => {
  const { controlUnitId, sensorType = 'all' } = request.query;

  try {
    const {
      data: { data },
    } = await axios.get(
      `${CIVIL_PROTECTION_BASE_URL}/it/api/drupal/stazione/${controlUnitId}/detail/${sensorType}`,
    );

    return response.json(data);
  } catch (error) {
    return response.status(500).send(error);
  }
};

export default retrieveDetections;

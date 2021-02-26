import useQuery from '../core/useQuery/useQuery';

import endpoints from '../../config/endpoints';

import { UseDetectionsHook } from './useDetections.model';

const useDetections: UseDetectionsHook = ({ controlUnitId }, options) =>
  useQuery(
    endpoints.api.retrieveDetections,
    {
      params: {
        controlUnitId,
      },
    },
    options,
  );

export default useDetections;

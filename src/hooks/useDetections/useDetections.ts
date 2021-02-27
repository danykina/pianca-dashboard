import useQuery from '../core/useQuery/useQuery';

import endpoints from '../../config/endpoints';

import { UseDetectionsHook } from './useDetections.model';

const useDetections: UseDetectionsHook = ({ controlUnitId }, options) =>
  useQuery(
    `${endpoints.api.retrieveDetections}/${controlUnitId}`,
    undefined,
    options,
  );

export default useDetections;

import axios from 'axios';
import { useQuery } from 'react-query';
import endpoints from '../../config/endpoints';
import { UseDetectionsHook } from './useDetections.model';

const useDetections: UseDetectionsHook = ({ controlUnitId }) =>
  useQuery(['useDetections', controlUnitId], () =>
    axios.get(endpoints.api.retrieveDetections, {
      params: { controlUnitId },
    }),
  );

export default useDetections;

import React, { FunctionComponent } from 'react';

import { Skeleton } from '@material-ui/lab';

import { TableLoaderProps } from './TableLoader.model';

const TableLoader: FunctionComponent<TableLoaderProps> = ({
  rows = 5,
  columnsWidths = ['100%'],
}) => (
  <>
    {[...Array(rows)].map((_, rowIndex) => (
      <tr key={rowIndex}>
        {columnsWidths.map((width, cellIndex) => (
          <td key={cellIndex}>
            <Skeleton animation="wave" width={width} />
          </td>
        ))}
      </tr>
    ))}
  </>
);

export default TableLoader;

import React, { FunctionComponent } from 'react';

import { makeStyles } from '@material-ui/core';

import { getFormattedDate } from '../../../helpers/formatters';

import { DetectionsTableProps } from './DetectionsTable.model';

import TableLoader from '../../loaders/TableLoader/TableLoader';

const useStyles = makeStyles(() => ({
  table: {
    width: '100%',
    '& > *': {
      textAlign: 'center',
    },
  },
}));

const DetectionsTable: FunctionComponent<DetectionsTableProps> = ({
  value = [],
  loading,
}) => {
  const classes = useStyles();

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Sensore</th>
          <th>Valore</th>
          <th>Ultima rilevazione</th>
        </tr>
      </thead>

      <tbody>
        {loading ? (
          <TableLoader columnsWidths={['100%', '100%', '100%']} />
        ) : (
          value.map(({ id, tipo_sensore, valore, unita_misura, max_date }) => (
            <tr key={id}>
              <td>{tipo_sensore}</td>
              <td>
                {valore} {unita_misura}
              </td>
              <td>{getFormattedDate(max_date)}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DetectionsTable;

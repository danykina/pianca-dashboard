import React, { FunctionComponent } from 'react';

import { makeStyles } from '@material-ui/core';

import { DetectionsTableProps } from './DetectionsTable.model';

const useStyles = makeStyles(theme => ({
  table: {
    width: '100%',
    '& > *': {
      textAlign: 'center',
    },
  },
}));

const DetectionsTable: FunctionComponent<DetectionsTableProps> = ({
  value = [],
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
        {value.map(row => (
          <tr key={row.id}>
            <td>{row.tipo_sensore}</td>
            <td>
              {row.valore} {row.unita_misura}
            </td>
            <td>{row.max_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetectionsTable;

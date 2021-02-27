// https://www.protezionecivile.fvg.it/it/api/drupal/stazioni/list
export type ControlUnit = {
  readonly titolo: string;
  readonly drupal_stazione_id: string;
  readonly portale_stazione_id: string;
  readonly status: string;
  readonly latitude: string;
  readonly longitude: string;
};

// https://www.protezionecivile.fvg.it/it/api/drupal/stazione/99/detail/all
export type Detection = {
  readonly id: string;
  readonly titolo: string;
  readonly drupal_stazione_id: string;
  readonly portale_stazione_id: string;
  readonly valore: string;
  readonly max_date: string;
  readonly tipo_dato_id: string;
  readonly tipo_sensore: string;
  readonly unita_misura: string;
};

// https://www.protezionecivile.fvg.it/it/api/drupal/stazione/99/TEMPERATURE/1613692800
export type ChartDetection = {
  readonly data_title: string;
  readonly data_type_id: string;
  readonly date: string;
  readonly tipo_grafico: string;
  readonly unit_measurement: string;
  readonly value: string;
};

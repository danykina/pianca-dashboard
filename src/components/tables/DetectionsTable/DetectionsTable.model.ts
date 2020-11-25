export type DetectionRow = {
  readonly id: string;
  readonly portale_stazione_id: string;
  readonly drupal_stazione_id: string;
  readonly tipo_dato_id: string;
  readonly max_date: string;
  readonly valore: string;
  readonly tipo_sensore: string;
  readonly unita_misura: string;
  readonly titolo: string;
};

export type DetectionsTableProps = {
  readonly value?: readonly DetectionRow[];
};

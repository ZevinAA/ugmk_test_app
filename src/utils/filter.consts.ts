export enum EFilterValues {
  all = 'all',
  product1 = 'product1',
  product2 = 'product2',
  product3 = 'product3',
}

export interface IFilters {
  value: EFilterValues;
  label: string;
}

export const filters: IFilters[] = [
  {
    value: EFilterValues.all,
    label: 'Все',
  },
  {
    value: EFilterValues.product1,
    label: 'Продукт 1',
  },
  {
    value: EFilterValues.product2,
    label: 'Продукт 2',
  },
  {
    value: EFilterValues.product3,
    label: 'Продукт 3',
  },
];

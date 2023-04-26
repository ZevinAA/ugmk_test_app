import { IFilters } from '../../../utils';

export interface IFilterProps {
  onChange: (value: string) => void;
  defaultValue: string;
  options?: IFilters[];
}

export type TableColumn<T> = {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

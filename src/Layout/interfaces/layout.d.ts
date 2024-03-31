import { ChipOwnProps } from "@mui/material";

export interface Item {
  id: string;
  title: string;
  type: string;
  url: string;
  icon: ReactNode;
  breadcrumbs?: boolean;
  external?: boolean,
  target?: boolean;
  disabled?: boolean;
}

export interface ItemWithChildren extends Item {
  children: Item[];
  chip: ChipOwnProps;
}

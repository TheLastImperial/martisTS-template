import { ChipOwnProps } from "@mui/material";
import { ReactNode } from "react";

export interface MenuItem {
  id: string;
  title: string;
  type: string;
  url: string;
  icon?: string;
  breadcrumbs?: boolean;
  external?: boolean;
  target?: boolean;
  disabled?: boolean;
  chip?: ChipOwnProps;
}

export interface Menu {
  id: string;
  title: string;
  type: string;
  children?: MenuItem[];
}

export interface MinProps {
  children: ReactNode
};

export interface UIState {
  drawerWidth: number
  twitterColor: string
  facebookColor: string
  linkedInColor: string
  drawerOpen: boolean
  openItem: string[]
  config: ConfigState
  notifications: Notification[]
  menu: Menu[]
};

export interface ConfigState {
  defaultPath: string
  fontFamily: string
  i18n: string
  miniDrawer: boolean
  container: boolean
  mode: string
  presetColor: string
  themeDirection: string
};

export interface Notification {
  primaryTxt: string
  secondaryTxt: string
  caption: string
  icon?: ReactNode | string
  bgColor?: string
  color?:string
};

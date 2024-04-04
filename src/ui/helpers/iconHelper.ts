import {
  AntDesignOutlined, BarcodeOutlined, BgColorsOutlined, ChromeOutlined,
  DashboardOutlined, FontSizeOutlined, LoginOutlined, ProfileOutlined,
  QuestionOutlined
} from "@ant-design/icons";

const validIcons:typeof AntDesignOutlined[] = [
  AntDesignOutlined, BarcodeOutlined, BgColorsOutlined, ChromeOutlined,
  DashboardOutlined, FontSizeOutlined, LoginOutlined, ProfileOutlined,
  QuestionOutlined,
];

export const iconHelper = (iconName: string ):
  typeof AntDesignOutlined =>
{

  const [ icon, ] = validIcons.filter(ic => ic.displayName === iconName);

  if(icon)
    return icon;
  else
    return AntDesignOutlined;
};

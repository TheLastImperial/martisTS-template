import { Menu } from "../interfaces";

export const menu: Menu[] = [
  {
    id: 'group-patients',
    title: 'Pacientes',
    type: 'group',
    children: [
      {
        id: 'patients',
        title: 'Patients',
        type: 'item',
        url: '/patients',
        icon: "DashboardOutlined",
        breadcrumbs: false
      },
      {
        id: 'new-patients',
        title: 'New Patient',
        type: 'item',
        url: '/patients/new',
        icon: "DashboardOutlined",
        breadcrumbs: false
      },
      {
        id: 'edit-patients',
        title: 'Edit Patient',
        type: 'item',
        url: '/patients/edit',
        icon: "DashboardOutlined",
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: "DashboardOutlined",
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
      {
        id: 'login1',
        title: 'Login',
        type: 'item',
        url: '/login',
        icon: "LoginOutlined",
        target: true
      },
      {
        id: 'register1',
        title: 'Register',
        type: 'item',
        url: '/register',
        icon: "ProfileOutlined",
        target: true
      }
    ]
  },
  {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
      {
        id: 'util-typography',
        title: 'Typography',
        type: 'item',
        url: '/typography',
        icon: "FontSizeOutlined"
      },
      {
        id: 'util-color',
        title: 'Color',
        type: 'item',
        url: '/color',
        icon: "BgColorsOutlined"
      },
      {
        id: 'util-shadow',
        title: 'Shadow',
        type: 'item',
        url: '/shadow',
        icon: "BarcodeOutlined"
      },
      {
        id: 'ant-icons',
        title: 'Ant Icons',
        type: 'item',
        url: '/icons/ant',
        icon: "AntDesignOutlined",
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        icon: "ChromeOutlined"
      },
      {
        id: 'documentation',
        title: 'Documentation',
        type: 'item',
        url: 'https://codedthemes.gitbook.io/mantis/',
        icon: "QuestionOutlined",
        external: true,
        target: true
      }
    ]
  },
];

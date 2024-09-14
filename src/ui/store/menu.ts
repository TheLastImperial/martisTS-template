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
        type: 'collapse',
        url: '/patients',
        icon: "DashboardOutlined",
        breadcrumbs: false
      },
      {
        id: 'new-patients',
        title: 'New Patient',
        type: 'collapse',
        url: '/patients/new',
        icon: "DashboardOutlined",
        breadcrumbs: false
      },
    ]
  },
];

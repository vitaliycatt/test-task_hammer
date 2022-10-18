import { DashboardOutlined, DotChartOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const basicNavTree = [
  {
    key: "basic",
    path: `${APP_PREFIX_PATH}/basic`,
    title: "sidenav.basic",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "basic-home",
        path: `${APP_PREFIX_PATH}/basic/home`,
        title: "home",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "basic-catalog",
        path: `${APP_PREFIX_PATH}/basic/catalog`,
        title: "sidenav.basic.catalog",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "basic-clients",
        path: `${APP_PREFIX_PATH}/basic/clients`,
        title: "sidenav.basic.clients",
        icon: DotChartOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemsNavTree = [
  {
    key: "systems",
    path: `${APP_PREFIX_PATH}/systems`,
    title: "sidenav.systems",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "systems-logs",
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: "sidenav.systems.logs",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...basicNavTree, ...systemsNavTree];

export default navigationConfig;

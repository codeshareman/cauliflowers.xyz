import { RouteProps } from "react-router-dom";
import Pages from "./loadPage";

export type IRouteItem = {
  id: number;
  path: string;
  sort?: number;
  title?: string;
  name?: string;
  icon?: string;
  hideMenu?: boolean; //隐藏当前菜单
  hideSubMenu?: boolean; //隐藏下级菜单
  noAuth?: boolean; //不需要登录
  childRoute: IRouteItem[];
} & RouteProps;

const config: IRouteItem[] = [
  {
    id: 100,
    title: "首页",
    icon: "home",
    name: "home",
    path: "/",
    component: Pages.home,
    childRoute: []
  }
];

export default config;
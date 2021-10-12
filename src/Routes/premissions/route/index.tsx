import Cookie from 'universal-cookie';
import { intersection } from 'hooks/lodash';
export type permission = Array<string>;

export const isArrayWithLength = (arr: permission) => {
  return Array.isArray(arr) && arr.length;
};

export const getAllowedRoutes = (routes: Array<any>) => {
  const roles = new Cookie().get('Ro');
  return routes.filter(({ permission }: { permission: permission }) => {
    if (!permission || !roles) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
};

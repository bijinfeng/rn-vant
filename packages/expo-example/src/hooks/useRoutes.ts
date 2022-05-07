import { useContext, useMemo } from 'react';
import { GlobalContext } from '../GlobalContext';
import { routes, RouteItem } from '../navigation/routes';

export const useRoutes = (): RouteItem[] => {
  const { base } = useContext(GlobalContext);

  const routeList = useMemo<RouteItem[]>(() => {
    return routes.map(it => ({
      ...it,
      href: `${base}${it.href}`.replace(/\/+/, '/'),
    }));
  }, [base]);

  return routeList;
};

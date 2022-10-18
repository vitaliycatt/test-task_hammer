import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const Basic = () => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route
        path={`${APP_PREFIX_PATH}/basic/home`}
        component={lazy(() => import(`./home`))}
      />
      <Route
        path={`${APP_PREFIX_PATH}/basic/catalog`}
        component={lazy(() => import(`./catalog`))}
      />
      <Route
        path={`${APP_PREFIX_PATH}/basic/clients`}
        component={lazy(() => import(`./clients`))}
      />
      <Redirect
        from={`${APP_PREFIX_PATH}/basic`}
        to={`${APP_PREFIX_PATH}/basic`}
      />
    </Switch>
  </Suspense>
);

export default Basic;

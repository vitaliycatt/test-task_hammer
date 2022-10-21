import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const Basic = () => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route
        path={`${APP_PREFIX_PATH}/basic/dashboard`}
        component={lazy(() => import(`./dashboard`))}
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
        from={`${APP_PREFIX_PATH}/basic/dashboard`}
        to={`${APP_PREFIX_PATH}/basic/dashboard`}
      />
    </Switch>
  </Suspense>
);

export default Basic;

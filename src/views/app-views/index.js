import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/basic`}
          component={lazy(() => import(`./basic`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/systems`}
          component={lazy(() => import(`./systems`))}
        />
        <Redirect
          from={`${APP_PREFIX_PATH}`}
          to={`${APP_PREFIX_PATH}/basic/dashboard`}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);

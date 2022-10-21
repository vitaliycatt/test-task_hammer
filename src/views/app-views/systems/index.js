import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const Systems = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/systems`}
          component={lazy(() => import(`./logs`))}
        />
        <Redirect
          from={`${APP_PREFIX_PATH}/systems`}
          to={`${APP_PREFIX_PATH}/systems`}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(Systems);

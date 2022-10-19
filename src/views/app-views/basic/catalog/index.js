import { Redirect, Route, Switch } from "react-router-dom";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import Categories from "./categories";
import Products from "./products";

const Catalog = () => {
  return (
    <Switch>
      <Redirect
        exact
        from={`${APP_PREFIX_PATH}/basic/catalog`}
        to={`${APP_PREFIX_PATH}/basic/catalog/categories`}
      />
      <Route
        path={`${APP_PREFIX_PATH}/basic/catalog/categories`}
        component={Categories}
      />
      <Route
        path={`${APP_PREFIX_PATH}/basic/catalog/products`}
        component={Products}
      />
    </Switch>
  );
};

export default Catalog;

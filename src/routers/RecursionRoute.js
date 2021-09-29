// import { Suspense, memo, Fragment } from 'react';
import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const isObject = (target) => Object.prototype.toString.call(target).indexOf('Object') > -1;

const RouteRecursive = (props) => {
  const { layout, path, routes, component } = props;
  const WrappedComponent = component;
  let WrapperComponent;
  const isExact = !(routes && routes.length > 0);

  let LayoutComponent;
  if (isObject(layout)) {
    LayoutComponent = layout.component;
  }

  WrapperComponent = LayoutComponent || Fragment;

  if (routes && routes.length) {
    return (
      <WrapperComponent>
        <Switch>
          {routes.map((route, i) => {
            return <RouteRecursive key={i} {...route} />;
          })}
          <Redirect to="/404" />
        </Switch>
      </WrapperComponent>
    );
  }

  return (
    <Route
      path={path}
      exact={isExact}
      render={() => {
        document.title = props.meta.title;
        return (
          <WrapperComponent>
            <WrappedComponent />
          </WrapperComponent>
        );
      }}
    />
  );
};

const RecursionRoute = (props) => {
  const { routes } = props;

  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteRecursive key={i} {...route} />;
      })}
      <Redirect to="/404" />
    </Switch>
  );
};

export default RecursionRoute;

import React from 'react';
import { Link,Route } from 'react-router-dom';
export const ActiveItems = ({ label, to, activeOnlyWhenExact }) => (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
          <Link to={to} className={match ? "active" : ""}>{label}</Link>
      )
}/>);


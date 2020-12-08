/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { keyGenerator } from "@folo/utils";

import { store } from "@dflex/dnd/src";

const Core = (props) => {
  const {
    component: CoreComponent = "div",
    id: idProps,
    children,
    depth,
    ...rest
  } = props;

  const ref = React.createRef();

  const [id] = React.useState(
    idProps || `${keyGenerator(new Date().getTime())}`
  );

  React.useEffect(() => {
    setTimeout(
      // eslint-disable-next-line func-names
      function () {
        store.register({ id, element: ref.current, depth });
      },
      0
    );
  }, [id, depth, ref]);

  return (
    <CoreComponent ref={ref} key={id} id={id} {...rest}>
      {children}
    </CoreComponent>
  );
};

export default Core;
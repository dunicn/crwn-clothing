import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner =
  (WrappedComponent: any) =>
  ({ isLoading, ...otherProps }: { [x: string]: any; isLoading: boolean }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;

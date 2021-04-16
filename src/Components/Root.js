import React from 'react';
import { createUseStyles } from 'react-jss'

import Alert from './Alert';
import CartSuccess from './CartSuccess';

const useStyles = createUseStyles({
  wrapper: {
    padding: 20,
  }
});

function Root() {
  const classes = useStyles()
  return(
    <div className={classes.wrapper}>
      <Alert title="Items Not Added" type="success">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  )
}

export default Root;
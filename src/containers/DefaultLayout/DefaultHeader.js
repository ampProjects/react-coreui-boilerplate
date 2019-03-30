import React, { Component } from 'react';

import { AppSidebarToggler } from '@coreui/react'

class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
      </React.Fragment>
    )
  }
}

export default DefaultHeader;
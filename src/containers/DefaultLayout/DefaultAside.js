import React, { Component } from 'react';
import { Nav } from 'reactstrap'

class DefaultAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav tabs>
        </Nav>
      </React.Fragment>
    );
  }
}

export default DefaultAside;
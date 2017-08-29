require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class pCom extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice"><p>This is a passage.</p></div>
      </div>
    );
  }
}

pCom.defaultProps = {
};

export default pCom;

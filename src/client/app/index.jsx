import React from 'react';
import {render} from 'react-dom';
import TopBar from './topbar.jsx';
import InfoMain from './infomain.jsx';
import BottomBar from './bottombar.jsx';

class App extends React.Component {
  render() {
    return (
        <div>
          <TopBar />
          <InfoMain />
          <BottomBar />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
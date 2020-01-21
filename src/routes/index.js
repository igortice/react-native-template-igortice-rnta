import {Router, Scene, Stack} from 'react-native-router-flux';

import About from '../screens/About';
import Home from '../screens/Home';
import React from 'react';

const Routes = () => (
  <Router>
    <Stack key={'root'} hideNavBar>
      <Scene key={'home'} component={Home} title={'Home'} />
      <Scene key={'about'} component={About} title={'About'} />
    </Stack>
  </Router>
);

export default Routes;

import {Router, Scene, Stack} from 'react-native-router-flux';

import AxiosHooks from '~/screens/exemplos/AxiosHooks';
import EasyGrid from '~/screens/exemplos/EasyGrid';
import Lista from '~/screens/exemplos/Lista';
import React from 'react';
import TransitionConfig from './TransitionConfig';

const Routes = () => (
  <Router>
    <Stack key={'root'} hideNavBar transitionConfig={TransitionConfig}>
      <Scene key={'Lista'} component={Lista} title={'Lista'} />
      <Scene key={'EasyGrid'} component={EasyGrid} title={'Easy Grid'} />
      <Scene key={'AxiosHooks'} component={AxiosHooks} title={'Axios Hooks'} />
    </Stack>
  </Router>
);

export default Routes;

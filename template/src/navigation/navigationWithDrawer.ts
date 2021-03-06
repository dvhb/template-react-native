import { FunctionComponent } from 'react';
import { Dimensions } from 'react-native';
import {
  CreateNavigatorConfig,
  createSwitchNavigator,
  NavigationSwitchProp,
  NavigationSwitchRouterConfig,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { HomeContainer, DrawerContainer } from '../screens';

export const navigationWithDrawer = (
  config: CreateNavigatorConfig<{}, NavigationSwitchRouterConfig, {}, NavigationSwitchProp>,
) =>
  createSwitchNavigator(
    {
      Root: createDrawerNavigator(
        {
          App: createStackNavigator(
            {
              home: HomeContainer,
            },
            { headerMode: 'none' },
          ),
        },
        {
          contentComponent: DrawerContainer as FunctionComponent,
          overlayColor: 'rgba(0, 0, 0, 0.25)',
          drawerPosition: 'right',
          drawerWidth: Dimensions.get('screen').width * 0.8,
        },
      ),
    },
    config,
  );

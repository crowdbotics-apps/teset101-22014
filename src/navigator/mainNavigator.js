import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging6163481Navigator from '../features/Messaging6163481/navigator';
import NotificationList8163479Navigator from '../features/NotificationList8163479/navigator';
import Maps10163478Navigator from '../features/Maps10163478/navigator';
import Camera12163476Navigator from '../features/Camera12163476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging6163481: { screen: Messaging6163481Navigator },
NotificationList8163479: { screen: NotificationList8163479Navigator },
Maps10163478: { screen: Maps10163478Navigator },
Camera12163476: { screen: Camera12163476Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

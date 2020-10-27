import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings163500Navigator from '../features/Settings163500/navigator';
import SignUp12163485Navigator from '../features/SignUp12163485/navigator';
import SignIn13163484Navigator from '../features/SignIn13163484/navigator';
import Settings5163482Navigator from '../features/Settings5163482/navigator';
import Messaging6163481Navigator from '../features/Messaging6163481/navigator';
import NotificationList8163479Navigator from '../features/NotificationList8163479/navigator';
import Maps10163478Navigator from '../features/Maps10163478/navigator';
import Camera12163476Navigator from '../features/Camera12163476/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings163500: { screen: Settings163500Navigator },
SignUp12163485: { screen: SignUp12163485Navigator },
SignIn13163484: { screen: SignIn13163484Navigator },
Settings5163482: { screen: Settings5163482Navigator },
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

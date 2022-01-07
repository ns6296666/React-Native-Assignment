import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FormScreen from "../screens/FormScreen";
import DetailsScreen from "../screens/DetailsScreen";

const FormNavigator = createStackNavigator({
   FormScreen,
   DetailsScreen,
});

export default createAppContainer(FormNavigator);

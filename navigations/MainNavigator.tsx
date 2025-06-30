import { createDrawerNavigator } from "@react-navigation/drawer";
import LeerScreens from "../Screens/LeerScreens";
import EditarScreens from "../Screens/EditarScreens";
import EliminarScreens from "../Screens/EliminarScreens";
import GuardarScreens from "../Screens/GuardarScreens";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator()

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Guardar" component={GuardarScreens} />
            <Drawer.Screen name="Editar" component={EditarScreens} />
            <Drawer.Screen name="Leer" component={LeerScreens} />

            <Drawer.Screen name="Eliminar" component={EliminarScreens} />

        </Drawer.Navigator>
    )
}

export default function NavegadorPrincipal() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}
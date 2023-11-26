import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { nav } from "../App";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ContactButton from "../components/ContactButton";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

const map = [{nome: 'Geraldo', imagem : '', id: ''}]

const Tab = createMaterialTopTabNavigator(); 

export default function ContactsPage() {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({headerRight: () => (
            <Text></Text>
        )})
    },[])

    const Chat = () => {
        return (
            <ScrollView endFillColor={'orange'  }>
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />
                <ContactButton 
                id={1}
                navigation={'ssd'}
                username="Pedro"
                imagem = {require('../assets/images/icon-app.png')}
                />

            </ScrollView>
        )
    }
    interface CustomtabProps {
        state: any,
        descriptors : any,
        navigation: any
    }
    const CustomTab = ({state , descriptors, navigation} : CustomtabProps) => {
        const focusedColor = 'orange';
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
              {state.routes.map((route : any, index : any) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                  });
        
                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };
        
                const onLongPress = () => {
                  navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                  });
                };
        
                return (
                  <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{borderBottomWidth: isFocused ? 2 : 0 , borderColor: isFocused ? focusedColor : 'gray',flex: 1, height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}
                    key={index}
                  >
                    {options.tabBarIcon && (
                      <Ionicons
                        name={options.tabBarIcon}
                        size={20}
                        color={isFocused ? focusedColor : 'gray'}
                      />
                    )}
                    <Text style={{ marginLeft: 10 ,color: isFocused ? focusedColor : 'gray' }}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
    }

    return(
        
            <Tab.Navigator tabBar={(props) => <CustomTab  {...props} />}>
                <Tab.Screen 
                name="Chat" 
                component={Chat}
                options={{ tabBarIcon: 'chatbox' }}
                // options={{tabBarIcon(props) {
                //     return(
                //         <Ionicons size={24} name={'chatbox'}/>
                //     )
                // }}}
                />
                <Tab.Screen 
                name="Grupos"
                component={Chat}
                options={{ tabBarIcon: 'people' }}
                />
                <Tab.Screen 
                name="Status" 
                component={Chat} 
                options={{ tabBarIcon: 'cube'}}/>
            </Tab.Navigator>
         
    )
};

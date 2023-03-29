import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNav from './StackNav';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../color'
import {Center, Pressable} from 'native-base'
import ProfileScreen from '../Screens/ProfileScreen'
import CartScreen from '../Screens/CartScreen'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../Components/redux/actions/index';


const Tab = createBottomTabNavigator();
const CustomTab = ({children, onPress}) => (
    <Pressable 
    onPress={onPress} 
    h={70} 
    w={70} 
    rounded='full' 
    bg={Colors.main} 
    top={-30} 
    shadow={2}>
        {children}
    </Pressable>
    )
export class BottomNav extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render(){
  return (
            <Tab.Navigator backBehavior='Main' initialRouteName='Main' screenOptions={{
                tabBarShowLabel: false, 
                tabBarStyle:{...styles.tab},
                headerShown:false,
                tabBarHideOnKeyboard:true
            }}>
                <Tab.Screen 
                name="Cart" 
                component={CartScreen}  
                options={{
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <Entypo name="shopping-basket" size={24} color={Colors.main} />
                        ) : (
                            <Entypo name="shopping-basket" size={24} color={Colors.main} />
                        )}
                    </Center>
                )
                }}/>
                <Tab.Screen 
                
                name="Main" 
                component={StackNav} 
                options={{
                tabBarButton:(props)=> <CustomTab {...props} />,
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <MaterialCommunityIcons name="star" size={30} color={Colors.white}/>
                            
                        ) : (
                            <FontAwesome5 name="star" size={24} color={Colors.white} />
                        )}
                    </Center>
                )
                }}/>
                <Tab.Screen 
                name="ProfileScreen" 
                component={ProfileScreen} 
                options={{
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <FontAwesome name="user" size={24} color={Colors.main} />
                        ) : (
                            <AntDesign name="user" size={24} color={Colors.black}/>
                        )}
                    </Center>
                )
                }}/>
            </Tab.Navigator>
            )
        }
    }

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps,mapDispatchProps)(BottomNav)

const styles= StyleSheet.create({
    tab: {
        elevation:0, 
        backgroundColor:Colors.white,
        height:60,
        
    }
})

import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from '@react-native-material/core';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Entypo  from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About';

const MainHome = ({navigation}) =>{
    return(
        <View style={{flex:1,backgroundColor:"white"}}>
            <View>
                <ListItem leading={<MaterialCommunityIcons name="timetable" size={24} color="orange" />} title="TimeTables" trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black" />} onPress={()=>{navigation.navigate('TimeTables')}}/>
                <ListItem leading={<Entypo name="graduation-cap" size={24} color="green" />} title="Placement Details" trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black" />} onPress={()=>{navigation.navigate('placement')}}/>
                <ListItem title='Syllabus' leading={<AntDesign name="book" size={24} color="magenta" />} trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>} onPress={()=>{navigation.navigate('Syllabus')}}/>
                <ListItem title='Games & Sports' leading={<MaterialIcons name="sports-tennis" size={24} color="red" />} trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>} onPress={()=>{navigation.navigate('sports')}}/>
                <ListItem title='Hostels' leading={<MaterialIcons name="meeting-room" size={24} color="blue" />} trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>} onPress={()=>{navigation.navigate('hostel')}}/>
                <ListItem title='Health Center' leading={<FontAwesome name="plus" size={24} color="red" />} trailing={<MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>} onPress={()=>{navigation.navigate('health')}}/>
            </View>
        </View>
    );
};

const Home = ({navigation}) =>{
    const Tab = createBottomTabNavigator();
    const Auth = async () =>{
        const auth = await AsyncStorage.getItem('token');
            if(!auth){
                navigation.navigate('Login');
            }
        };
    useEffect(()=>{
        Auth();
    });
    return(
        <Tab.Navigator initialRouteName='MainHome' screenOptions={({route})=>({
            tabBarIcon:({focused,size,color})=>{
                let icon ;
                if(route.name==='Home'){
                    icon = focused ? 'home' : 'home-outline'
                }else if(route.name==='About'){
                    icon = focused ? 'school' : 'school-outline'
                }
                return <Ionicons name={icon} size={size} color={color}/>
            }
        })}>
            <Tab.Screen name="Home" component={MainHome} options={{headerShown:false}}/>
            <Tab.Screen name="About" component={About} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
};

export default Home;

import React, { useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import HSTLS from '../JSON/Hostels';

const Hostels = () =>{
    const [data,setData] = useState({
        head:['Particulars','Amount'],
        rows:[
            ['Hostel Establishment Charges(Room Rent)','Rs.200 Per Year'],
            ['Minimum Mess Bill Charges','Rs.60 Per Year'],
            ['Hostel Development Charges','Rs.120 Per Year'],
            ['Wear and Tear Charges','Rs.50 Per Year'],
            ['Non-Refundable Amount','Rs.840 Per Year'],
            ['Hostel Admission Form Charges','Rs .60 (each)'],
            ['Hostel Bonafide Certificate','Rs .50'],
        ]
    });
    return(
        <View style={Styles.container}>
            <ScrollView>
                {/* <Text style={[Styles.bold,{margin:10}]}>Hostel Management</Text> */}
                <Image source={require('../assets/Hostel2.jpg')} style={{width:"100%",height:300}}/>
                <Text style={{padding:5,color:"red",fontWeight:"800"}}>ONLINE ADMISSION ARE ONLY FOR BOYS 1ST YEAR PG REGULAR COURSES.</Text>
                <Text style={{padding:5,color:"red",fontWeight:"800"}}>FOR 1ST YEAR REGULAR AND SFC GIRLS STUDENTS THE HOSTEL ADMISSION METHOD IS OFFLINE.</Text>
                <Text style={{padding:5}}>The University maintains 10 hostels in Warangal town with a total intake of 800 students. Out of the 10 hostels,9 are on the University Campus, While one hostel for Law College is located at the University Arts & Science College,Subedari.</Text>
                <Image source={require('../assets/Hostel1.jpg')} style={{width:"100%",height:300}}/>
                <Text style={{padding:5}}>There is acute shortage of accommodating for girls as they are now being temporarily accommodated in University Staff Quarters.A separate hostel for Research Scholars is available .A separte working Women's Hostel is coming up with the financial assistance from Ministry of Human Resource Development.</Text>
                <Text style={{padding:5}}>A structure for Common Mess with the latest gadgets is developed with internal resources to house 800 students at a time.</Text> 
                <View>
                    <Text style={{fontWeight:'800',textAlign:'center',marginTop:10}}>University Hostels</Text>
                    {
                        HSTLS.map(item=>{
                            return(
                                <Text key={item.name} style={{padding:10}}>🔶 {item.name}</Text>
                            );
                        })
                    }
                </View>
                <View>
                    <Text style={{fontWeight:'800',textAlign:'center',marginTop:10}}>Rules & Regulations</Text>
                    <Text style={{color:"red",fontWeight:"600",textAlign:"left",padding:10}}>Section-I: General Rules</Text>
                    <Text style={{padding:10,textDecorationStyle:"solid",textDecorationColor:"black",textDecorationLine:"underline"}}>1. All the rights of admission to University Hostels will be reserved with the Director of Hostels and are implemented according to the University rules and policies.</Text>
                    <Text style={{padding:10,textDecorationStyle:"solid",textDecorationColor:"black",textDecorationLine:"underline"}}>2. Admission to the Hostel will be made fresh in every academic session.</Text>
                    <Text style={{padding:10,textDecorationStyle:"solid",textDecorationColor:"black",textDecorationLine:"underline"}}>3. Admission to the Hostel will be subject to the following rules:</Text>
                    <Text style={{padding:10}}>(a) Fresh Students</Text>
                    <Text style={{padding:10,textDecorationStyle:"solid",textDecorationColor:"black",textDecorationLine:"underline"}}>(i) Merit in the qualifying exam on which admission is sought. However, this doesn’t guarantee admission which is dependent on merit as well as availability of rooms.</Text>
                </View>
                <View>
                    <Table borderStyle={{borderWidth:1}}>
                        <Row data={data.head} textStyle={{margin:10}}/>
                        <Rows data={data.rows} textStyle={{margin:10}}/>
                    </Table>
                </View>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    bold:{
        fontWeight:'bold',
        textAlign:"center"
    }
});

export default Hostels;
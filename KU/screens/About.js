import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
const About = () =>{
    return(
        <View style={styles.container}> 
            <ScrollView>
                <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
                    <Image source={require('../assets/logo.jpg')} style={{width:330,height:80,marginTop:10}}/>
                    <Text style={{padding:10}}>
                        Kakatiya University was established on 19th August, 1976 to fulfil the aspirations of the Telangana people for higher education. It  is located in the historical city, Warangal, the  erstwhile seat of the Kakatiya rulers.  The founding of the University was in fact a historic event  that heralded a new era in the realms of higher education of this region. The erstwhile Post-Graduate Centre of Osmania University was upgraded and named Kakatiya University.  The University,   began its journey as PG Centre Warangal in 1968 under aegis of Osmania university with only four Departments, viz. Telugu, English, Chemistry and Mathematics.  The  Departments of Physics, Botany, Zoology, Commerce, Public Administration and Economics  were added later. The B. Pharmacy course which was started by Osmania University in 1974 was shifted to KU in 1975.</Text>
                    <View>
                        <View>
                            <Image source={require('../assets/thatikonda.jpg')} style={{width:300,height:300}}/>
                            <Text style={{fontWeight:'800',textAlign:'center',marginTop:10}}>Prof : Thatikonda Ramesh</Text>
                            <Text style={{textAlign:'center',marginTop:10}}>Vice-Chancellor</Text>
                        </View>
                        <View>
                            <Image source={require('../assets/srinivasa.jpeg')} style={{width:300,height:300}}/>
                            <Text style={{fontWeight:'800',textAlign:'center',marginTop:10}}>Prof : Srinivasa Rao</Text>
                            <Text style={{textAlign:'center',marginTop:10}}>Registar</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{marginTop:10,fontWeight:'800',fontSize:20,paddingLeft:10}}>A Little History</Text>
                        <Text style={{padding:10}}>
                        🔷 It also promotes individual and collective research by the faculty and the scholars. The students of the University have the distinction of becoming active part of the HR of the corporate world.
                        </Text>
                        <Text style={{padding:10}}>
                        🔷 The University is committed to meet the augmented demand in the expansion of specialized courses form time to time, and is striving hard to provide appreciable scholastic activities to the increased number of students.
                        </Text><Text style={{padding:10}}>
                        🔷 Since its establishment in 1976 several steps were taken for the overall development of the infrastructure facilities in order to cater to the requirements of both faculty, staff, students and research scholars. The vast area of 650 acres
                        </Text><Text style={{padding:10}}>
                        🔷 The faculties of all the departments, with 248 teaching staff and 622 non-teaching staff, are committed to and well versed in their respective subjects. They have excelled in imparting quality education and also represented their respective departments in many National and International Seminars and brought laurels to the University for their excellent research.
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'800'}}> Important Visitors of the university</Text>
                        <View style={{padding:20}}>
                            <Image source={{uri:'https://kakatiya.ac.in/images/mothertherisa.jpg'}} style={{width:300,height:200}}/>
                            <Text style={{padding:5}}>Mother Theresa during III Convocation</Text>
                            <Image source={{uri:'https://kakatiya.ac.in/images/krishnakanth.jpg'}} style={{width:300,height:200}}/>
                            <Text style={{padding:5}}>Sri Krishnakanth, Chancellor of KU during XI Convocation</Text><Image source={{uri:'https://kakatiya.ac.in/images/nageshwarrao.jpg'}} style={{width:300,height:200}}/>
                            <Text style={{padding:5}}>Padmashree ANR and V Srinivas at SJC of KU</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});
export default About;
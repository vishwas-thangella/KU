import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const Health = () =>{
    return(
        <View style={Styles.container}>
            <ScrollView>
                <Text style={{padding:10}}>The University has established its Health Centre in the year 1976 with meager infrastructural facilities and with a permanent Medical Officer at University Campus and another unit at University Arts & Science College, Subedari. The unit located at University Arts & Science College, Subedari caters to the needs of the students and the staff of University PG College and University College of Law, Subedari.</Text>
                <Text style={{padding:10}}>🔷 The Health Centre-I & II are providing facilities to the University Students, Research Scholars, Teaching Staff, Non-Gazetted Officers, Class-IV employees, Daily-wage employees and their familieis according to the standards fixed by the Medical and Health Department of Andhra Pradesh.</Text>
                <Text style={{padding:10,fontWeight:'800'}}>There are four Doctors:</Text>
                <Text style={{padding:5}}>1) Medical Officer is attending both University Centre-I & University Arts & Science College Health Centre -II.</Text>
                <Text style={{padding:5}}>2) Consulting Surgeon (Tuesday & Thursday).</Text>
                <Text style={{padding:5}}>3) Consulting Physician (Wednesday & Saturday).</Text>
                <Text style={{padding:5}}>4) Consulting Skin Specialist (Friday).</Text>
                <Text style={{padding:10}}>Paramedical Staff at University Health Centre-I: Laboratory Technician; Laboratory Assistant; Pharmacist; Dresser; Ambulance Driver; Kamati; Office Attendant; Male Casual and Female Casual Labour. Paramedical Staff at University Arts & Science College Health Centre-II: Pharmacist; M.N.O. and Kamati.</Text>
                <Text style={{padding:10}}>Paramedical Staff at University Health Centre-I: Laboratory Technician; Laboratory Assistant; Pharmacist; Dresser; Ambulance Driver; Kamati; Office Attendant; Male Casual and Female Casual Labour. Paramedical Staff at University Arts & Science College Health Centre-II: Pharmacist; M.N.O. and Kamati.</Text>
                <Text style={{padding:10}}>The number of patients coming to the Health Centre is 45,000 per annum. We are taking necessary steps to increase medical facilities to each and every one.</Text>
                <Text style={{padding:10,fontWeight:'800'}}>Incharge Details</Text>
                <View style={{display:'flex',justifyContent:'center',alignItems:"center"}}>
                    <Image source={require('../assets/healthINC.jpg')} style={{width:200,height:200}}/>
                </View>
                <Text style={{textAlign:'center',fontWeight:'800',color:"red",padding:5}}>Dr. Janapareddi Krishnaveni</Text>
                <Text style={{textAlign:'center',padding:5}}>Associate Professor</Text>
                <Text style={{padding:5,fontWeight:'800'}}>Contact : </Text>
                <Text style={{padding:5}}>Dr. Janapareddi Krishnaveni</Text>
                <Text style={{padding:5}}>Incharge</Text>
                <Text style={{padding:5}}>Department of Pharmacy</Text>
                <Text style={{padding:5}}>Kakatiya University, Warangal</Text>
                <Text style={{padding:5}}>Email: krishnavenij153@gmail.com</Text>
                <Text style={{padding:5}}>Mobile: 9291275494</Text>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default Health;
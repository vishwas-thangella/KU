import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react'
import Pdf from 'react-native-pdf';
import { Text, Dimensions, StyleSheet, View } from 'react-native';

const PDFRead = () =>{
    const [pdf,setpdf] = React.useState();
    const [load,setload] = React.useState(true);
    const FetchPDF = async () =>{
        setload(true);
        const link = JSON.parse(await AsyncStorage.getItem('link'));
        setpdf(link);
        setload(false);
    }
    React.useEffect(()=>{
        FetchPDF();
    },[]);
    return(
        <View style={styles.container}>
            {
                !load? <Pdf
                trustAllCerts={false}
                source={{uri:pdf,cache:true}}
                style={styles.pdf}
                /> : <Text>Failed to load </Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

export default PDFRead;
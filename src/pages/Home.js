import react from "react";

import  {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus filmes</Text>
            <Text style={styles.greetings}>Ola Pedro, boa noite.</Text>

            
            <TextInput style={styles.campo} placeholder="Nome do filme"></TextInput>

            <TouchableOpacity  style={styles.button} >
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#30478C',
        paddingVertical:70,
        paddingHorizontal:20
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        color: '#FFF',
        textAlign:'center'
        
    },
    subtitulo:{
        color:'#FFF',
        fontSize:15,
        textAlign:'center',
        paddingVertical: 10
    },
    campo:{
        backgroundColor:'#1F1E25',
        color:'#FFF',
        fontSize: 18,
        marginTop:30,
        borderRadius:7,
        padding:15,
        
    },
    greetings:{
        color:'#FFF',
        textAlign:'center'
    },

    button:{
        backgroundColor:'#A370F7',
        padding: 15,
        borderRadius:7,
        alignItems:"center",
        marginTop:20
    },
    buttonText:{
        color:'#FFF',
        fontSize:17,
        fontWeight: 'bold',
    },

});
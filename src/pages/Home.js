import react from "react";

import  {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    return(
        <View>
            <Text>Meus filmes</Text>
            <Text>Ola Pedro, boa noite.</Text>

            <TouchableOpacity>
                <Text>Adicionar</Text>
            </TouchableOpacity>

        </View>

    );
}

const style = StyleSheet.create({

});
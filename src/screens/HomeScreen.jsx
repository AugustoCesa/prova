import { View,Image } from "react-native";
import { Text } from "react-native-paper";
import {style} from "../utils/style";

export const HomeScreen = () => {

    return (
        <View style={style.caixa}>

            <Text style={style.textoprincipal}>Oi sou a tela inicial!</Text>
            <Text style={style.textoSecundario}>E este será um app para calcular o seu IMC,
                clique em formulário para começar</Text>

                <Image
               style={style.img} source={{
                    uri: "https://picsum.photos/300/300",
                
                }}
            />

               
              
        </View>
        
        )
}


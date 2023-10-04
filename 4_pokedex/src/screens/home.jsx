import { View, Text, Button } from "react-native"
import Search from "../components/search"

const Home = ({navigation}) => {

    return(
        <View style={ {flex: 1, alignItems: "center"} }>
            <Text>PokéDex</Text>

            <View style={ {flex: 1, alignItems: "center", justifyContent: "center"} }>
                <Search onSearch={(user) => navigation.navigate("Pokemon", {user})} />
            </View>

            <View style={ {flex: 1, alignItems: "center"} }>
                <Text>Would you get the whole list?</Text>
                <Button
                    title="Pokemon's List"
                    onPress={() => navigation.navigate("List")}
                />
            </View>
        </View>
    )
}

export default Home

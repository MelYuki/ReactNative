import { View, Text, Button } from "react-native"

const Homepage = ({navigation}) => {

    return (
        <View style={ {flex: 1, alignItems: "center", justifyContent: "center"} }>
            <Text>Home Screen</Text>
            <Button
                title="Go to Products"
                onPress={() => navigation.navigate("Products")}
            />
        </View>
    )
}

export default Homepage
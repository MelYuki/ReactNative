import { View, Text, Button } from "react-native"

const Products = ({navigation}) => {
    const productId = Math.floor(Math.random()*100)

    return (
        <View style={ {flex: 1, alignItems: "center", justifyContent: "center"} }>
            <Text>Products Screen</Text>
            <Button
                title="Products details"
                onPress={() => navigation.navigate("Details", {id: productId})}
            />
        </View>
    )
}

export default Products
import { View, Text } from "react-native"

const Details = ({route}) => {

    const { id } = route.params

    return (
        <View>
            <Text>Product id : {id}</Text>
        </View>
    )
}

export default Details
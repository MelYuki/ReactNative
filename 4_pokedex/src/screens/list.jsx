import { View, Text, FlatList } from "react-native"
import { useState, useEffect } from "react"
import axios from "axios"
// https://pokeapi.co/docs/v2
// https://pokeapi.co/api/v2/pokemon

const List = ({navigation}) => {

    const [ pokeData, setPokeData ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then((res) => {
                // console.log(res.data)
                // console.log(res.data.results)
                setPokeData(res.data.results)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // console.log(pokeData.name)
        // ==> undefined

    const Item = ({name}) => (
        <View>
            <Text onPress={() => navigation.navigate("Pokemon", {name})}>
                # {name}
            </Text>
        </View>
    )

    return(

        <View style={ {flex: 1, alignItems: "center"} }>
            <Text>The List</Text>

            {!loading ? (
                <View>
                    <Text>...Laoding...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                    data={pokeData}
                    renderItem={({item}) => <Item name={item.name} />}
                    keyExtractor={(item) => item.id }
                    />
                </View>
            )}
        </View>
    )
}

export default List

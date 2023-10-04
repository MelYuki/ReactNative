import axios from "axios"
import { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"

const Pokemon = ({ route }) => {

    const { user, name } = route.params
    const [ pokeData, setPokeData ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const info = user ? user : name

    // console.log(user)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${info}`)
            .then((res) => {
                setPokeData(res.data)
                // console.log(res.data)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    // console.log(pokeData.sprites.front_default)

    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            {!loading ? (
                <Text>...Loading...</Text>
            ) : (
                <>
                {/* <Text>User entry: {user}</Text>
                    <Text>Pokemon selected: {name}</Text> */}

                    <Text> Name: {pokeData.name} </Text>
                    <Text> ID: {pokeData.id} </Text>
                    <Image
                        style={ { width: 200, height: 200 } }
                        source={ { uri: pokeData.sprites.front_default } } />
                </>
            )}
        </View>
    )
}

export default Pokemon
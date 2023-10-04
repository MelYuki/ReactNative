import { View, Text, Button, TextInput } from "react-native"
import { useState } from 'react'

const Search = ({onSearch}) => {

    const [ searchValue, setSearchValue ] = useState('')

    const handleInputChange = (text) => {
        setSearchValue(text)
    }

    const handleSubmit = () => {
        onSearch(searchValue)
    }

    return(
        <View>
            <Text>Research a Pokemon...</Text>
            <TextInput placeholder="Enter a NAME" onChangeText={handleInputChange} />
            <Button
                title="Search"
                onPress={handleSubmit}
            />
        </View>
    )
}

export default Search

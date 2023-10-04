import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Home = () => {

    const [inputVal, setInputVal] = useState('');
    const [text, setText] = useState('');

    // En react native, les fonctions sont des fonctions classiques, val est la valeur de l'input qui change à fois que l'input change
    const handleChange = (val) => {
        setInputVal(val);
    }

    const handleSubmit = () => {
        setText(inputVal);
        // On reset la valeur de l'input, dans RN sous android nous avons cette contrainte
        // qui fait que la valeur de l'input ne se reset pas automat
        setTimeout(() => {
            setInputVal('')
        }, 0)
    }

    return(
        <>
            {/* View est un composant qui permet de créer un conteneur comme une DIV en html */}
            <View style={styles.container}>
                {/* Text est un composant qui permet d'afficher du texte */}
                <Text style={styles.title}>Home</Text>
                <View>
                    {/* TextInput est un composant qui permet de créer un input, 
                    l'attribut inputMode est là pour spécifier le type d'input
                    le onChangeText permet de récupérer la valeur de l'input à chaque fois qu'elle change
                    comme le onChange en react*/}
                    <TextInput 
                    placeholder='Entrez votre texte'
                    inputMode='text'
                    onChangeText={handleChange}
                    value={inputVal} />
                    <Button title='Valider' onPress={handleSubmit} />
                    <Text>{text}</Text>
                </View>
            </View>
        </>
    )
};

// Pour appliquer du style à composant, on utilise le composant StyleSheet avec sa méthode create
// On va lui passer un objet avec des propriétés CSS
// On va pouvoir ensuite utiliser la propriété style des composants pour leur appliquer le style défini

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a9a9a9',
    },
});

export default Home;
import {View, Text, StyleSheet, FlatList, SectionList} from 'react-native';

const List = () => {

    const datas = [
        {
          id: '1',
          title: 'Pomme',
        },
        {
          id: '2',
          title: 'Poire',
        },
        {
          id: '3',
          title: 'Abricot',
        },
        {
          id: '4',
          title: 'Pêche',
        },
      ];

      const datasSection = [
        {
          id: '1',
          title: 'Fruits',
          data: ['Pomme', 'Poire', 'Abricot', 'Pêche'],
        },
        {
          id: '2',
          title: 'Outils',
          data: ['Marteau', 'Tournevis', 'Scie', 'Clé à molette'],
        },
        {
          id: '3',
          title: 'Jeux de société',
          data: ['Dilemne du Roi', '7th Continent', 'Vilainous', 'Uno'],
        },
        {
          id: '4',
          title: 'Voitures',
          data: ['Vw', 'Sköda', 'Mercedes', 'Hyundai'],
        },
      ];

      const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
      )

      const KeyExtractor = (item) => item.id + item;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List</Text>
            <View>
                {/* FlatList est un composant qui permet d'afficher une liste de données */}
                <FlatList 
                // data c'est l'attribut qui récupére nos tableaux de données
                data={datas}
                // renderItem c'est la fonction qui va permettre de définir le rendu de chaque item de data
                renderItem={({item}) => <Item title={item.title} />} 
                // keyExtractor c'est la fonction qui va permettre de définir une clé unique pour chaque item de data
                keyExtractor={KeyExtractor}
                />
            </View>
            <View style={styles.sectionListContainer}>
                <SectionList
                // ContentContainerStyle permet de définir le style du conteneur de la SectionList
                // on va lui donner une hauteur fixe qui est nécessaire pour que la SectionList montre chaque élément correctement
                contentContainerStyle={styles.sectionListContent}
                // sections c'est l'attribut qui récupère nos tableaux de données
                sections={datasSection}
                renderItem={({item}) => <Item title={item} />}
                keyExtractor={KeyExtractor}
                // renderSectionHeader c'est la fonction qui va permettre de définir le rendu de chaque section de la SectionList
                // On lui passe un objet qui contient le titre (header / nom) de la section, on peut ensuite utiliser la propriété
                // title de l'objet dans la fonction pour afficher le titre de la section
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#a9a9a9',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    header: {
        fontSize: 32,
        color: 'chartreuse',
        textAlign: 'center',
    },
    sectionListContainer: {
        flex:1,
        height: 300,
    },
    sectionListContent: {
        paddingBottom: 20,
    },
});

export default List;
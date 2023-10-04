import { View, Text, StyleSheet, FlatList, SectionList } from "react-native"

const List = () => {

    const datas = [
        {
            id: 1,
            title: "Fruits"
        },
        {
            id: 2,
            title: "Outils"
        },
        {
            id: 3,
            title: "Jeux de société"
        },
        {
            id: 4,
            title: "Voitures"
        }
    ]

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
      ]

    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )

    const KeyExtractor = (item) => item.id + item

    return(
        <View style={styles.container}>
            <Text style={styles.header}>List</Text>
            <View>
                <FlatList
                data={datas}
                renderItem={({item}) => <Item title={item.title}/>}
                KeyExtractor={KeyExtractor}
                />
            </View>
            <View style={styles.sectionListContainer}>
                <SectionList
                contentContainerStyle={styles.sectionListContent}
                sections={datasSection}
                renderItem={({item}) => <Item title={item}/>}
                KeyExtractor={KeyExtractor}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#a9a9a9"
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        fontSize: 32,
        color: "red",
        textAlign: "center"
    },
    sectionListContainer: {
        flex: 1,
        height: 300
    },
    sectionListContent: {
        paddingBottom: 20
    }
})

export default List

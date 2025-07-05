import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
import { IconButton, MD3Colors } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductItemComponent = ({ id, name, image, description, lat, lng, price }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.view}>
                <Text style={styles.price}>{price}</Text>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.name}>{name}</Text>
                <Text>{description.slice(0, 50)}...</Text>
                <View style={styles.actions}>
                    <IconButton style={styles.plus} icon={"plus"} />
                    <IconButton style={styles.minus} icon={"minus"} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductItemComponent

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#F0F8FF",
        width: Dimensions.get("window").width / 2 + 100,
        height: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "auto",
        borderRadius: 10,
        margin: 10,

        ...Platform.select({
            ios: {
                shadowOffset: { width: 5, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                shadowRadius: 2,
            },
            android: { elevation: 10 },
        }),
    },

    view: {
        padding: 10,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        gap: 5


    },
    name: {
        fontWeight: "bold"
    },
    price: {
        marginLeft: "auto",
        padding: 10,
        fontWeight: "bold",
        fontFamily: "RobotoSlab"

    },
    image: {
        width: 200,
        height: 200,
        margin: "auto",
        borderRadius: 10,
    },
    actions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "auto",
        width: Dimensions.get("window").width / 2 + 20
    },
    minus: {
        backgroundColor: MD3Colors.error80
    },
    plus: {
        backgroundColor: "lightgreen"
    }
})

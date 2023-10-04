import { StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

export default function Plate({title, image, handlePress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {
                <Image source={{uri: image}} style={styles.image} />    
            }
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        gap: 10,
        width: 350,
        flexDirection: 'row',
        padding: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
    },
    image: { 
        width: '35%', 
        height: 100,
        borderRadius: 10,
    }
})
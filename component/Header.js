import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, ImageBackground } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export default function Header({title, navi}) {

    return (
        <View style = {styles.header}>
          <TouchableOpacity style = {styles.headericon} onPress={navi}>
              <FontAwesome style={{color: '#ce5c2b' }} name="chevron-left" size={18} />
          </TouchableOpacity>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.headertxt}>{title}</Text>
          </View>
      </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flex: .11,
        backgroundColor: '#242527',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingBottom:'4%',
        flexDirection:'row'
      },
      headericon: {
        paddingBottom:'2%',
        position:'absolute',
        left:'6%',
        bottom:'20%'
      },
      headertxt:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
      }
});

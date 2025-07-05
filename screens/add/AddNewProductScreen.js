import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Button, MD3Colors, TextInput } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native';
const getCameraPermissions = async () => {
  let permissions;
  permissions = await ImagePicker.requestCameraPermissionsAsync();
  if (permissions.granted) {
    return true;
  }
  else {
    if (permissions.canAskAgain) {
      permissions = await ImagePicker.requestCameraPermissionsAsync();
      if (permissions.granted) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const getMediaPermissions = async () => {
  let permissions;
  permissions = await ImagePicker.getMediaLibraryPermissionsAsync();
  if (permissions.granted) {
    return true;
  }
  else {
    if (permissions.canAskAgain) {
      permissions = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (permissions.granted) {
        return true;
      } else {
        return false;
      }
    }
  }
}



const AddNewProductScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    console.log({ name, description, price, category })
  }

  const imagePicker = async () => {
    const isCameraAuthorized = await getCameraPermissions();
    const isMediaAuthorized =await getMediaPermissions();
    if (isCameraAuthorized && isMediaAuthorized) {
      Alert.alert(
        "Select Image",
        "choose an Option",
        [
          {
          text:"Camera",
          onPress:async () =>{
            const result = await ImagePicker.launchCameraAsync({
              allowsEditing:true,
              aspect:[4,3],
              quality:1
            });
            if(!result.canceled){
              setImage(result.assets[0].uri)
            }
          }
        },{
          text:"Gallery",
          onPress:async () =>{
            const result = await ImagePicker.launchImageLibraryAsync({
              allowsEditing:true,
              aspect:[4,3],
              quality:1
            });
            if(!result.canceled){
              setImage(result.assets[0].uri)
            }
          },
        },{text:"Cancel",style:"cancel"}],{cancelable:true}
      )
    }
    else {
     Alert.alert("Permissions Required", "Please grant camera or gallery permissions.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>
      <TextInput style={styles.input} mode='outlined' label="Name" value={name} onChangeText={(text) => setName(text)} />
      <TextInput style={styles.input} mode='outlined' label="Description" multiline value={description} onChangeText={(text) => setDescription(text)} />
      <TextInput style={styles.input} mode='outlined' label="Price" keyboardType='number-pad' value={price} onChangeText={(text) => setPrice(text)} />
      <TextInput style={styles.input} mode='outlined' label="Category" value={category} onChangeText={(text) => setCategory(text)} />
      <Button onPress={imagePicker} icon={'camera'} >Upload Photo</Button>
      {image && <Image style={styles.imagePreview} source={{ uri: image }} />}
      <Button onPress={handleSubmit}>Submit</Button>
    </View>
  )
}

export default AddNewProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    color: MD3Colors.primary30,
    fontWeight: "bold",
  },
  input: {
    width: Dimensions.get("window").width - 100,
    marginVertical: 10,
  },
  imagePreview: {
    width: Dimensions.get("window").width - 100,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000"
  }
})
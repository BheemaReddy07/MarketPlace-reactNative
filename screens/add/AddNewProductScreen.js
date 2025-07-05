import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Button, MD3Colors, TextInput } from 'react-native-paper'

const AddNewProductScreen = () => {
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () =>{
    console.log({name,description,price,category})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>
      <TextInput  style={styles.input} mode='outlined' label="Name" value={name} onChangeText={(text) => setName(text)} />
      <TextInput  style={styles.input} mode='outlined' label="Description" multiline value={description} onChangeText={(text) => setDescription(text)} />
      <TextInput  style={styles.input} mode='outlined' label="Price" keyboardType='number-pad' value={price} onChangeText={(text) => setPrice(text)} />
      <TextInput  style={styles.input} mode='outlined' label="Category" value={category} onChangeText={(text) => setCategory(text)} />
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
  }
})
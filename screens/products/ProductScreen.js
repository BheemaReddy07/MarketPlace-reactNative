import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItemComponent from '../../components/ProductItemComponent'

const ProductScreen = () => {
  const products = useSelector((state)=>state.products.products)
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={(item)=><ProductItemComponent {...item.item} /> } />
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container:{
    marginTop:50,
  }
})
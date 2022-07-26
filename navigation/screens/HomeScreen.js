import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

    const artigos = [
        {
          id: 1,
          name: 'Carteira',
          price: '7€',
          image: require('../../assets/avatars/carteira.png'),
        },
        {
          id: 2,
          name: 'Caneta',
          price: '3€',
          image: require('../../assets/avatars/caneta.png'),
        },
        {
          id: 3,
          name: 'Isqueiro',
          price: '4€',
          image: require('../../assets/avatars/isqueiro.png'),
        },
        {
          id: 4,
          name: 'Chapéu',
          price: '17€',
          image: require('../../assets/avatars/chapéu.png'),
        },
        {
          id: 5,
          name: 'Mala',
          price: '20€',
          image: require('../../assets/avatars/mala.png'),
        },
        {
          id: 6,
          name: 'Caderno',
          price: '9€',
          image: require('../../assets/avatars/caderno.png'),
        },
      ];  
      
      const oneAnimal = ({ item }) => (
        <View style={ styles.item }>
          
          <Image source={ item.image } style={ styles.avatar } />    
          <Text style={ styles.name }>{item.name}</Text>

          <View style={ styles.priceContainer }>
          <Text style={ styles.price }>{item.price}</Text>
          </View>

        </View>    
      );
    
      listSeparator = () => {
        return <View style={ styles.separator } />
      }    
    
      return (    
        <SafeAreaView style={ styles.container }>
          <FlatList              
            data = { artigos }
            renderItem={oneAnimal}        
            ItemSeparatorComponent={ listSeparator }
            // keyExtractor={ animals => animals.whatever }
          />      
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginHorizontal: 21,
      },
    
      item: {
        flex: 1,
        flexDirection: 'row',    
        alignItems: 'center',
        paddingVertical: 10,    

      },
    
      avatar: {
        height: 90,
        width: 90,
      },
    
      name: {
        fontWeight: '600',
        fontSize: 22,
        marginLeft: 27,
        fontFamily: 'serif', 
      },

      price: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'serif',
        paddingLeft: 50,
      },

      priceContainer: {        
        height: '50%',
        width: '29%',
        justifyContent: 'center',
        marginLeft: 240,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',

      },
    
      separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CCC',
      },
    
      
    });
import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

    const animals = [
        {
          id: 1,
          name: 'Carteira    7€',
          image: require('../../assets/avatars/carteira.png'),
        },
        {
          id: 2,
          name: 'Caneta      3€',
          image: require('../../assets/avatars/caneta.png'),
        },
        {
          id: 3,
          name: 'Isqueiro    4€',
          image: require('../../assets/avatars/isqueiro.png'),
        },
        {
          id: 4,
          name: 'Chapéu     17€',
          image: require('../../assets/avatars/chapéu.png'),
        },
        {
          id: 5,
          name: 'Mala          20€',
          image: require('../../assets/avatars/mala.png'),
        },
        {
          id: 6,
          name: 'Caderno    9€',
          image: require('../../assets/avatars/caderno.png'),
        },
      ];  
      
      const oneAnimal = ({ item }) => (
        <View style={ styles.item }>
          <View style={ styles.avatarContainer }>
            <Image source={ item.image } style={ styles.avatar } />
          </View>      
          <Text style={ styles.name }>{item.name}</Text>
        </View>    
      );
    
      listSeparator = () => {
        return <View style={ styles.separator } />
      }    
    
      return (    
        <SafeAreaView style={ styles.container }>
          <FlatList              
            ListEmptyComponent = { <Text>This List is a very Flat list</Text> }
            data = { animals }
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
        paddingVertical: 13,    

      },
    
      avatarContainer: {        
        borderRadius: 100,
        height: 89,
        width: 89,
        justifyContent: 'center',
        alignItems: 'center',    
      },
      
      avatar: {
        height: 90,
        width: 90,
      },
    
      name: {
        fontWeight: '600',
        fontSize: 22,
        marginLeft: 27,
      },
    
      separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CCC',
      },
    
      
    });
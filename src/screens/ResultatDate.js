import * as React from 'react' 
import {Image, Text, View, FlatList, Dimensions, StyleSheet} from 'react-native'

// Packages
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

//Sample Data
import {data, profile, popular} from '../../data2'

export default function ResultatDate ({navigation, route}) {

    const {width,height} = Dimensions.get('window')
    const { results }= route.params;
    console.log('res date: ', results)
    return (
      <View style={{flex: 1}}>

      {/* Header */}

      <View style={{marginTop: 40, marginBottom: 30,paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{fontSize: 14,fontWeight: '700', color: 'green', textTransform: 'uppercase'}}></Text>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>{results[0].DATE_OBSERV.slice(0,10)}</Text>
      </View>
      </View>

      {/* Header End */}

      {/* SharedBlogs */}

    <View>
    <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal
      data={results}
      keyExtractor={(item, index) => index.toString()}
      style={{paddingHorizontal: 30}}
      renderItem={({item}) => {
        return(
          <View>
          <View>
          <TouchableScale 
          activeScale={0.9}
          tension={50}
          friction={7}
          useNativeDriver
          onPress={() => navigation.push('DetailResultatDate', {data: item})}
          >

          <SharedElement id={`item.${item.id}.image`}>
              <Image
              source={require('../../assets/account.jpg')}
              style={{width: width - 80, height: height - 450, borderRadius: 14, marginRight: 30}}
              resizeMode="cover"
              />
            </SharedElement>
            



            <SharedElement id={`item.${item.id}.text`} style={{width:width - 90, position: 'absolute', bottom: 90, left: 10, paddingHorizontal: 10}}>
              <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold', lineHeight:30, position:'absolute',
    left:10,}}>{item.title}</Text>
            </SharedElement>




            <View style={{flexDirection: 'row', alignItems: 'center',position: 'absolute', bottom: 20, left: 20,}}>  

              <SharedElement id={`item.${item.id}.profilePic`}>
                <Image
                source={{uri: item.profilePic}} 
                style={{width: 50, height: 50, borderRadius: 10, marginRight: 14}}
                resizeMode="cover"
                />
              </SharedElement>

              <View>
                <SharedElement id={`item.${item.id}.username`}>
                  <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{item.username}</Text>
                </SharedElement>
                <SharedElement id={`item.${item.id}.readtime`}>
                  <Text style={{color: 'white', fontSize: 14,}}>{item.readtime}</Text>
                </SharedElement>
              </View>

            </View>

          </TouchableScale>
          </View>
    
          </View>
        )
      }}
      />
    </View>

    {/* SHARED BLOGS END */}
      

      {/* POPULAR STARRT */}
     
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Autres Fiches</Text>
        <Text style={{fontWeight: 'bold', color: 'green'}}>Afficher tout</Text>
      </View>

      <FlatList 
      data={popular}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return(
          <View style={{flexDirection: 'row', paddingBottom: 30,paddingLeft: 30, alignItems: 'center'}}>

            <View style={{marginRight: 30}}>
              <Image source={ item.image} style={{width: 100,height: 100, borderRadius: 10}} />
            </View>

            <View style={{width: '60%'}}>

              <Text style={{color: 'green', fontWeight: 'bold',marginBottom: 4 }}>{item.nom}</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold',marginBottom: 10}}>{item.title}</Text>

              <View style={{flexDirection: 'row', alignItems: 'center', opacity: 0.4}}>

               
              

              </View>
          
            </View>

          </View>
        )
      }}
      />
      </View>
    );
}

import React, {useState} from 'react'
import {Image, Text, View, FlatList, Dimensions, StyleSheet,TouchableOpacity,TouchableHighlight,Button,CheckBox
} from 'react-native'

// Packages
import Modal from 'react-native-modal';

//Sample Data
import {data, profile, popular} from '../../data2'

const MainScreen = ({navigation}) => {
    const {width,height} = Dimensions.get('window')
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
      
    };

    return (
      <View style={{flex: 1}}>

      {/* Header */}

      <View style={{marginTop: 20, marginBottom: 10,paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      </View>

      {/* Header End */}

    
      

      {/* POPULAR STARRT */}
     
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Autres Fiches</Text>
        <TouchableOpacity>
        <Text style={{fontWeight: 'bold', color: 'green',fontSize: 20}} onPress={toggleModal}>Filter Par</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={{
         
                backgroundColor: "#fff",
                width: 200,
                height: 168,
                right:-85,
                borderRadius:10,
           }}>
          <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{  
            alignSelf: "center",
           top:10,
            left:-80,
          }}
        />
       <Text style={{
          margin: 1,
          top:-16.9,
          left:40,
       }}>Dérnière Semaine</Text>
         <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={{  
            alignSelf: "center",
           top:10,
            left:-80,
          }}
        />
          <Text style={{
          margin: 1,
          top:-16.9,
          left:40,
       }}>Dérnier Mois</Text>
         <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={{  
            alignSelf: "center",
           top:10,
            left:-80,
          }}
        />
        <Text style={{
          margin: 1,
          top:-16.9,
          left:40,
       }}>Dérnier 3 Mois</Text>
     
        </View>
      </Modal>
        
      </View>

      <FlatList 
      data={popular}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return(
          <View style={{flexDirection: 'row', paddingBottom: 30,paddingLeft: 30, alignItems: 'center'}}>

            <View style={{marginRight: 30}}>
              <TouchableOpacity >
              <Image source={item.image} style={{width: 100,height: 100, borderRadius: 10}} />
              </TouchableOpacity>
            </View>
          
            <View style={{width: '60%'}}>

              <Text style={{color: 'green', fontWeight: 'bold',marginBottom: 4 }}>{item.date}</Text>
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

export default MainScreen;
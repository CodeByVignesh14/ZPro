import { View, Text } from 'react-native'
import React from 'react';
import ZProLogo from './src/assets/images/logo/ZProBlack.svg';
import { appColors } from './src/constants/themes/appColors';


const App = () => {
  return (
    <View style={{flex:7,justifyContent:'center',alignItems:'center',backgroundColor:appColors.primary}}>
      <ZProLogo width={77} height={88}/>
      <View style={{alignItems:'center',bottom:0, backgroundColor:appColors.light,padding:20,borderRadius:10}}>
      <Text>We're charting the final frontier!</Text>
      <Text> Z Pro is in progress and getting ready for liftoff.</Text>
      </View>
      
    </View>
  )
}

export default App
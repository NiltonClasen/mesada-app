import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MeuBotao = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('OutraPagina');
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Ir para outra página</Text>
    </TouchableOpacity>
  );
};

export default MeuBotao;

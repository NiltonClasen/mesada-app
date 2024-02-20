import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

const Actions = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("OutraPagina");
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => onPress()}
      >
        <View style={styles.areaButton}>
          <FontAwesome name="money" size={26} color="black" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <MaterialIcons name="mood-bad" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Saídas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="book" size={26} color="black" />
        </View>
        <Text style={styles.labelButton}>Extrato</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <FontAwesome5 name="people-arrows" size={26} color="black" />
        </View>
        <Text style={styles.labelButton}>Parceiro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: "#ecf0f1",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Actions;

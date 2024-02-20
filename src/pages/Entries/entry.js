import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View, Button } from "react-native";
import Header from "../../components/Header/header";

import { useNavigation } from '@react-navigation/native';

const  Entry = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const onBackButton = () => {
    navigation.goBack();
  };

  const onSaveButton = () => {
    
  };

  return (
    <View style={styles.container}>
      <Header name="Nilton E. Clasen"></Header>
      <View style={styles.tela}>
        <View style={styles.campos}>
          <Text style={styles.textStyle}>Descrição</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Descrição"
          />
        </View>
        <View style={styles.campos}>
          <Text style={styles.textStyle}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="R$"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Voltar"
          onPress={() => onBackButton()}
        ></Button>
        <Button
          title="Salvar"
          color={"#31c916"}
          onPress={() => onSaveButton()}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  tela: {
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  textStyle: {
    fontSize: 20,
    color: "#DADADA",
    fontWeight: "bold",
  },
  campos: {
    paddingBottom: 20,
  },
  buttons: {
    paddingTop: 22,
    paddingLeft: 18,
    paddingEnd: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Entry;
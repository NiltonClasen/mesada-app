import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header/header";
import Balance from "../../components/Balance/balance";
import Movements from "../../components/Movements/movements";

const list = [
  {
    id: 1,
    label: "Mesada",
    value: "300,00",
    date: "17/01/2024",
    type: 0,//receita
  },
  {
    id: 2,
    label: "pix unha",
    value: "15,00",
    date: "18/01/2024",
    type: 1,//gasto
  },
  {
    id: 3,
    label: "mercado carne moida",
    value: "27,20",
    date: "18/01/2024",
    type: 1,//gasto
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Nilton E. Clasen"></Header>

      <Balance saldo="1000,00" gastos="390,00"></Balance>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}></Movements>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
});

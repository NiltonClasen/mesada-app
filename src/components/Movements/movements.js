import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ? (
          <Text style={data.type === 0 ? styles.value : styles.gastos}>
            {data.type == 0 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Text>
        ) : (
          <View style={styles.skeleton}>

          </View>
        )}

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    margintop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#DADADA",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2ecc71",
  },
  gastos: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#e74c3c",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#DADADA",
    borderRadius: 8,
  },
});

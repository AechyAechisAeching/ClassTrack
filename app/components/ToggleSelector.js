import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OptionSelector({
  options = ["Option 1", "Option 2"],
  onSelect,
}) {
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => handleSelect(option)}
          style={[styles.option, selected === option && styles.selectedOption]}
        >
          <Text
            style={[styles.text, selected === option && styles.selectedText]}
          >
            <Ionicons
              name="checkmark-outline"
              size={19}
              color="#065a3eff"
            />

            {option}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },

  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  selectedOption: {
    borderBottomWidth: 2,
    borderColor: "#007bff",
  },

  text: {
    fontSize: 15,
    color: "#666",
  },

  selectedText: {
    color: "#007bff",
    fontWeight: "800",
  },

});

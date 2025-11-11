import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function OptionSelector({
  options = ["Low", "Medium", "High"],
  onSelect,
  initialValue,
  displayOnly = false,
}) {
  const [selected, setSelected] = useState(initialValue || options[0]);

  useEffect(() => {
    if (initialValue) {
      setSelected(initialValue);
    }
  }, [initialValue]);

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return { bg: "#fef2f2", border: "#fecaca", text: "#dc2626" };
      case "Medium":
        return { bg: "#fef3c7", border: "#fde68a", text: "#d97706" };
      case "Low":
        return { bg: "#f0fdf4", border: "#bbf7d0", text: "#16a34a" };
      default:
        return { bg: "#f3f4f6", border: "#d1d5db", text: "#6b7280" };
    }
  };

  if (displayOnly) {
    const colors = getPriorityColor(selected);
    return (
      <View style={[styles.badge, { backgroundColor: colors.bg, borderColor: colors.border }]}>
        <Text style={[styles.badgeText, { color: colors.text }]}>{selected}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {options.map((option) => {
        const colors = getPriorityColor(option);
        const isSelected = selected === option;
        
        return (
          <Pressable
            key={option}
            onPress={() => handleSelect(option)}
            style={[
              styles.option,
              { 
                backgroundColor: isSelected ? colors.bg : "#f9fafb",
                borderColor: isSelected ? colors.border : "#e5e7eb",
              }
            ]}
          >
            <Text style={[styles.text, { color: isSelected ? colors.text : "#6b7280" }]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },
  option: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
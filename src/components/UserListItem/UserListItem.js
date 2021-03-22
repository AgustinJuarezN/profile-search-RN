import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../res/colors";
import HighlightText from "@sanar/react-native-highlight-text";

const TextWithHighlight = ({ text, search, style }) => (
  <Text style={style}>
    <HighlightText
      highlightStyle={{ backgroundColor: colors.yellow }}
      searchWords={[search]}
      textToHighlight={text}
    />
  </Text>
);

const UserListItem = ({ data, search }) => {
  const { name, email, title, address, avatar } = data;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TextWithHighlight text={name} search={search} style={styles.name} />
        <TextWithHighlight text={email} search={search} style={styles.text} />
        <TextWithHighlight text={title} search={search} style={styles.text} />
        <TextWithHighlight text={address} search={search} style={styles.text} />
      </View>
      <View>
        <Image source={{ uri: avatar }} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 30,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
  },
  img: {
    height: 68,
    width: 68,
    borderRadius: 4,
    backgroundColor: colors.ligthGray,
  },
  infoContainer: {
    maxWidth: "75%",
  },
});

export default UserListItem;

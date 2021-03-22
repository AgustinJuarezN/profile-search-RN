import React, { useState } from "react";
import { StyleSheet, View, FlatList, Platform} from "react-native";
import { colors } from "../../res/colors";
import { SearchBar } from "react-native-elements";
import users from "../../../users.json";
import UserListItem from "../../components/UserListItem/UserListItem";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(users);

  const renderUser = ({ item }) => <UserListItem data={item} search={search}/>;

  const filter = (value) => {
    setSearch(value);
    const filtered = users.filter(
      (user) =>
        user.name.includes(value) ||
        user.email.includes(value) ||
        user.title.includes(value) ||
        user.address.includes(value)
    );
    setData(filtered);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={filter}
        value={search}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        containerStyle={styles.searchContainer}
        clearIcon={false}
      />
      {data && (
        <FlatList
          data={data}
          renderItem={renderUser}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 25 : 0
  },
  text: {
    color: colors.black,
  },
  searchContainer: {
    backgroundColor: colors.transparent,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.11,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputContainer: {
    backgroundColor: colors.white,
    height: 30,
    borderRadius: 4,
    margin: 0,
    padding: 0,
  },
  input: {
    fontSize: 14,
    color: colors.black,
  },
});

export default Home;

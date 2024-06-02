import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { taskData } from "./mock/taskData";
import { CategoriesData } from "./mock/CategoriesData";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.group1Header}>Hello,Devs</Text>
            <Text style={styles.group1Text}>14 Tasks Today</Text>
          </View>
          <TouchableOpacity>
            <Image source={require("./assets/profile.jpeg")} />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <View style={styles.searchContainer}>
            <Image
              style={styles.searchIcon}
              source={require("./assets/loc.jpeg")}
            />
            <TextInput style={styles.searchBar} placeholder="Search" />
          </View>
          <View style={styles.menuContainer}>
            <Image source={require("./assets/vector.jpg")} style={styles.menu} />
          </View>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryHeader}>Categories</Text>
          <FlatList
            data={CategoriesData}
            renderItem={({ item }) => (
              <View style={styles.categoryItem}>
                <Text style={styles.categoryText}>{item.name}</Text>
                <Text style={styles.categoryDescription}>
                  {item.description}
                </Text>
                <Image style={styles.categoryImage} source={item.image} />
              </View>
            )}
            keyEtractor={(item) => item.id}
            horizontal
            showHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.task}>
          <Text style={styles.taskHeader}>Ongoing Task</Text>
          <FlatList
            data={taskData}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Text style={styles.tasktext}>{item.name} </Text>
              </View>
            )}
            keyEtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  body: {
    marginHorizontal: 12,
    marginTop: 20,
    flex: 1,
    gap: 30,
  },
  subContainer: {
    padding: 3,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  group1Header: {
    fontSize: "32px",
    lineHeight: "38.4px",
    fontWeight: "700",
    width: "170px",
    height: "37px",
  },
  group1Text: {
    fontSize: "12px",
    lineHeight: "14.4px",
    fontWeight: "500",
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 49,
  },
  searchIcon: {
    width: 24,
    height: 24,
    // resizeMode: "contain",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: 320,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    padding: 15,
    gap: 10,
  },
  searchBar: {
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: 500,
    width: "100%",
    height: 48,
    color: "#000",
  },
  menuContainer: {
    backgroundColor: "#F0522F",
    width: 50,
    height: 48,
    borderRadius: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    height: 25.5,
    width: 23.33,
  },
  categoryItem: {
    backgroundColor: "#fff",
    width: 186,
    height: 192,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 15,
  },
  categoryHeader: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#000",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19.2px",
    color: "#000",
  },
  categoryDescription: {
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "14.4px",
    color: "#000",
  },
  categoryImage: {
    width: 151,
    height: 130,
    marginTop: 10,
    resizeMode: "contain",
  },
  task: {
    marginTop: 20,
  },
  taskHeader: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: "24px",
    color: "#000",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  taskItem: {
    backgroundColor: "#fff",
    width: 384,
    height: 128,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    marginBottom: 20,
    borderColor: "#E8D1BA",
    borderWidth: 1,
  },
  tasktext: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19.2px",
    color: "#000",
  },
  //
});
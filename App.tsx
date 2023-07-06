import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Navigation from "./Navigation";

const data = [
  {
    id: 1,
    name: "Meat",
    icon: "🥩",
  },
  {
    id: 2,
    name: "Pizza",
    icon: "🍕",
  },
  {
    id: 3,
    name: "Burgers",
    icon: "🍔",
  },
  {
    id: 4,
    name: "Noodles",
    icon: "🍜",
  },
];

const data2 = [
  {
    id: 1,
    name: "Meat",
    image:
      "https://cdn.dribbble.com/users/1731254/screenshots/8190185/asian_food_illustration_tubikarts.png",
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://i.pinimg.com/736x/af/5a/db/af5adbd515fb035104fd8878f22a386d.jpg",
  },
  {
    id: 3,
    name: "Burgers",
    image:
      "https://i.pinimg.com/736x/aa/8d/f8/aa8df86aad52453219ac15d2530d910a.jpg",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <View
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                }}
                alt=""
                style={styles.headerImage}
              />
            </View>
            <View style={styles.headerInfo}>
              <Text
                style={{
                  marginBottom: -3,
                  color: "#2B223C",
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Hey Tolemi
              </Text>
              <Text
                style={{
                  color: "#2B223C",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                Ready to order?
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require("./assets/bars-icon.svg")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>

        <View style={{ padding: 20, paddingTop: 0 }}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={{
                flex: 1,
                backgroundColor: "#F5F3F1",
                height: 60,
                borderRadius: 16,
                fontSize: 18,
                paddingLeft: 20,
              }}
              placeholder="Search your cravings"
            />
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#2B223C",
                borderRadius: 16,
                marginLeft: 20,
              }}
            ></TouchableOpacity>
          </View>
        </View>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            data={data2} //pass in our data array
            renderItem={(item) => {
              return (
                <View
                  style={{
                    marginLeft: item.index === 0 ? 20 : 0,
                    marginRight: 15,
                    backgroundColor: "#F5F3F1",
                    width: 300,
                    borderRadius: 20,
                    height: 150,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={{ uri: item.item.image }}
                    alt=""
                    style={{
                      width: 300,
                      height: 150,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              );
            }} //tell React to use our renderItem function that we defined earlier
          />
        </View>

        <View style={{ marginTop: 32 }}>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 22,
              fontWeight: "700",
              marginBottom: 16,
            }}
          >
            Select by category
          </Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            data={data} //pass in our data array
            renderItem={(item) => {
              return (
                <View
                  style={{
                    marginLeft: item.index === 0 ? 20 : 0,
                    padding: 7,
                    marginRight: 15,
                    borderRadius: 10,
                    backgroundColor: "#F5F3F1",
                    width: 100,
                    height: 100,
                  }}
                >
                  <Text
                    style={{
                      color: "#3B273E",
                      fontSize: 40,
                      textAlign: "center",
                    }}
                  >
                    {item.item.icon}
                  </Text>
                  <Text
                    style={{
                      color: "#3B273E",
                      marginTop: 3,
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    {item.item.name}
                  </Text>
                </View>
              );
            }} //tell React to use our renderItem function that we defined earlier
          />
        </View>

        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              marginBottom: 16,
            }}
          >
            Popular menu items
          </Text>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                padding: 10,
                paddingTop: 0,
                paddingBottom: 20,
                borderRadius: 14,
                marginRight: 10,
                flex: 1,
                backgroundColor: "#f6f6f6",
              }}
            >
              <View>
                <Text style={{ fontSize: 80, textAlign: "center" }}>
                  🍗
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Tomahawk Steak
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                paddingTop: 0,
                paddingBottom: 20,
                borderRadius: 14,
                marginLeft: 10,
                flex: 1,
                backgroundColor: "#f6f6f6",
              }}
            >
              <View>
                <Text style={{ fontSize: 80, textAlign: "center" }}>
                  🍲
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Tomahawk Steak
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 80 }} />
      </ScrollView>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    marginTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerImage: {
    width: 56,
    height: 56,
    resizeMode: "cover",
    marginRight: 15,
    borderRadius: 100,
  },
  headerInfo: {},
});

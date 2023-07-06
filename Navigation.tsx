import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

const routes = [
  {
    id: 1,
    icon: "ic_round-home",
  },
];

export default function Navigation() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: 70,
        position: "absolute",
        bottom: 0,
        left: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 20,
        shadowColor: "#52006A",
      }}
    >
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 30,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("./assets/carbon_home.png")}
            style={{ width: 36, height: 36 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/solar_document-linear.png")}
            style={{ width: 36, height: 36 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 60 }}>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: "50%",
            marginLeft: -10,
          }}
        >
          <Image
            source={require("./assets/plus.png")}
            style={{ width: 86, height: 86, marginTop: -40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/solar_ticket-broken.png")}
            style={{ width: 36, height: 36 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/solar_user-linear.png")}
            style={{ width: 36, height: 36 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

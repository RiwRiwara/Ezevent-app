import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Image } from "expo-image";
import icons from "../../config/icons";
import loginimage from "../../assets/loginimage.png";
import { COLORS } from "../../config/color";

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Call onSubmit function with username and password
    onSubmit(username, password);
  };

  return (
    <View>
      <View style={styles.container}>
        <Image source={icons.info} style={{ width: 20, height: 20 }} />
        <Image source={icons.reject} style={{ width: 20, height: 20 }} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={loginimage} style={styles.image} />
      </View>
      <View style={styles.header}>
        <Text style={styles.description} >Welcome to </Text>
        <Text style={styles.title}>Ezevent</Text>
        <Text style={styles.description}>Application for explore events and manage event </Text>
        <Text style={styles.description}> if you need to join please enter mobile number.</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          placeholderTextColor={COLORS.neutral7}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true} // Hide password characters
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={COLORS.neutral7}
          value={password}
        />
        <Button style={styles.button} title="Login" onPress={handleLogin} />
        <Text style={styles.description} >Don't have an account? register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", // Keep this for horizontal arrangement
        justifyContent: "space-between", // Align icons to opposite sides
        
      },
      header: {
        alignItems: "center",
        marginBottom: 20,
      },
      title: {
        fontSize: 32,
        fontWeight: "bold",
        color: COLORS.primary6,
      },
      description: {
        fontSize: 16,
        color: COLORS.primary7, // Light text
      },
      imageContainer: {
        alignItems: "center",
        marginBottom: 20,
      },
      image: {
        width: 200,
        height: 300,
        borderRadius: 10, // Rounded corners
      },
      form: {
        alignItems: "center",
      },
      input: {
        height: 40,
        borderColor: COLORS.neutral9, // Light border
        borderWidth: 1,
        borderRadius: 5, // Rounded corners
        padding: 10,
        marginBottom: 10,
      },
      button: {
        backgroundColor: COLORS.primary6, // Blue button
        color: "#fff", // White text
        padding: 10,
        borderRadius: 5,
      },
      link: {
        marginTop: 10,
        color: "#333",
      },
});

export default Login;

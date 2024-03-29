import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useHandleSignInByApi } from "@services/auth/SignIn";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = useHandleSignInByApi();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Email Input */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      {/* Password Input */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={() => handleSignIn(email, password)} />
    </View>
  );
}

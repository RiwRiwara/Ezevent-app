import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  Select,
  SelectTrigger,
  SelectItem,
  SelectInput,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  Icon,
  Input,
  InputField,
  SelectIcon,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useWindowDimensions } from "react-native";
import { ChevronDown } from "lucide-react-native";
import RenderHtml from "react-native-render-html";
import { API_ENDPOINTS, getApiUrl, Endpoint } from "@constants/api/endpoints";

function TestAPI() {
  const [selectEndpoint, setSelectEndpoint] = useState<Endpoint>({
    url: "/test",
    method: "GET",
  });
  const [token, setToken] = useState<string>("");
  const [reqBody, setReqBody] = useState<string>("");
  const [apiRes, setApiRes] = useState("");

  function endPointOnSelect(string) {
    setSelectEndpoint(API_ENDPOINTS[string]);
  }

  const fetchApi = async () => {
    try {
      var response;
      switch (selectEndpoint.method) {
        case "GET":
          response = await axios.get(getApiUrl(selectEndpoint), {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "ngrok-skip-browser-warning": "true",
              Authorization: `Bearer ${token}`,
            },
          });

          break;
        case "POST":
          response = await axios.post(
            getApiUrl(selectEndpoint),
            JSON.parse(reqBody),
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "ngrok-skip-browser-warning": "true",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          break;
        case "PUT":
          response = await axios.put(
            getApiUrl(selectEndpoint),
            JSON.parse(reqBody),
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "ngrok-skip-browser-warning": "true",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          break;
        case "DELETE":
          break;
        default:
          break;
      }

      setApiRes(response.data);
    } catch (error) {
      setApiRes(error.response.data);
    }
  };

  return (
    <View flex={1} bg="$gray0" p={20}>
      <Text fontSize={30}>Test API</Text>
      <View my={5}>
        <Input variant="underlined" size="sm" fontSize={10}>
          <InputField value={getApiUrl(selectEndpoint)} />
        </Input>
      </View>

      <View my={10}>
        <Select
          variant="underlined"
          size="md"
          onValueChange={(value) => endPointOnSelect(value)}
        >
          <SelectTrigger variant="underlined" size="md">
            <SelectInput placeholder="Select option" />
            <ChevronDown />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>

              {Object.keys(API_ENDPOINTS).map((key) => {
                return <SelectItem key={key} label={key} value={key} />;
              })}
            </SelectContent>
          </SelectPortal>
        </Select>
      </View>

      <View my={10}>
        <Input variant="underlined" size="md">
          <InputField
            placeholder="Token (optional)"
            onChangeText={(value) => {
              setToken(value);
            }}
            value={token}
          />
        </Input>
      </View>
      <View my={10}>
        <Input variant="underlined" size="md">
          <InputField
            placeholder="Json Body (optional)"
            onChangeText={(value) => {
              setReqBody(value);
            }}
            value={reqBody}
          />
        </Input>
      </View>

      <View my={10}>
        <Button
          size="md"
          variant="outline"
          action="positive"
          onPress={fetchApi}
        >
          <ButtonText>Fetch </ButtonText>
        </Button>
      </View>

      <View px={6} py={8}>
        <Text fontSize={20}>{JSON.stringify(apiRes, null, 2)}</Text>
      </View>
    </View>
  );
}

export default TestAPI;

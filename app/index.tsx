// app/index.tsx
import { Redirect } from "expo-router";

const StartPage = () => {
  return <Redirect href="/explore" />;
};

export default StartPage;
import { View } from "react-native";
import { Colors } from "../../assets/theme/colors";
import ScreenHeader from "../components/ScreenHeader";

export default function Home() {
  return (
    <View
      style={{ backgroundColor: Colors.textPrimary }}
      className="flex-1"
    >
      <ScreenHeader
        title="InfraSense"
        subtitle="Live Infrastructure Status"
      />

    </View>
  );
}

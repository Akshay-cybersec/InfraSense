import { View, Text } from "react-native";
import ScreenHeader from "../components/ScreenHeader";
import { Colors } from "@/assets/theme/colors";


export default function Heatmap() {
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

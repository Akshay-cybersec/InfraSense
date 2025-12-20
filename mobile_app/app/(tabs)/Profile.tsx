import { View, Text } from "react-native";
import ScreenHeader from "../components/ScreenHeader";
import { Colors } from "@/assets/theme/colors";
import StatusCard from "../components/StatusCard";


export default function Profile() {
  return (
    <View
      style={{ backgroundColor: Colors.textPrimary }}
      className="flex-1"
    >
      <ScreenHeader
        title="InfraSense"
        subtitle="Live Infrastructure Status"
      />
      <StatusCard
        title="Current Status"
        status="All Systems Operational"
        icon="pulse-outline"
        isUp={true}
      />

    </View>
  );
}

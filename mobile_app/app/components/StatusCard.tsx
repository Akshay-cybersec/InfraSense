import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../assets/theme/colors";

type StatusCardProps = {
  title: string;
  status: string;
  icon?: keyof typeof Ionicons.glyphMap;
  isUp: boolean; 
};

export default function StatusCard({
  title,
  status,
  icon = "checkmark-circle-outline",
  isUp,
}: StatusCardProps) {
  return (
    <View
      style={{ backgroundColor: Colors.surface }}
      className="mx-4 mt-3 rounded-2xl p-4"
    >
      <View className="flex-row items-center gap-2">
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: isUp ? "#22C55E" : "#EF4444",
          }}
        />

        <Ionicons
          name={icon}
          size={18}
          color={Colors.primaryLight}
        />

        <Text
          style={{ color: Colors.textSecondary }}
          className="text-xs uppercase tracking-wide"
        >
          {title}
        </Text>
      </View>

      <Text
        style={{ color: Colors.textPrimary }}
        className="text-lg font-semibold mt-2"
      >
        {status}
      </Text>
    </View>
  );
}

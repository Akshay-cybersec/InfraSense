import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../assets/theme/colors";

type Props = {
  title: string;
  subtitle?: string;
  rightIcon?: keyof typeof Ionicons.glyphMap;
};

export default function ScreenHeader({ title, subtitle, rightIcon }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top + 8,backgroundColor:Colors.background}}
      className="px-5 pb-3"
    >
      <View className="flex-row items-center justify-between">
        <View>
          <Text
            style={{ color: Colors.textPrimary }}
            className="text-2xl font-semibold"
          >
            {title}
          </Text>

          {subtitle && (
            <Text
              style={{ color: Colors.textSecondary }}
              className="text-sm mt-1"
            >
              {subtitle}
            </Text>
          )}
        </View>

        {rightIcon && (
          <Ionicons
            name={rightIcon}
            size={22}
            color={Colors.primaryLight}
          />
        )}
      </View>
    </View>
  );
}

import { View, Pressable, Dimensions } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../assets/theme/colors";

const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 3;

const ICONS: Record<string, any> = {
  Home: "home-outline",
  Heatmap: "map-outline",
  Profile: "person-outline",
};

export default function AnimatedTabBar({ state, navigation }: any) {
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(state.index * TAB_WIDTH, {
          duration: 220,
        }),
      },
    ],
  }));

  return (
    <View style={{ paddingBottom: insets.bottom }}>
      <View
        style={{ backgroundColor: Colors.surface }}
        className="flex-row h-16 rounded-t-3xl overflow-hidden"
      >
        <Animated.View
          style={[
            { width: TAB_WIDTH, backgroundColor: Colors.primary },
            animatedStyle,
          ]}
          className="absolute h-full rounded-t-3xl"
        />

        {state.routes.map((route: any, index: number) => {
          const focused = state.index === index;

          return (
            <Pressable
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              className="flex-1 items-center justify-center gap-1"
            >
              <Ionicons
                name={ICONS[route.name] ?? "ellipse-outline"}
                size={22}
                color={
                  focused
                    ? Colors.iconActive
                    : Colors.iconInactive
                }
              />

              <Animated.Text
                style={{
                  color: focused
                    ? Colors.textPrimary
                    : Colors.textSecondary,
                }}
                className="text-xs font-medium"
              >
                {route.name}
              </Animated.Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

import { View, Pressable, Dimensions } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

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
    <View style={{ paddingBottom: insets.bottom }} className="bg-neutral-900">
      <View className="flex-row h-16 rounded-t-3xl overflow-hidden">
        
        <Animated.View
          style={[{ width: TAB_WIDTH }, animatedStyle]}
          className="absolute h-full bg-indigo-600 rounded-t-3xl"
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
                color={focused ? "#FFFFFF" : "#9CA3AF"}
              />

              <Animated.Text
                className={`text-xs font-medium ${
                  focused ? "text-white" : "text-gray-400"
                }`}
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

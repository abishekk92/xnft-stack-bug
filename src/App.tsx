import ReactXnft, { Stack, Text, View } from "react-xnft";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <View>
      <StackTest />
    </View>
  );
}

function StackTest() {
  return (
    <Stack.Navigator
      initialRoute={{ name: "foo" }}
      options={({ route }) => {
        switch (route.name) {
          case "foo":
            return {
              title: "Stack 1",
            };
          case "bar":
            return {
              title: "Stack 2",
            };
          default:
            throw new Error("unknown route");
        }
      }}
      style={{}}
    >
      <Stack.Screen
        name={"foo"}
        component={(props: any) => <FooComponent {...props} />}
      />
      <Stack.Screen
        name={"bar"}
        component={(props: any) => <FooComponent {...props} />}
      />
    </Stack.Navigator>
  );
}

function FooComponent(props: {}) {
  return (
    <View>
      <Text
        style={{
          height: "100%",
          color: "#FFFFFF",
        }}
      >
        This is a text
      </Text>
    </View>
  );
}

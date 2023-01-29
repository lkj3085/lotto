import { Header } from "../components/Header/Header";
import { FlatList, View } from "react-native";
import { useCallback, useState } from "react";
import { Typograph } from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";
import { useSelector } from "react-redux";

export const HistoryListScreen = (props) => {
  // const [history] = useState([
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  // ]);
  const history = useSelector((state) => state.numbers.history);

  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;

    if (randomNumber === 0) {
      return "red";
    }
    if (randomNumber === 1) {
      return "blue";
    }
    if (randomNumber === 2) {
      return "gray";
    }
    if (randomNumber === 3) {
      return "green";
    }
    if (randomNumber === 4) {
      return "purple";
    }
    return "black";
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header>
        <Header.Title title="HISTORY"></Header.Title>
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 24,
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}>
              <Typograph fontSize={16}>{item.date}</Typograph>
              <LottoNumberView numbers={item.numbers} />
            </View>
          );
        }}
      />
    </View>
  );
};

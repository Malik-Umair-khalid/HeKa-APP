import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import CountDown from "react-native-countdown-component";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//     Option: "A",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//     Option: "B",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//     Option: "C",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d7",
//     title: "Third Item",
//     Option: "D",
//   },
// ];
var quiz1 = [
  {
    question: "Who is US' current president?",
    choices: ["Donald Trump", "Barrack Obama", "Joe Biden", "Vladimir Putin"],
    correctChoice: "Joe Biden",
  },
  {
    question: "What won the recent presidential election in Iran?",
    choices: [
      "Husni Mubarak",
      "Ayatullah Khumenai",
      "Mahatir Muhammad",
      "Ibrahim Raisi",
    ],
    correctChoice: "Ibrahim Raisi",
  },
  {
    question: "How many UN members do not recognize Israel?",
    choices: ["10", "50", "28", "192"],
    correctChoice: "28",
  },
  {
    question: "What is the 'Greater Israel' plan?",
    choices: [
      "To make Israel the biggest country in Asia",
      "To make Israel the biggest country in the world",
      "To rebuild the Temple of Suleman A.S. and rule over the land which was part of Hazrat Suleman A.S.' Empire",
      "Just a myth",
    ],
    correctChoice:
      "To rebuild the Temple of Suleman A.S. and rule over the land which was part of Hazrat Suleman A.S.' Empire",
  },
  {
    question: "Who redesigned Xiaomi's logo??",
    choices: [
      "Kenya Hara",
      "Steve Jobs",
      "Sana Safinaz",
      "The logo looks the same to me",
    ],
    correctChoice: "Kenya Hara",
  },
  {
    question: "When will Summer Olympics 2020 start?",
    choices: [
      "23rd July 2021",
      "7th August 2021",
      "25th December 2021",
      "2020 was a year ago",
    ],
    correctChoice: "23rd July 2021",
  },
  {
    question:
      "What is the name of the 'futuristic' city being built in Saudi Arabia?",
    choices: ["Paradise", "Neom", "Smart City", "There is no such city"],
    correctChoice: "Neom",
  },
  {
    question: "What is the type of Israel's current government?",
    choices: ["Democratic", "Presidential", "Imperial", "Coalition"],
    correctChoice: "Coalition",
  },
  {
    question: "What is the latest 'version' of Covid being called?",
    choices: ["Delta", "Alpha", "Omega", "Beta"],
    correctChoice: "Delta",
  },
  {
    question:
      "Which of these is the reason for the latest uproar against Facebook?",
    choices: [
      "Buying Whatsapp",
      "Changing WhatsApp's privacy policy",
      "Banning Anti-Israel accounts and posts",
      "Facebook did nothing wrong",
    ],
    correctChoice: "Banning Anti-Israel accounts and posts",
  },
];

var quiz2 = [
  {
    question: "Who won ICC Champion's Trophy 2017?",
    choices: ["India", "South Africa", "New Zealand", "Pakistan"],
    correctChoice: "Pakistan",
  },
  {
    question: "Won won PSL 2021?",
    choices: [
      "Lahore Qalandars",
      "Multan Sultan",
      "Peshawar Zalmi",
      "Karachi Kings",
    ],
    correctChoice: "Multan Sultan",
  },
  {
    question: "Ronaldo has won how many European Golden Shoes?",
    choices: ["6", "8", "9", "4"],
    correctChoice: "4",
  },
  {
    question: "When will the next ICC ODI World Cup take place?",
    choices: ["2021", "2022", "2023", "2024"],
    correctChoice: "2023",
  },
  {
    question: "Which of these companies makes sports cars?",
    choices: ["Red Bull", "Nissan", "Apple", "Lamborghini"],
    correctChoice: "Lamborghini",
  },
  {
    question: "Who is the current Snooker World Championship winner?",
    choices: ["Mark Selby", "Shaun Murphy", "Steve Davis", "Stephen Hendry"],
    correctChoice: "Mark Selby",
  },
  {
    question: "Which of these games is not played in Esports competitions?",
    choices: ["League Of Legends", "Dota 2", "Overwatch", "Crazy Taxi"],
    correctChoice: "Crazy Taxi",
  },
  {
    question: "Who holds the record of fastest century in ODI Cricket?",
    choices: [
      "Martin Guptill",
      "AB de Villiers",
      "Shahid Afridi",
      "Eoin Morgan",
    ],
    correctChoice: "AB de Villiers",
  },
  {
    question: "Who was the runner up in World Tennis Championship 2019?",
    choices: [
      "Rafael Nadal",
      "Stefanos Tsitsipas",
      "Kevin Anderson",
      "David Goffin",
    ],
    correctChoice: "Stefanos Tsitsipas",
  },
  {
    question: "Why did the World Tennis Championship 2020 not take place?",
    choices: [
      "Security concerns",
      "Lack of time",
      "Covid pandemic",
      "Other reasons",
    ],
    correctChoice: "Covid pandemic",
  },
];

let quiz3 = [
  {
    question: "Whose standard is ES-262?",
    choices: ["HTML", "Ruby", "Kotlin", "JavaScript"],
    correctChoice: "JavaScript",
  },
  {
    question: "What does &nbsp; does in an HTML page?",
    choices: ["Adds space(s)", "Adds link break", "Adds comma", "Does Nothing"],
    correctChoice: "Adds space(s)",
  },
  {
    question: "What is not a value of the property 'position'?",
    choices: ["Absolute", "Fixed", "Jiggly", "Relative"],
    correctChoice: "Jiggly",
  },
  {
    question: "What is best for creating responsive sites?",
    choices: ["Float", "Flexbox", "Margin", "Padding"],
    correctChoice: "Flexbox",
  },
  {
    question: "What is called 'sibling selector' in CSS?",
    choices: [".", "+", ">", "~"],
    correctChoice: "+",
  },
  {
    question:
      "If a local and global variable have the same name, which one will be used inside the function?",
    choices: ["Local", "Global", "Both", "None"],
    correctChoice: "Local",
  },
  {
    question: "What are arrays in JavaScript??",
    choices: ["Arrays", "Square Brackets", "Containers", "Objects"],
    correctChoice: "Objects",
  },
  {
    question: "What does ECMA stand for?",
    choices: [
      "Every Convenience Made Available",
      "European Computer Manufacturers Association",
      "England China Malaysia America?",
      "It means nothing",
    ],
    correctChoice: "European Computer Manufacturers Association",
  },
  {
    question: "What is localStorage() used for?",
    choices: [
      "To store data in system memory",
      "To store data in browser",
      "Same as sessionStorage()",
      "To store data in browser without an expiry time",
    ],
    correctChoice: "To store data in browser without an expiry time",
  },
  {
    question: "Can clearInterval() be used inside setInterval()?",
    choices: ["Yes", "No", "Sometimes", "Who cares?"],
    correctChoice: "Yes",
  },
];

var quiz4 = [
  {
    question: "What is the number of floors in Burj Khalifa?",
    choices: ["110", "140", "155", "163"],
    correctChoice: "163",
  },
  {
    question: "When was Google founded?",
    choices: ["August 1995", "September 1998", "January 2000", "March 2003"],
    correctChoice: "September 1998",
  },
  {
    question: "Who founded Calculus in the 17th century?",
    choices: [
      "Isaac Newton and Gottfried Leibniz",
      "Thomas Edison and Albert Einstein",
      "Neil Bohr and J.J. Thomson",
      "Guglielmo Marconi and Alexander Bell",
    ],
    correctChoice: "Isaac Newton and Gottfried Leibniz",
  },
  {
    question: "How fast is light?",
    choices: ["300000000 m/s", "30000 km/s", "1200 km/h", "333 m/s"],
    correctChoice: "300000000 m/s",
  },
  {
    question: "What is the name of our galaxy?",
    choices: ["Andromeda", "Pinwheel", "Milky Way", "Cigar"],
    correctChoice: "Milky Way",
  },
  {
    question: "Which company came to India in the 1600s?",
    choices: ["Coca Cola", "Nestle", "East India Company", "Meezan"],
    correctChoice: "East India Company",
  },
  {
    question: "What is the word VIBGYOR used for?",
    choices: [
      "Colors of atoms",
      "Colors of flowers",
      "Colors of rainbow",
      "Frequency of light",
    ],
    correctChoice: "Colors of rainbow",
  },
  {
    question: "How many stars are in the flag of US?",
    choices: ["50", "60", "70", "80"],
    correctChoice: "50",
  },
  {
    question: "What does HEC stand for?",
    choices: [
      "Higher Education Committee",
      "Higher Education Community",
      "Higher Economics Council",
      "Higher Education Commission",
    ],
    correctChoice: "Higher Education Commission",
  },
  {
    question: "What is the most prominent event of 1857?",
    choices: [
      "Earthquake in California",
      "War of Independence in India",
      "Founding of National Association of Baseball Players",
      "US' issuance of flying eagle cents",
    ],
    correctChoice: "War of Independence in India",
  },
];

const arrayOfQuizObjects = [];
arrayOfQuizObjects.push(quiz1, quiz2, quiz3, quiz4);

import { auth, signOut } from "../config/Firebase";

const Item = ({ item, onPress, backgroundColor, textColor, color, opts }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: backgroundColor }]}
    onPress={onPress}
  >
    <>
      <View style={styles.option}>
        <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
          {opts}
        </Text>
      </View>
      <Text style={styles.optionText}>{item}</Text>
    </>
  </TouchableOpacity>
);

function Questions({ navigation, route }) {
  const [selectedId, setSelectedId] = useState(null);
  const [Question, setQuestion] = useState(0);
  const [Marks, setMarks] = useState(0);
  const [SelectedIndex, setSelectedIndex] = useState(null);
  let DATA = arrayOfQuizObjects[route.params.quiz];
  const [RemainingTime, setRemainingTime] = useState(180);
  let Sawal = DATA[Question].question;
  let correctAns = DATA[Question]?.correctChoice;
  let totalQuestions = DATA.length;
  DATA = DATA[Question].choices;


  const finishQuiz = () => {
    navigation.navigate("result", { Marks, totalMalks: totalQuestions * 10 });
    setRemainingTime(180);
  };
  const next = () => {
    if(selectedId){
      if (Question < totalQuestions - 1) {
        if (selectedId == correctAns) {
          let newMarks = Marks;
          newMarks += 10;
          setMarks(newMarks);
        }
        let qNo = Question;
        qNo += 1;
        setQuestion(qNo);
        setSelectedIndex(null);
        setSelectedId(null);
      } else if (Question == totalQuestions - 1) {
        finishQuiz()
      }
    }
    else{
      null
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("signup");
      })
      .catch((error) => {});
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button color="#1ec77f" onPress={logOut} title="Logout" />
      ),
    });
  });

  const renderItem = ({ item, index }) => {
    console.log(index);
    const backgroundColor = index === SelectedIndex ? "#1ec77f" : "#ccdde7";
    const color = index === SelectedIndex ? "#ccdde7" : "#1ec77f";
    const opts =
      index == 0
        ? "A"
        : index == 1
        ? "B"
        : index == 2
        ? "C"
        : index == 3
        ? "D"
        : null;
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item);
          setSelectedIndex(index);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
        opts={opts}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: 90 + "%",
            justifyContent: "space-between",
            padding: 0,
            marginTop: 30,
          }}
        >
          <Text style={styles.heading}>Quiz Name</Text>
          <CountDown
            size={15}
            onFinish={finishQuiz}
            until={RemainingTime}
            digitStyle={{
              // SAD
            }
            }
            digitTxtStyle={{ color: "#ccdde7" }}
            timeLabelStyle={{ color: "red", fontWeight: "bold" }}
            separatorStyle={{ color: "#ccdde7" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />
        </View>
        <View style={styles.line}></View>
        <View style={{ padding: 10 }}>
          <Text style={styles.heading}>
            <Text>{Question + 1}. </Text>
            {Sawal}
          </Text>
        </View>
        <SafeAreaView style={([styles.container], { width: "100%" })}>
          <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(index) => index}
            // extraData={selectedId}
          />
        </SafeAreaView>
        <TouchableOpacity onPress={next} style={styles.button2}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              fontSize: 22,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22283e",
    alignItems: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  heading: {
    fontWeight: "600",
    fontSize: 18,
    color: "#ccdae7",
  },
  para: {
    fontWeight: "300",
    fontSize: 14,
    color: "gray",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 40,
    width: 95 + "%",
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    color: "gray",
    marginTop: 20,
    maxHeight: 100,
    height: 70,
    borderColor: "#f2f2f2",
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#ccdde7",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 100,
    marginTop: 10,
    position: "relative",
    margin: "auto",
  },
  line: {
    height: 2,
    width: "90%",
    backgroundColor: "#fff",
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "90%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    marginTop: 50,
    position: "absolute",
    bottom: 20,
  },
  option: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#1ec77f",
    position: "absolute",
    left: 10,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    color: "#fff",
    textAlign: "center",
    color: "#000",
    fontWeight: "500",
  },
});

export default Questions;

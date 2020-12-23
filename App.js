import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [displayText, displayTextHandler] = useState('I am new Text');

  const [counter, counterHandler] = useState(0);

  const pressHandler = (cls) => {
    displayTextHandler(cls.target.value);
  }

  const incrementHandler = () => {
    counterHandler(counter + 1);

    // let plus = counter = counter + 1;
    // counterHandler(plus);
  }

  const decrementHandler = () => {
    // let minus = counter = counter - 1;
    counterHandler(counter - 1);
  }

  return (
    <View style={styles.container}>
      <Text>Hello World <ShowName name="Apple" title="Developer" /></Text>
      <Text><ShowName lastName="Kapoor" /></Text>
      <TextInput style={styles.textInput} onKeyPress={(text) => {
        pressHandler(text);
      }} />
      <Text>{displayText}</Text>
      <Button title="+" onPress={() => {
        incrementHandler()
      }}></Button>
      <TextInput style={styles.textInput} placeholder="The Number Will be display here" value={counter} />
      <Button title="-" onPress={() => {
        decrementHandler()
      }}></Button>
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}

const ShowName = (props) => {
  return (
    <View>
      <Text>My Name is {props.name} {props.lastName} {props.title}</Text>
    </View>
  );
}

const LoginForm = () => {
  return (
    <View>
      <Text>I am Login Form</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    textAlign: 'center'
  }
});

import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Button } from '@ui-kitten/components';
import { Divider, List, ListItem, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { AsyncStorage } from 'react-native-community/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions, KeyboardAvoidingView, TextInput } from 'react-native-web';



export default function AllNotes() {

  const [notes, setNotes] = useState([])
  const navigation = useNavigation()

  useFocusEffect(
    React.useCallback(() => {
      getNotes
    }, [])
  )

  const getNotes = () => {
    AsyncStorage.getItem("NOTES").then((notes) => {
      setNotes(JSON.parse(notes))
    })
  }

  const renderItem = ({ item, index }) => (
    <ListItem
      title={<Text category="h5" >{item}</Text>}
      onPress={() => navigation.navigate("Note", {
        singleNote: item
      })}
    />
  );

  return (
    <View style={{ backgroundColor: "222B45", flex: 1 }} >
      <Text style={styles.tittle} category="h1" >
        Notes
      </Text>
      <List
        style={styles.container}
        data={notes.reverse()}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20
  },
  item: {
    marginVertical: 4
  },
  tittle: {
    textAlign: "center",
    marginTop: 50
  },
  notes: {
    fontSize: 24
  }
});

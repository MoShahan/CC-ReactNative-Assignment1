import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Contact from "../screens/Contact";
import ContactsScreen from "../screens/ContactsScreen";

const ContactsStack = createStackNavigator();

const ContactStack = () => {
  return (
    <ContactsStack.Navigator screenOptions={{ headerShown: false }}>
      <ContactsStack.Screen name="All Contacts" component={ContactsScreen} />
      <ContactsStack.Screen name="Contact" component={Contact} />
    </ContactsStack.Navigator>
  );
};

export default ContactStack;

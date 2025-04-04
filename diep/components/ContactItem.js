import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

const ContactItem = ({ contact, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [image, setImage] = useState(contact.image); // Imagen del contacto

  // Guardar los cambios en el contacto
  const handleSave = () => {
    onUpdate(contact.id, name, phone, image);
    setIsEditing(false);
  };

  return (
    <View style={styles.contactContainer}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <Image source={image} style={styles.image} />
          <Button title="Guardar" onPress={handleSave} color="green" />
        </>
      ) : (
        <>
          <Image source={image} style={styles.image} />
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.phone}>{contact.phone}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Editar" onPress={() => setIsEditing(true)} color="blue" />
            <Button title="Eliminar" onPress={() => onDelete(contact.id)} color="red" />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#DFFFD6", // Verde claro
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  phone: {
    fontSize: 16,
    color: "gray",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
});

export default ContactItem;

import React, { useState } from "react";
import { View, FlatList, Button, TextInput, Text, StyleSheet, Image } from "react-native";
import ContactItem from "./ContactItem";
import descarga from "../assets/descarga.png"; // Importa la imagen

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(descarga); // Imagen por defecto al agregar contacto

  // Función para agregar contacto
  const addContact = () => {
    if (name.trim() && phone.trim()) {
      setContacts([...contacts, { id: Date.now().toString(), name, phone, image }]);
      setName("");
      setPhone("");
      setImage(descarga); // Reinicia la imagen a la predeterminada
    }
  };

  // Función para actualizar contacto
  const updateContact = (id, newName, newPhone, newImage) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, name: newName, phone: newPhone, image: newImage } : contact
    ));
  };

  // Función para eliminar contacto
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contactos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {/* Botón para agregar contacto */}
      <Button title="Agregar Contacto" onPress={addContact} color="green" />

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onUpdate={updateContact}
            onDelete={deleteContact}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#F0FFF0", // Fondo verde claro
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default ContactList;

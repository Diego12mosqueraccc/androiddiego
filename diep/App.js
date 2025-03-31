import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

// Componente personalizado para mostrar la tarjeta del perfil
const ProfileCard = ({ name, email, phone, setPhone }) => {
  return (
    <View style={styles.card}>
      {/* Imagen de perfil */}
      <Image source={require('./assets/descarga.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      {/* Campo para actualizar el teléfono */}
      <TextInput
        style={styles.input}
        placeholder="Actualizar teléfono"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
    </View>
  );
};

// Componente principal
export default function App() {
  const [phone, setPhone] = useState('');

  // Función para manejar el guardado de cambios
  const handleSave = () => {
    alert('Número de teléfono actualizado: ' + phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Usuario</Text>
      {/* Tarjeta de perfil */}
      <ProfileCard name="Juan Pérez" email="juanperez@example.com" phone={phone} setPhone={setPhone} />
      {/* Botón para guardar cambios */}
      <Button title="Guardar cambios" onPress={handleSave} color="#4CAF50" />
    </View>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Fondo celeste
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    width: 200,
    textAlign: 'center',
  },
});

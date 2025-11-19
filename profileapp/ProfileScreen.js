import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profileSaved, setProfileSaved] = useState(false);

  const handleSave = () => {
    if (!name || !email || !bio) {
      alert('Please fill all fields!');
      return;
    }
    setProfileSaved(true);
  };

  const handleEdit = () => {
    setProfileSaved(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!profileSaved ? (
        // Form view
        <View>
          <Text style={styles.title}>Create Profile</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            multiline
          />

          <Button title="Save Profile" onPress={handleSave} />
        </View>
      ) : (
        // Display profile
        <View>
          <Text style={styles.title}>Your Profile</Text>

          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>

          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.value}>{bio}</Text>

          <Button title="Edit Profile" onPress={handleEdit} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});
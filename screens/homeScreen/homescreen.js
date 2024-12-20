/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StatusBar,Animated} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
const HomeScreen = ({ navigation }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }
    };
    loadTasks();
  }, [fadeAnim]);

  const addTask = async () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now().toString(),
        name: task,
        completed: false,
        createdAt: new Date().toLocaleString(),
      };
      const updatedTasks = [newTask, ...tasks]; // Add new task at the beginning
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTask('');
    }
  };

  const toggleCompletion = async (id) => {
    const updatedTasks = tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = async (id) => {
    const updatedTasks = tasks.filter(t => t.id !== id);
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const TaskItem = ({ item }) => {
    const [scaleValue] = useState(new Animated.Value(1));
    const animatePress = () => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    };

    return (
      <Animated.View
        style={[
          styles.taskContainer,
          { transform: [{ scale: scaleValue }] },
        ]}
      >
        <View style={styles.taskContent}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => {
              animatePress();
              toggleCompletion(item.id);
            }}
          >
            <Icon
              name={item.completed ? 'check-circle' : 'radio-button-unchecked'}
              size={24}
              color={item.completed ? '#4CAF50' : '#757575'}
            />
          </TouchableOpacity>
          <View style={styles.taskTextContainer}>
            <Text style={[styles.taskText, item.completed && styles.completed]}>
              {item.name}
            </Text>
            <Text style={styles.dateText}>{item.createdAt}</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, styles.infoButton]}
              onPress={() => navigation.navigate('Details', { task: item })}
            >
              <Icon name="info" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.deleteButton]}
              onPress={() => deleteTask(item.id)}
            >
              <Icon name="delete" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4a90e2" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Tasks</Text>
        <Text style={styles.taskCount}>{tasks.length} tasks</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          placeholderTextColor="#9E9E9E"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
          activeOpacity={0.7}
        >
          <Icon name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Animated.View style={{ flex: 1, opacity: fadeAnim}}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskItem item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';

const DetailsScreen = ({ route }) => {
  const { task } = route.params;
  const scaleAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 10,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const getInitials = (name) => {
    if (!name) {return '';}
    const nameParts = name.split(' ');
    const first = nameParts[0]?.charAt(0).toUpperCase() || '';
    const last = nameParts[nameParts.length - 1]?.charAt(0).toUpperCase() || '';
    return `${first}${last}`;
  };

  const getStatusColor = (completed) => {
    return completed ? '#28a745' : '#ffc107';
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Background Color */}
      <View style={styles.topSection}>
        <View style={styles.topContent}>
          <Text style={styles.headerText}>Task Details</Text>
        </View>
      </View>

      {/* Avatar Section - Positioned to overlap */}
      <View style={styles.avatarWrapper}>
        <Animated.View
          style={[
            styles.avatarContainer,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{getInitials(task.name)}</Text>
          </View>
        </Animated.View>
      </View>

      {/* Task Details Card */}
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          {/* Spacer for avatar overlap */}
          <View style={styles.avatarSpacer} />
          <Text style={styles.taskName}>{task.name}</Text>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: getStatusColor(task.completed) },
              ]}
            />
            <Text style={styles.taskStatus}>
              {task.completed ? 'Completed' : 'In Progress'}
            </Text>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Priority</Text>
              <Text style={styles.detailValue}>High</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Due Date</Text>
              <Text style={styles.detailValue}>Today</Text>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionLabel}>Description</Text>
            <Text style={styles.descriptionText}>
              {task.description || 'No description provided for this task. Add a description to provide more context and details about the task requirements.'}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: getStatusColor(task.completed)},
            ]}
          >
            <Text style={styles.actionButtonText}>
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default DetailsScreen;

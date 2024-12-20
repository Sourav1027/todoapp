import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
    },
    topSection: {
      backgroundColor: '#4a90e2',
      height: 140,
    },
    topContent: {
      paddingTop: 40,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    headerText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    avatarWrapper: {
      position: 'absolute',
      top: 80,
      left: 0,
      right: 0,
      alignItems: 'center',
      zIndex: 2,
    },
    avatarContainer: {
      alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
    },
    avatarText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#4a90e2',
    },
    cardWrapper: {
      flex: 1,
      paddingHorizontal: 16,
      marginTop: -20,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      marginTop: 40,
    },
    avatarSpacer: {
      height: 40,
    },
    taskName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2d3436',
      textAlign: 'center',
      marginBottom: 15,
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    statusDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 8,
    },
    taskStatus: {
      fontSize: 16,
      color: '#636e72',
    },
    detailsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      paddingVertical: 15,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    detailItem: {
      alignItems: 'center',
      flex: 1,
    },
    verticalDivider: {
      width: 1,
      backgroundColor: '#eee',
      height: '100%',
    },
    detailLabel: {
      fontSize: 14,
      color: '#b2bec3',
      marginBottom: 5,
    },
    detailValue: {
      fontSize: 16,
      color: '#2d3436',
      fontWeight: '600',
    },
    descriptionContainer: {
      marginBottom: 20,
    },
    descriptionLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: '#2d3436',
      marginBottom: 8,
    },
    descriptionText: {
      fontSize: 15,
      color: '#636e72',
      lineHeight: 22,
    },
    actionButton: {
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    actionButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 44,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
  },
  closeImg: {
    height: 14,
    width: 14,
  },
  lockImg: {
    height: 12,
    width: 12,
  },
  cancelText: {
    color: '#007aff',
    fontSize: 18,
    fontWeight: '400',
  },
  urlBox: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  urlText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
  },
});

export default styles;

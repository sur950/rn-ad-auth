import React from 'react';
import { View, Text, Platform, TouchableOpacity, Image } from 'react-native';
import type { HeaderPropTypes } from '../../types';
import styles from './styles';

const Header = (props: HeaderPropTypes) => {
  const { onCancel, url = 'https://login.microsoftonline.com' } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCancel}>
        {Platform.OS === 'ios' ? (
          <Text style={styles.cancelText}>Cancel</Text>
        ) : (
          <Image
            style={styles.closeImg}
            resizeMode="contain"
            source={require('../../assets/images/close.png')}
          />
        )}
      </TouchableOpacity>
      <View style={styles.urlBox}>
        <Image
          style={styles.lockImg}
          resizeMode="contain"
          source={require('../../assets/images/lock.png')}
        />
        <Text style={styles.urlText}>{url}</Text>
      </View>
    </View>
  );
};

export default Header;

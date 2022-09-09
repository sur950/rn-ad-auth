import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import AuthView from '../AuthView';
import type { AuthViewProps } from '../../types';
import styles from './styles';

const AuthModal = (props: AuthViewProps) => {
  const { open } = props;
  const [modalVisibility, setModalVisibility] = useState<boolean>(open);

  React.useEffect(() => {
    setModalVisibility(open);
  }, [open]);

  return (
    <View style={styles.container}>
      <Modal
        presentationStyle="fullScreen"
        supportedOrientations={['portrait']}
        animationType="slide"
        visible={modalVisibility}
      >
        <AuthView
          {...props}
          closeModal={() => {
            setModalVisibility(false);
          }}
        />
      </Modal>
    </View>
  );
};

export default AuthModal;

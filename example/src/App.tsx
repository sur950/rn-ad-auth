import * as React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import AuthModal from 'rn-ad-auth';

export default function App() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const authAction = React.useRef<'login' | 'logout'>('login');

  const config = {
    tenant_id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',
    client_id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',
    scope: 'offline_access openid email profile User.Read',
  };

  const onSuccess = (response: any) => {
    setModalOpen(false);
    console.log('response', response);
  };

  const onFailure = (error: any) => {
    console.log('error', error);
  };

  const onClose = () => {
    console.log('onClose received');
    setModalOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthModal
        config={config}
        action={authAction.current}
        open={modalOpen}
        onClose={onClose}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            authAction.current = 'login';
            setModalOpen(true);
          }}
        >
          <Text>Do Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            authAction.current = 'logout';
            setModalOpen(true);
          }}
        >
          <Text>Do Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtons: {
    position: 'absolute',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff3f2',
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderColor: '#f5b1ab',
    borderRadius: 10,
  },
});

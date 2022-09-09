import React from 'react';
import { Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import constants from '../../utilities/constants';
import {
  getLoginUrl,
  getLogoutUrl,
  getParamValueFromUrl,
} from '../../utilities/helpers';
import { getAuthTokens, getUserDetails } from '../../services/auth';
import type { AuthViewProps } from '../../types';
import styles from './styles';

const AuthView = (props: AuthViewProps) => {
  const { config, action, onSuccess, onClose, closeModal } = props;

  /**
   *
   * @returns Url to be served to webview
   */
  const getWebUrl = (): string => {
    switch (action) {
      case 'login':
        return getLoginUrl(config);
      case 'logout':
        return getLogoutUrl(config.tenant_id);
      default:
        return '';
    }
  };

  /**
   *
   * - Handles Login by looking at navigation state changes of webview.
   * @param state
   * @returns
   */
  const handleLogin = async (state: any) => {
    const { url } = state;

    // Returning here  by certain conditions to validate correct callback url
    if (
      !url.includes('session_state') ||
      url.includes('https://login.microsoftonline.com/') ||
      state.navigationType
    ) {
      return;
    }

    closeModal && closeModal();

    const code = getParamValueFromUrl('code', url);
    const data = {
      code,
      client_id: config.client_id as string,
      tenant_id: config.tenant_id,
      ...constants.DEFAULT_GET_TOKEN_PARAMS,
    };

    const tokenData = await getAuthTokens(data);
    const userData = await getUserDetails(tokenData?.access_token);

    const responseData = {
      code: 200,
      message: 'User logged in successfully.',
      ...tokenData,
      ...userData,
    };

    onSuccess(responseData);
  };

  /**
   *
   * @param state - Navigation State of webview
   */
  const handleLogout = (state: any) => {
    const { url } = state;
    if (!state.navigationType && url.includes('logoutsession')) {
      const responseData = {
        code: 200,
        message: 'User logged out successfully.',
      };
      onSuccess(responseData);
    }
  };

  /**
   * Runs when Url from Webview isChanged.
   */
  const onStateChange = (state: Object) => {
    switch (action) {
      case 'login':
        handleLogin(state);
        break;
      case 'logout':
        handleLogout(state);
        break;
      default:
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Image
          style={styles.closeImg}
          resizeMode="contain"
          source={require('../../assets/images/close.png')}
        />
      </TouchableOpacity>
      <WebView
        style={{ flex: 1, height: 500, backgroundColor: '#a9c1e8' }}
        source={{ uri: getWebUrl() }}
        onNavigationStateChange={onStateChange}
      />
    </SafeAreaView>
  );
};

export default AuthView;

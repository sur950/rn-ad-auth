/* eslint-disable */
export type AuthConfig = {
  tenant_id: string;
  client_id?: string;
  scope?: string;
};

// TODO: Optimize Close Modal functions.
export type AuthViewProps = {
  config: AuthConfig;
  action: 'login' | 'logout';
  open: boolean;
  onClose: () => void;
  onSuccess: (data: any) => void;
  onFailure: (data: any) => void;
  closeModal?: () => void;
};

export type RefreshTokenParams = {
  tenant_id: string;
  client_id: string;
  scope: string;
  refresh_token: string;
  grant_type: string;
};

export type AuthTokenRequestDataType = {
  code: string;
  client_id: string;
  tenant_id: string;
  scope: string;
  grant_type: string;
  client_assertion_type: string;
};

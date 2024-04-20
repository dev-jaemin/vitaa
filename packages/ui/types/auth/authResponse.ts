export interface AuthResponse {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: 'openid';
  token_type: 'bearer';
}

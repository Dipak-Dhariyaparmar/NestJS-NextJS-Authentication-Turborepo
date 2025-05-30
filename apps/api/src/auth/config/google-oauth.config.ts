import { registerAs } from '@nestjs/config';

export default registerAs('googleOAuth', () => ({
  clientID: process.env.GOOGLE_CLINET_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}));

// this configuration file is used to register the Google OAuth configuration
// with the NestJS configuration system. It retrieves the necessary
// environment variables for the Google OAuth client ID, client secret,
// and callback URL, allowing the application to authenticate users via Google OAuth.
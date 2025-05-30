import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';

export default registerAs(
  'refresh-jwt',
  (): JwtSignOptions => ({
    secret: process.env.REFRESH_JWT_SECRET,
    expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
  }),
);

// this configuration file is used to register the Refresh JWT configuration
// with the NestJS configuration system. It retrieves the necessary
// environment variables for the Refresh JWT secret and expiration time,
// allowing the application to sign and verify Refresh JSON Web Tokens (JWTs).
// The Refresh JWT is typically used to obtain new access tokens without requiring the user to log in again.
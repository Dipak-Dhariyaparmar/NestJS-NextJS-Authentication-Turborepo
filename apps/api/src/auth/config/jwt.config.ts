import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  }),
);

// this configuration file is used to register the JWT configuration
// with the NestJS configuration system. It retrieves the necessary
// environment variables for the JWT secret and expiration time,
// allowing the application to sign and verify JSON Web Tokens (JWTs).

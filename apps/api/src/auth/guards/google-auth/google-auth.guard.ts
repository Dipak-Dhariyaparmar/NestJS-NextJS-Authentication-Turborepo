import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {}

// this guard is used to protect routes that require Google authentication.
// It extends the AuthGuard from @nestjs/passport, specifying 'google' as the strategy.
// When a request is made to a protected route, this guard will trigger the Google OAuth flow,
// redirecting the user to Google's authentication page. After successful authentication,
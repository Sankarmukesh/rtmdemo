import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';

export interface Credentials {
  // Customize received credentials here
  data: { username: any; expiry: any; token: any; region_code: any; region_name: any };
  logged_at: any;
  status: string;
}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

// const credentialsKey = 'credentials';

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {
  private _credentials: Credentials | null;
  private credentialsKey = 'Access_Token';

  constructor(private router: Router) {
    const savedCredentials = sessionStorage.getItem(this.credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  public getAccessToken(): string {
    return sessionStorage.getItem(this.credentialsKey);
  }

  public getToken(): string {
    const token = JSON.parse(this.getAccessToken());
    return token.data.token;
  }

  public CheckStatus(): string {
    const token = JSON.parse(this.getAccessToken());
    return token.status;
  }

  /**
   * Authenticates the user.
   *
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: any): Observable<Credentials> {
    // Replace by proper authentication call
    this.setCredentials(context);
    return of(context);
  }

  /**
   * Logs out the user and clear credentials.
   *
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  /**
   * Checks is the user is authenticated.
   *
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    if (this.credentials) {
      const expiry = this.credentials.data.expiry;
      const date = new Date(expiry * 1000).toUTCString();
      const date1 = moment(date);
      const Current_date = moment(
        moment
          .utc()
          .toDate()
          .toUTCString()
      );

      try {
        if (date1 > Current_date) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }

      return false;
    } else {
      return false;
    }
  }

  /**
   * Gets the user credentials.
   *
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   *
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  private setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      credentials.logged_at = new Date().toUTCString();

      const storage = localStorage;
      const sStorage = sessionStorage;
      if (credentials.status === 'ok') {
        storage.setItem(this.credentialsKey, JSON.stringify(credentials));
        sStorage.setItem(this.credentialsKey, JSON.stringify(credentials));
      }
    } else {
      sessionStorage.removeItem(this.credentialsKey);
      localStorage.removeItem(this.credentialsKey);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService, Credential } from '../services/auth.services';
import { getAuth, updateProfile, User } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  displayName: string | null = null;
  email: string | null = null;
  photoURL: string | null = null;
  emailVerified: boolean | null = null;
  uid: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.retrieveUserInfo().then((userInfo) => {
      if (userInfo !== null) {
        this.displayName = userInfo.displayName;
        this.email = userInfo.email;
        this.photoURL = userInfo.photoURL;
        this.emailVerified = userInfo.emailVerified;
        this.uid = userInfo.uid;
      }
    });
  }

  logout() {
    this.authService.logOut();
  }

  private async retrieveUserInfo(): Promise<UserInfo | null> {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      try {
        await updateProfile(user, {});
        const updatedUser = auth.currentUser;

        if (updatedUser !== null) {
          return {
            displayName: updatedUser.displayName || '',
            email: updatedUser.email || '',
            photoURL: updatedUser.photoURL || '',
            emailVerified: updatedUser.emailVerified || false,
            uid: updatedUser.uid || '',
          };
        }
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }

    return null;
  }
}

interface UserInfo {
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
  uid: string;
}

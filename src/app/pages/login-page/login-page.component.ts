import { Component } from '@angular/core';
interface LoginData {
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  password: string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginData: LoginData = { email: '', password: '' };
  loggedIn = false;

  user: User = { firstName: '', lastName: '', password: '' };
  confirmPassword = '';
  registeredUsers: User[] = [];
  registrationComplete = false;

  loginUser() {
    const storedUsers = localStorage.getItem('registeredUsers');
    this.registeredUsers = storedUsers ? JSON.parse(storedUsers) : [];

    const matchedUser = this.registeredUsers.find(user => user.lastName === this.loginData.email && user.password === this.loginData.password);

    if (matchedUser) {
      this.loggedIn = true;
      this.registrationComplete = false;
      alert('Login successful');
    } else {
      this.loggedIn = false;
      alert('Invalid email or password');
    }
  }
}

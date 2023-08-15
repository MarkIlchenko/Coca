import { Component, Input, OnInit } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() dataText: string = 'Sign In';

  showModalNew = false

  openForm(): void {
    this.showModalNew = false;
  }
  closeForm(): void {
    this.showModalNew = true;
    this.showModal = false;
  }
  closeFormNew(): void {
    this.showModalNew = false;
    // this.showModal = true;
  }

  showModal = false;

  openModal(): void {
    this.showModal = true;
  }

  user: User = { firstName: '', lastName: '', password: '' };
  confirmPassword = '';
  registeredUsers: User[] = [];
  registrationComplete = false;

  cartItems: User[] = [];

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('registeredUsers');
    this.registeredUsers = storedUsers ? JSON.parse(storedUsers) : [];
  }

  registerUser() {
    if (this.user.password === this.confirmPassword) {
      this.registeredUsers.push({ ...this.user });
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
      this.registrationComplete = true;
      this.saveRegisteredUsersToLocalStorage(); // You can remove this line
      alert("Thank you, we have saved your data in localstorage")
    } else {
      alert('Passwords do not match.');
    }
  }

  saveRegisteredUsersToLocalStorage() {
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
  }

  closeModal(): void {
    this.showModal = false;
  }

  activeLink(): void {
    alert("Sorry, now we are working on the implementation of registration/login to our service\n")
  }



  dataStyle: string = "sec-button center-button";

  testButtonStyles: { [key: string]: string } = {
    color: '#1D1E25',
    'font-family': 'DM Sans',
    'font-size': '16px',
    'font-style': 'normal',
    'font-weight': '700',
    'line-height': '20px',
    'letter-spacing': '-1px',
    padding: '14px 25px',
    'border-radius': '50px',
    background: '#F2F4FC',
  };
}

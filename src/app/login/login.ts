import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) {}

  // Called when "Start Exploring" button is clicked
  enterApp(): void {                                                                  //It is method which runs when user clicks a button.
    this.router.navigate(['/searchBar']);
  }
  login(): void {
    this.router.navigate(['/searchBar']);
  }
}

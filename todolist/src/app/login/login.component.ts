import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.http.get<any>("http://localhost:3000/users")
        .subscribe(
          res => {
            const user = res.find((a: any) => 
              a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
            );
            if (user) {
              alert("Login successful");
              this.loginForm.reset();
              this.router.navigate(['todo']);
            } else {
              alert("User not found! Please try again.");
            }
          },
          err => {
            alert("Something went wrong. Please check your login details!");
          }
        );
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }
}
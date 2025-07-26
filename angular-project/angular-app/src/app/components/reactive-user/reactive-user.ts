import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit{

  userList: any[] = [];
  http = inject(HttpClient);

  // userForm: FormGroup = new FormGroup();
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAll').subscribe({
    })
  }
}
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  http = inject(HttpClient)
  userList: any[] = []
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.http.get<any[]>('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe({
      next: (res) => {
        this.userList = res;
      },
    })
  }

  onReset() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }

  onUpdateUser() {
    this.userObj.createdData = new Date();
    this.http.put('https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + this.userObj.userId, this.userObj).subscribe({
      next:(value) => {
        console.log('User updated successfully');
        this.getUsers();
      },
      error:(err) => {
        alert(err.error)
      },
    })
  }

  onSaveUser() {
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj).subscribe({
      next: (res) => {
        alert('User created sucessfully');
        this.getUsers();
      },
      error: (err) => {
        console.log(JSON.stringify(err));
        alert('Error:' + JSON.stringify(err.error));
      },
    })
  }

  onEdit(item: any) {
    this.userObj = item;
  }


}

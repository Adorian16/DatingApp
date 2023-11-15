import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  registerMod=false;
  users:any;
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.getUser();

  }
  getUser(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request completed.')
    })
  }

  registerToggle(){
    this.registerMod=!this.registerMod
  }

  cancelRegisterModel(event: boolean){
    this.registerMod=event;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
public user : any[]= [];
  constructor(private route :Router, private http : HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/signup")
        .subscribe((d: any) => {
          this.user = d; 
        })
  }
  

  
}

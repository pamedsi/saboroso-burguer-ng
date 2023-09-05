import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/AuthenticationService';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent {
  burgers!: []
  portions!: []
  drinks!: []

  constructor(){}

  ngOnInit(): void {
    sessionStorage.removeItem('redirectingTo')
  }
}
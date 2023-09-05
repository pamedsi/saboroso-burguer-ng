import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenValidatorService } from 'src/app/services/TokenValidatorService';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  constructor(
    private tokenService: TokenValidatorService
    ){}

  ngOnInit(): void {
    this.tokenService.validateTokenForRouteAccess('/management')
  }
}

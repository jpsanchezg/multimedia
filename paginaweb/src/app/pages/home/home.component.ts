import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  selected: Date | null;

  ngOnInit(): void {
  }
  gototroll() {
    this.router.navigate(['/user']);
  }

}



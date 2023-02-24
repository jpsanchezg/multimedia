import { Component, OnInit } from '@angular/core';
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";
const $targetEl: HTMLElement = document.getElementById('targetEl');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl: HTMLElement = document.getElementById('triggerEl');

// optional options with default values and callback functions
const options: CollapseOptions = {
  onCollapse: () => {
    console.log('element has been collapsed')
  },
  onExpand: () => {
    console.log('element has been expanded')
  },
  onToggle: () => {
    console.log('element has been toggled')
  }
};
const collapse: CollapseInterface = new Collapse($targetEl, $triggerEl, options);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



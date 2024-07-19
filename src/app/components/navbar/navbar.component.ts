import { Component } from '@angular/core';
import { NavbarLinkModel } from '../../models/navbar-link-model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  activeIndex = new BehaviorSubject<number>(0);
  links: NavbarLinkModel[] = [
    {
      navText: 'Home',
      navPath: '/',
    },
    {
      navText: 'Details',
      navPath: '/details',
    },
  ];

  changeActive(index: number) {
    this.activeIndex.next(index);
  }
}

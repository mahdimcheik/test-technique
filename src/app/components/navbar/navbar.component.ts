import { Component, inject, OnInit } from '@angular/core';
import { NavbarLinkModel } from '../../models/navbar-link-model';
import { BehaviorSubject, take } from 'rxjs';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  activeIndex = new BehaviorSubject<number>(0);
  router = inject(Router);

  links: NavbarLinkModel[] = [
    {
      navText: 'Ecran 1',
      navPath: '/',
    },
    {
      navText: 'Ecran 2',
      navPath: '/details',
    },
  ];
  changeActive(index: number) {
    this.activeIndex.next(index);
  }

  ngOnInit(): void {
    this.router.events.pipe(take(1)).subscribe((response) => {
      if (response instanceof NavigationStart) {
        console.log(response.url);

        if (response.url === this.links[0].navPath) {
          this.activeIndex.next(0);
          console.log('0');
        }
        if (response.url === this.links[1].navPath) {
          this.activeIndex.next(1);
        }
      }
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarLinkModel } from '../../models/navbar-link-model';

@Component({
  selector: 'navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrl: './navbar-link.component.scss',
})
export class NavbarLinkComponent {
  @Input() link!: NavbarLinkModel;
  @Input() isActive = false;
  @Output() clickEmitter = new EventEmitter<void>();
}

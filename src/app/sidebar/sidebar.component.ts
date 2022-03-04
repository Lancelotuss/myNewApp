import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

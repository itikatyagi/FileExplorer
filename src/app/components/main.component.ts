import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-main',
  template: `
    <div class="folder" *ngFor="let item of data" fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="10px">
      <mat-icon>folder</mat-icon>
      <span >{{item.title}}</span>
    </div>
  `,
  styles: [`
    .folder {
      padding: 2px;
      cursor: pointer;
    }
    
  `]
})

export class MainComponent implements OnInit {


  public data = [];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log('[MAINCOMPONENT] data to show', data);
      this.data = data;
    });
  }

}



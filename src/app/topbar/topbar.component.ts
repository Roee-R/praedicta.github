import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Output() openTab = new EventEmitter<number>(); // get event from parent

  constructor() { }

  ngOnInit() {
  }
  clickEvent($event) {
    if($event==='linkToPoly'){
      this.openTab.emit(1)
    }
    else{
      this.openTab.emit(2)
    }
  }

}

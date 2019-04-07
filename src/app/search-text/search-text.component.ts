import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  isNew: string;
}

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss']
})
export class SearchTextComponent implements OnInit {
  @Input() childList: User[]; // Get search list
  @Output() searchEvent = new EventEmitter<string>(); // get event from parent
  myControl = new FormControl();
  options: User[] = [];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.options= this.childList;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    this.options= this.childList;
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0 || option.id===parseInt(filterValue));
  }

  textChange(event) {
    this.searchEvent.emit(event.target.value);
  }  
}
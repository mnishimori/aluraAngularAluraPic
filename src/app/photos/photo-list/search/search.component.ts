import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  // Output properties são utilizadas em event binding
  // O nome da Output property é o mesmo nome do evento utilizado
  // por aqueles que desejam interagir com o componente.
  @Output() onTyping = new EventEmitter<string>();
  @Input() value = '';
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}

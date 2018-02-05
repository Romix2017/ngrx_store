import { Http, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Widget } from "../models/widget.model";
import { Store } from '@ngrx/store';
import { AppStore } from '../models/appstore.model';
import { Observable } from 'rxjs/Observable';

const BASE_URL = 'api/latest/widgets';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
  widgets: Observable<Array<Widget>>

  constructor(private http: Http, private store: Store<AppStore>) {
    this.widgets = store.select(state => state.widgets);
  }

  create(widget: Widget) {
    // this.widgets = [...this.widgets, widget];
    return this.http.post(BASE_URL, JSON.stringify(widget), HEADER)
      .map(res => res.json().data)
      .map(payload => ({ type: 'CREATE_WIDGET', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  remove(widget: Widget) {
    return this.http.delete(`${BASE_URL}/${widget.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_WIDGET', payload: widget }));
  }


  save(widget: Widget) {

    (widget.id) ? this.update(widget) : this.create(widget);

  }

  update(widget: Widget) {
    this.http.put(`${BASE_URL}/${widget.id}`, JSON.stringify(widget), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_WIDGET', payload: widget }));
  }

  loadWidgets() {
    return this.http.get(BASE_URL)
      .map(res => res.json().data)
      .map(payload => ({ type: 'ADD_WIDGETS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }
}

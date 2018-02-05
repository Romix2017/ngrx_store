import 'core-js';
import 'zone.js/dist/zone';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { items }  from '../common/stores/items.store';
import { selectedItem } from '../common/stores/selectedItem.store';
import { selectedWidget } from '../common/stores/selectedWidget.store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App } from '../app/app.component';
import { Items } from '../items/items.components';
import { Widgets } from '../widgets/widgets.component';
import { GadgetService } from "../common/services/gadget.service";
import { routes } from '../routes/routes';
import { ItemsList } from '../items/items-list.component';
import { ItemDetail } from '../items/item-detail.component';
import { WidgetsList } from '../widgets/widgets-list.component';
import { WidgetDetails } from '../widgets/widget-details.component';
import { ItemsService } from '../common/services/items.service';
import { WidgetsService } from '../common/services/widget.service';
import { MockHttpModule } from './mockHttpModule';
import { widgets } from '../common/stores/widgets.store';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ items: items, selectedItem: selectedItem, selectedWidget: selectedWidget, widgets: widgets }),
    StoreDevtoolsModule.instrument({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    MockHttpModule
  ],
  declarations: [App, Items, Widgets, ItemsList, ItemDetail, WidgetsList, WidgetDetails],
  providers: [GadgetService, ItemsService, WidgetsService],
  bootstrap: [App]
})
export class AppModule { }

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'core-js';
import 'zone.js/dist/zone';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { items } from './src/common/stores/items.store';
import { selectedItem } from './src/common/stores/selectedItem.store';
import { selectedWidget } from './src/common/stores/selectedWidget.store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App } from '../main_component/main.component';
import { Items } from './src/items/items.component';
import { Widgets } from './src/widgets/widgets.component';
import { GadgetService } from "./src/common/services/gadget.service.ts";
import { routes } from './routes';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                HttpModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule.forRoot(routes),
                StoreModule.provideStore({ items: items, selectedItem: selectedItem, selectedWidget: selectedWidget }),
                StoreDevtoolsModule.instrumentStore({
                    monitor: useLogMonitor({
                        visible: false,
                        position: 'right'
                    })
                }),
                StoreLogMonitorModule
            ],
            declarations: [App, Items, Widgets],
            providers: [GadgetService],
            bootstrap: [App]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
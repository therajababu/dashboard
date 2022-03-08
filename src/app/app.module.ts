import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [ // all components
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductListComponent] // default component
})
export class AppModule { }

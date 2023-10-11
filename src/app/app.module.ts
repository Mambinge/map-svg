import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GraphqlService } from './services/graphql.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { ApolloModule } from 'apollo-angular';

import { GraphQLModule } from './graphql.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ApolloModule,
    GraphQLModule,
    NzPopoverModule,
    BrowserAnimationsModule,
    NzLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  }
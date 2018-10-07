import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailRequestsComponent } from './components/requests/detail-requests/detail-requests.component';
import { CreateRequestsComponent } from './components/requests/create-requests/create-requests.component';
import { CreditHistoryComponent } from './components/credit-history/credit-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DetailRequestsComponent,
    CreateRequestsComponent,
    CreditHistoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

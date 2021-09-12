import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabModule } from './cab/cab.module';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';
import { TripBookingModule } from './TripBooking/trip-booking.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientService } from './service/httpclient.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/AuthInterceptor';
import { AuthenticationService } from './service/authentication.service';
import { LoaderComponent } from './loader/loader.component';
import { HomePageComponent } from './home-page/home-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    RegisterComponent,
    LoaderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CabModule,
    CustomerModule,
    DriverModule,
    TripBookingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService,
    HttpClientService,
    { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { ComposantHeaderComponent } from './Structure/composant-header/composant-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposantFormComponent } from './client/composant-form/composant-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'; 
import { ComposantFooterComponent } from './Structure/composant-footer/composant-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyNumberDirective } from '../directives/verify-number/verify-number.directive';
import { VerifyKeypressDirective } from '../directives/verify-keyPress/verify-keypress.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PhoneFormatPipe } from './core/pipes/phone-format.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { ComposantErrorRoutingComponent } from './Structure/composant-error-routing/composant-error-routing.component';
import { ComposantLoginComponent } from './client/composant-login/composant-login.component';
import { ComposantTotemComponent } from './Structure/composant-totem/composant-totem.component';
import { ComposantFruitListComponent } from './catalog/composant-fruit-list/composant-fruit-list.component';
import { FruitState } from './core/states/fruit-state';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WelcomeComponent } from './Structure/welcome/welcome.component';
import { ComposantDetailsComponent } from './catalog/composant-details/composant-details.component';
import { ComposantCatalogComponent } from './catalog/composant-catalog/composant-catalog.component';
import { ComposantSearchbarComponent } from './catalog/composant-searchbar/composant-searchbar.component';
import { ComposantRecapComponent } from './client/composant-recap/composant-recap.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { ApiHttpInterceptor } from './core/ApiHttpInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    ComposantHeaderComponent,
    ComposantFormComponent,
    ComposantFooterComponent,
    ComposantRecapComponent,
    VerifyNumberDirective,
    VerifyKeypressDirective,
    PhoneFormatPipe,
    ComposantCatalogComponent,
    ComposantSearchbarComponent,
    ComposantErrorRoutingComponent,
    ComposantLoginComponent,
    ComposantTotemComponent,
    ComposantFruitListComponent,
    ComposantFruitListComponent,
    ComposantDetailsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDividerModule,
    AppRoutingModule,
    NgxsModule.forRoot([FruitState]),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:ApiHttpInterceptor, multi: true }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

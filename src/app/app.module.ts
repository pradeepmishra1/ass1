import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';



import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { FormcomComponent } from './formcom/formcom.component';
import { SignupComponent } from './signup/signup.component';
import {UserdataComponent} from './userdata/userdata.component';
import { SigninComponent } from './signin/signin.component'

const approut : Routes =[
  {path : 'signup', component :SignupComponent },
  {path : 'formcom', component : FormcomComponent},
  {path : 'userdata',component :UserdataComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FormcomComponent,
    SignupComponent,
    UserdataComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,MatRadioModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approut,{enableTracing : true})
  ],
  providers: [],
  bootstrap: [AppComponent],
 entryComponents :[FormcomComponent,SignupComponent,SigninComponent]
})
export class AppModule { }

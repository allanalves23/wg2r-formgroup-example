import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AppRoutingModule } from "./app.routing.module";
import { CorrectFormComponent } from "./components/correct-form/correct-form.component";
import { WrongFormComponent } from "./components/wrong-form/wrong-form.component";
import { UserService } from "./services/user.service";
import { AppBarComponent } from './components/app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CorrectFormComponent,
    WrongFormComponent,
    AppBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

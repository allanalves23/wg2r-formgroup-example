import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AppRoutingModule } from "./app.routing.module";
import { CorrectFormComponent } from "./components/correct-form/correct-form.component";
import { WrongFormComponent } from "./components/wrong-form/wrong-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CorrectFormComponent,
    WrongFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

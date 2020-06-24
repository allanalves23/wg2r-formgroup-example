import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CorrectFormComponent } from "./components/correct-form/correct-form.component";
import { WrongFormComponent } from "./components/wrong-form/wrong-form.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "wrong-form",
  },
  {
    path: "correct-form/:id",
    component: CorrectFormComponent,
  },
  {
    path: "wrong-form/:id",
    component: WrongFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from "@angular/core";
import { Gender } from "src/app/models/GenderEnum";

@Component({
  selector: "app-wrong-form",
  templateUrl: "./wrong-form.component.html",
  styleUrls: ["./wrong-form.component.scss"],
})
export class WrongFormComponent {
  name: string = "";
  lastname: string;
  age: number;
  gender: Gender;

  constructor() {}
}

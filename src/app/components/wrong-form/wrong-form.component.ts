import { Component, OnInit } from "@angular/core";
import { Gender } from "src/app/models/GenderEnum";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { UserModel } from "src/app/models/UserModel";

@Component({
  selector: "app-wrong-form",
  templateUrl: "./wrong-form.component.html",
  styleUrls: ["./wrong-form.component.scss"],
})
export class WrongFormComponent implements OnInit {
  name: string;
  email: string;
  age: number;
  gender: Gender;

  showResults: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.getUser(id);
  }

  getUser(userId: number): void {
    this.userService.get(userId, (response: UserModel) => {
      this.name = response.name;
      this.email = response.email;
      this.age = response.age;
      this.gender = response.gender;
    });
  }

  toogleResults(): void {
    this.showResults = !this.showResults;
  }
}

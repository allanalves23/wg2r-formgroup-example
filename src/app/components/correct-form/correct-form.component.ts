import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-correct-form",
  templateUrl: "./correct-form.component.html",
  styleUrls: ["./correct-form.component.scss"],
})
export class CorrectFormComponent implements OnInit {
  userForm: FormGroup;
  showResults: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.prepareForm();
    this.getUser(id);
  }

  prepareForm() {
    this.userForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      email: [null, [Validators.email]],
      age: [null, [Validators.min(0), Validators.max(200)]],
      gender: [null, [Validators.required]],
    });
  }

  getUser(userId) {
    this.userService.get(userId, (response) => {
      this.userForm.setValue(response);
    });
  }

  submit() {
    if (!this.showResults) {
      this.toogleResults();
    }
  }

  toogleResults() {
    this.showResults = !this.showResults;
    if (!this.showResults) {
      this.userForm.reset();
    }
  }
}

import { UserModel } from '../models/UserModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  get(id: number, success: (result: UserModel) => void): Subscription {
    return this.http
      .get<UserModel[]>('../../assets/mock.json')
      .pipe(
        map((users: UserModel[]) =>
          users.filter((user: UserModel) => user.id == id)
        )
      )
      .subscribe((userFiltered: UserModel[]) =>
        success(userFiltered.length ? userFiltered[0] : null)
      );
  }
}

import { Injectable, Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
class Hello {}

export const HELLO = new InjectionToken<any>('Hello', { providedIn: 'root', factory: () => Hello });


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(@Inject(HELLO) Hello: any) { console.log(Hello)}
}

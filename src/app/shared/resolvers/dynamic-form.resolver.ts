import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DynamicFormResolver implements Resolve<any> {
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    return this.httpClient.get('http://localhost:3000/dynamicForms/'+id);
  }
}

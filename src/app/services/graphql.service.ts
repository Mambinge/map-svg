import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, map } from 'rxjs';
import { Provinces } from '../models/provinces';

const PROVINCES = gql`
  {
    provinces {
      name
      description
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getProvinces(): Observable<Provinces[]> {
    return this.apollo
      .watchQuery<any>({
        query: PROVINCES,
      })
      .valueChanges.pipe(
        map((result) => {
          const provinces = result.data.provinces;
          return provinces;
        })
      );
  }
}

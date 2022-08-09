import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, tap } from "rxjs/operators";

export const API_POKEMON = `https://pokeapi.co/api/v2/pokemon`;

export class RestApi {
  static get = <T = any>(
    url?: string,
    headers?: Record<string, string>,
    paramsObj?: any
  ) => {
    url = `${API_POKEMON}`;
    return ajax.getJSON<T>(url, {
      ...(headers || {}),
    });
  };
}

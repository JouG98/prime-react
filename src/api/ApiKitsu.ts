import { ajax } from "rxjs/ajax";

export const API_KITSU = `https://kitsu.io/api/edge/anime`;

export class RestApi {
    static get = <T = any>(
      url?: string,
      headers?: Record<string, string>,
      paramsObj?: any
    ) => {
      url = `${API_KITSU}`;
      return ajax.getJSON<T>(url, {
        ...(headers || {}),
      });
    };
  }
  
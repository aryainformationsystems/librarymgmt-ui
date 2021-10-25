import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../classes/api-response';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'http://localhost:8080/book';

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly BASE_URL = 'http://localhost:5000/v1/todos';
  constructor(private httpCliente: HttpClient) {}

  list(): Observable<any> {
    return this.httpCliente
      .get(this.BASE_URL)
      .pipe(catchError(this.handleError));
  }

  listDone(): Observable<any> {
    return this.httpCliente
      .get(`${this.BASE_URL}/done`)
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<any> {
    return this.httpCliente
      .get(`${this.BASE_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(data: any): Observable<any> {
    return this.httpCliente
      .post(this.BASE_URL, data)
      .pipe(catchError(this.handleError));
  }

  update(id: any, data: any): Observable<any> {
    return this.httpCliente
      .put(`${this.BASE_URL}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  delete(id: any): Observable<any> {
    return this.httpCliente
      .delete(`${this.BASE_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}

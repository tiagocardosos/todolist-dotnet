/**
 * Serviço responsável por executar a comunicação com a API
 * TodoApi.
 *
 * @author Tiago Cardoso<tiagocardosos@gmail.com>
 * @since 1.0.0
 */

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  /* Define a constantes com o base url de comunicaçao com a API*/
  /** TODO adicionar em uma variável de ambiente. */
  private readonly BASE_URL = 'http://localhost:5000/v1/todos';

  constructor(private httpCliente: HttpClient) {}

  /**
   * Método de listagam das tarefas
   *
   * @return array Resultado da lista de tarefas
   */
  list(): Observable<any> {
    return this.httpCliente
      .get(this.BASE_URL)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método de listagam das tarefas concluídas
   *
   * @return array lista de tarefas concluídas
   */
  listDone(): Observable<any> {
    return this.httpCliente
      .get(`${this.BASE_URL}/done`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método que busca uma tarefa por :id
   *
   * @param id number
   * @return object Tarefa
   */
  getById(id: number): Observable<any> {
    return this.httpCliente
      .get(`${this.BASE_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método que salva uma tarefa
   *
   * @param data object
   * @return object Tarefa
   */
  create(data: any): Observable<any> {
    return this.httpCliente
      .post(this.BASE_URL, data)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método que atualiza uma tarefa por :id
   *
   * @param id number
   * @param data object
   * @return object Tarefa
   */
  update(id: any, data: any): Observable<any> {
    return this.httpCliente
      .put(`${this.BASE_URL}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  /**
   * Método que deleta uma tarefa por :id
   *
   * @param id number
   * @return object Mensagem de sucesso
   */
  delete(id: any): Observable<any> {
    return this.httpCliente
      .delete(`${this.BASE_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handle API errors - Customização de retornos de erros
   *
   * @param error HttpErrorResponse
   * @return object Exceções de erros do HttpClient
   */
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

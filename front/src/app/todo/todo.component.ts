import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './models';
import { TodoService } from './service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  titlePage = '';
  todo: Todo;
  newTitle: '';
  todos: any;
  editingTarget: any;
  currentTodo: any;
  TITLE = 'Lista de tarefas';

  @ViewChild('formTodo', { static: true }) formTodo: NgForm;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.todo = new Todo();
    this.titlePage = this.TITLE;
    this.formTodo.resetForm();
    this.all();
  }

  done(todo: any) {
    let data = {
      title: todo.title,
      done: !todo.done,
    };
    return this.todoService.update(todo.id, data).subscribe(
      (response) => {
        this.currentTodo = response;
        this.init();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  delete(todo: any) {
    if (confirm(`Você quer excluir a tarefa: ${todo.title}?`)) {
      return this.todoService.delete(todo.id).subscribe(
        (response) => this.init(),
        (error: any) => {
          console.log(error);
        }
      );
    }
    return false;
  }

  all(): any {
    return this.todoService.list().subscribe(
      (todos: any) => {
        this.todos = todos;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  doneAll(): any {
    return this.todoService.listDone().subscribe(
      (todos: any) => {
        this.todos = todos ?? [];
        this.titlePage = 'Tarefas finalizadas';
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  save(): any {
    if (this.formTodo.form.valid) {
      let data = {
        title: this.todo.title,
      };
      return this.todoService.create(data).subscribe(
        () => this.init(),
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  showLabel(): void {
    this.editingTarget.style.display = '';
  }

  hiddenLabel(): void {
    this.editingTarget.style.display = 'none';
  }

  editTodo(todo, event: any) {
    this.editingTarget = event.target;
    this.currentTodo = todo;
    this.hiddenLabel();
    let el = document.getElementById(todo.id);
    el.removeAttribute('hidden');
  }

  updatingTitle(todo, event: any) {
    this.newTitle = event.target.value;
  }

  saveTitle(todo, event: any) {
    let el = document.getElementById(todo.id);
    el.setAttribute('hidden', 'hidden');
    const data = {
      title: this.newTitle,

      done: this.currentTodo.done,
    };

    this.showLabel();
    return this.todoService.update(todo.id, data).subscribe(
      (response) => {
        this.init();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  cancelEditTodo(todo): void {
    let el = document.getElementById(todo.id);
    el.setAttribute('hidden', 'hidden');
    this.init();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [TodoComponent],
  providers: [TodoService],
})
export class TodoModule {}

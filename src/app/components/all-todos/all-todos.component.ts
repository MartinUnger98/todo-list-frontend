import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent implements OnInit {
  todos: any = [];
  error = '';

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    try {
    this.todos = await this.loadTodos();
    console.log(this.todos)
    } catch(e) {
      this.error = 'Fehler beim Laden';

    }
  }

  loadTodos() {
    const url = environment.baseUrl + "/todos/";
    return lastValueFrom(this.http.get(url));
  }
}

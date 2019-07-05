import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../category';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

    constructor(private httpClient: HttpClient) { }
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    getAll(): Observable<Category[]> {
        return this.httpClient.get<Category[]>('http://localhost:8080/categories', { headers: this.headers });
    }
}

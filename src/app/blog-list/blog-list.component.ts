import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    const category01 = new Category('1', 'Car');
    const category02 = new Category('2', 'Flat');
    const category03 = new Category('3', 'Food');

    this.categories.push(category01);
    this.categories.push(category02);
    this.categories.push(category03);
  }

}

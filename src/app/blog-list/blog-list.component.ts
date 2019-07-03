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
    const category01 = new Category('1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    const category02 = new Category('2', 'Flat');
    const category03 = new Category('3', 'Food');

    this.categories.push(category01);
    this.categories.push(category02);
    this.categories.push(category03);
  }

}

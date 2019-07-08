import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): Category[][] {
    return [
      [
        {id: '101', name: 'Name01', type: 'Type01'},
        {id: '102', name: 'Name02', type: 'Type01'},
        {id: '103', name: 'Name03', type: 'Type01'},
        {id: '104', name: 'Name04', type: 'Type01'}
      ],
      [
        {id: '201', name: 'Name05', type: 'Type02'},
        {id: '202', name: 'Name06', type: 'Type02'},
        {id: '203', name: 'Name07', type: 'Type02'},
        {id: '204', name: 'Name08', type: 'Type02'}
      ],
      [
        {id: '301', name: 'Name09', type: 'Type03'},
        {id: '302', name: 'Name10', type: 'Type03'},
        {id: '303', name: 'Name11', type: 'Type03'},
        {id: '304', name: 'Name12', type: 'Type03'}
      ]
    ];
/*
    const category01 = new Category('101', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Bla01');
    const category02 = new Category('102', 'Flat', 'Bla01');
    const category03 = new Category('103', 'Food', 'Bla02');

    this.getCategories();

    this.categories.push(category01);
    this.categories.push(category02);
    this.categories.push(category03);
*/
  }
}

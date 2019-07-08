import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../services/category-service';
import { first } from 'rxjs/operators';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [CategoryService]
})
export class BlogListComponent implements OnInit {

  categories: Category[][];
  currentPageNumber: number;
  @ViewChildren('tile')blogPostTileComponents: QueryList<BlogPostTileComponent>;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.currentPageNumber = 0;
    this.categories = this.blogDataService.getData();
  }

  updatePageNumber(pageNumber) {
    this.currentPageNumber = pageNumber;
  }

  favoriteAll() {
    console.log('favoriteAll');
    this.categories[this.currentPageNumber] = this.categories[this.currentPageNumber].map(cate => ({
      id: cate.id,
      name: cate.name,
      type: cate.type,
      isFavorite: true
    }));
  }
/*
  getCategories() {
    this.categoryService
      .getAll()
      .pipe(first())
      .subscribe(
        (response: Category[]) => {
          this.categories.push.apply(this.categories, response);
        },
        err => {
          console.log(err);
        },
        () => {}
      );
  }
*/
  expandAll() {
    this.blogPostTileComponents.forEach(el => el.showFullText());
  }
}

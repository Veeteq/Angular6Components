import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../category';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent implements OnInit {

  @Input() category: Category;
  fullText: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullText = this.category.name;
    this.category.name = this.truncatePipe.transform(this.category.name, 35);
  }

  showFullText() {
    console.log('showFullText clicked');
    this.category.name = this.fullText;
  }

  setFavorite() {
    this.category.isFavorite = !this.category.isFavorite;
  }
}

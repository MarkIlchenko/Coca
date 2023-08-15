import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  @Input() data: any;
  @Input() dataStyles: any;



  get isFirstItem(): boolean {
    return this.dataStyles.includes('big-img');
  }
  get isFirstItem3(): boolean {
    return this.dataStyles.includes('big-img2');
  }
  get isFirstItem4(): boolean {
    return this.dataStyles.includes('a');
  }

  @Input() isFirstItem2: boolean = false;
  @Input() isTreeItem2: boolean = false;

  get isTreeItem(): boolean {
    return this.dataStyles.includes('block');
  }

}

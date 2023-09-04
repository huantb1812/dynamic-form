import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-df-preview',
  templateUrl: './df-preview.component.html',
  styleUrls: ['./df-preview.component.scss'],
})
export class DfPreviewComponent implements OnInit {
  selected?: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data
      .pipe(map((res) => res['dynamicForm']))
      .subscribe((res) => {
        this.selected = res;
      });
  }

  ngOnInit() {}
  onBack() {
    this.router.navigateByUrl('');
  }
}

import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-create-dynamic-component',
  templateUrl: './create-dynamic-component.component.html',
  styleUrls: ['./create-dynamic-component.component.css']
})
export class CreateDynamicComponentComponent implements OnInit {

  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

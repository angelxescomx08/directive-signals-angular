import { Component } from '@angular/core';

@Component({
  selector: 'properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent {
  onFieldUpdated(field: string, value: string) {
    console.log({ field, value });
  }
}

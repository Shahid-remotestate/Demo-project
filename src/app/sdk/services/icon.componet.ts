import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  template: '',
})
export class IconComponent {
  constructor(
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('question-mark',domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/question-mark.svg'))
    matIconRegistry.addSvgIcon('world',domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/world.svg'))
  }
}

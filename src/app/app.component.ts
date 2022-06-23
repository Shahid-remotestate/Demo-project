import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {IconComponent} from "./sdk/services/icon.componet";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends IconComponent{
  title = 'demo-project';
  type = environment.type;
  constructor(
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer
  ) {
    super(matIconRegistry, domSanitizer)
  }
}

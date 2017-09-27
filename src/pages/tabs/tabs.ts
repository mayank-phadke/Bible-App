import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { GeneratorPage } from '../generator/generator';
import { ScannerPage } from '../scanner/scanner';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ScannerPage;
  tab2Root = GeneratorPage;
  // tab3Root = ContactPage;

  constructor() {

  }
}

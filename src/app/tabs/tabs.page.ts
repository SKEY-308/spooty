import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs') tabs: IonTabs | any;
  selected: string | undefined = '';
  progress = 72;

  constructor() {}

  setSelectedTab() {
    console.log('Called');
    this.selected = this.tabs.getSelected();
  }

}

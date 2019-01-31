import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage = HomePage;
  settingsPage = SettingsPage;
  registerPage = RegisterPage;

}

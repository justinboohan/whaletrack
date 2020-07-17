import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Irish Dolphins and Whales',
      url: '/whales'
    },
    {
      title: 'Interactive Map',
      url: '/map'
    },
    {
      title: 'Report a Sighting',
      url: '/sighting'
    },
    {
      title: 'Report a Beaching',
      url: '/beaching'
    },
    {
      title: 'How to Report',
      url: '/about'
    },
    {
      title: 'Contact Us',
      url: '/contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

import {  Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-imap',
  templateUrl: './imap.component.html',
  styleUrls: ['./imap.component.scss'],
})
export class ImapComponent implements OnInit{

	@ViewChild("map")
    public mapElement: ElementRef;
	
	private map;

  constructor() { }


   public ngAfterViewInit() {
        const map = L.map(this.mapElement.nativeElement, {
            center: [53, -8],
            zoom: 7,
            layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; OpenStreetMap contributors'})],
            zoomControl: true
        });
        setTimeout(() => {
            map.invalidateSize();
        }, 1000);

        var marker = L.marker([51.5, -6.09]).addTo(map);
    }

  ngOnInit () {}

}
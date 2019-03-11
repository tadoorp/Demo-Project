import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
  id;
  constructor(private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    let id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.id=id;
  }

  
}

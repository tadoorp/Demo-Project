import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { AddressData } from './address-data';



const address_data: AddressData[]= [
  { id: 1, pincode: 830770, city: 'Davanagere', state: 'Karnataka', geocoordinates:[144.14, -27.41]},
  { id: 2, pincode: 909367, city: 'Chitradurga' , state: 'Karnataka', geocoordinates:[145.67, -27.52]},
  { id: 3, pincode: 335482, city: 'Challakere' , state: 'Karnataka', geocoordinates:[146.86, -27.09]},
  { id: 4, pincode: 942312, city: 'Tumkur' , state: 'Karnataka', geocoordinates:[146.82, -25.64] },
  { id: 5, pincode: 560092, city: 'Mysore' , state: 'Karnataka', geocoordinates:[146.25, -25.04]},
  { id: 6, pincode: 354517, city: 'Mandya' , state: 'Karnataka', geocoordinates:[145.45, -24.68]},
  { id: 7, pincode: 252328, city: 'Hosapete' , state: 'Karnataka', geocoordinates:[144.66, -24.60]},
  { id: 8, pincode: 101127, city: 'Pavagada' , state: 'Karnataka', geocoordinates:[144.09, -24.76]},
  { id: 9, pincode: 996005, city: 'Sira' , state: 'Karnataka', geocoordinates:[143.43, -25.08]},
  { id: 10, pincode: 761410, city: 'Hiriyur' , state: 'Karnataka', geocoordinates:[142.99, -25.40]}
];


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  
})
export class AddressComponent implements OnInit {

  displayedColumns:string[]=['id','pincode','city','state','geocoordinates','details','update','delete'];
  dataSource: MatTableDataSource<AddressData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _router: Router) { 
    this.dataSource = new MatTableDataSource(address_data);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  
  }
  
  public redirectToDetails = (element: any) => {
    console.log(element);
    this._router.navigate(['/address', element.id])
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }

}

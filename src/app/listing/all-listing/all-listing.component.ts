import { ChangeDetectionStrategy, Component, OnInit, ViewChild,} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';
import { ListingService } from '../service/listing.service';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllListingComponent implements OnInit {

  listings!: Observable<Listing[]>;
  displayedColumns: string[] = ["name", 'dob', 'role','_id'];
  allUser:Listing[]=[];
  dataSource!: MatTableDataSource<Listing>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;  
  @ViewChild(MatSort)
  sort!: MatSort; 
  
  constructor(private listingService:ListingService) {  
    this.listingService.getListings().subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;  
    });  
  }  

  
  ngOnInit(): void {
    this.listings=this.listingService.getListings();
    this.listingService.getListings().subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data); 
      this.dataSource.paginator = this.paginator;  
      this.dataSource.sort = this.sort;  
    });  
    
  }  
}


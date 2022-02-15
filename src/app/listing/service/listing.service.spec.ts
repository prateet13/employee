import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListingService } from './listing.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../model/listing';

fdescribe('ListingService', () => {
  let service: ListingService;
  let MockHttpClient: HttpClient;
  beforeEach(() => {
    service=new ListingService(MockHttpClient) ;
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
      ],
      providers:[ListingService]
    });
  
    service = TestBed.inject(ListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be work', () => {
    expect(10).toBe(10);
  });

  let mocklist = [
    {name:'demo2',dob:new Date,role:'engineer',_id:'1234567'},
    {name:'demo3',dob:new Date,role:'engineer',_id:'1234563'},
    {name:'demo4',dob:new Date,role:'engineer',_id:'1234569'},
  ];

  it('should get Listings', () => {
    let response : Listing[]=[];
    spyOn(service,'getListings').and.returnValue(of(mocklist));
    service.getListings().subscribe(res => { response = res});
    expect(response).toEqual(mocklist);
  });

  it('should get Listing of Id', () => {
  
    let response:any;
    spyOn(service,'getListing').and.returnValue(of(mocklist));
    service.getListing('12345').subscribe(res => { response = res});
    expect(response).toEqual(mocklist);
  });

  it('should delete Listings of Id', () => {
    let response:any;
    spyOn(service,'deleteListing').and.returnValue(of(mocklist));
    service.deleteListing('123457').subscribe(res => { response = res});
    expect(response).toEqual(mocklist);
  });
  

  it('should edit Listings of Id', () => {

    let response:any;
    spyOn(service,'editListing').and.returnValue(of(mocklist));
    service.editListing({name:'demo2',dob: '1/23/21',role:'artist'},'12345').subscribe(res => { response = res});
    expect(response).toEqual(mocklist);
  });

  it('should add Listing', () => {
  
    let response:any;
    spyOn(service,'addListing').and.returnValue(of(mocklist));
    service.addListing('').subscribe(res => { response = res});
    expect(response).toEqual(mocklist);
  });
  
  it('should be a+b', ()=>{
    expect(add(10,5)).toBe(16);
  })
});
function add(arg0: number, arg1: number): any {
  throw new Error('Function not implemented.');
}


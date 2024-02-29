import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-accounts',
  templateUrl: './corporate-accounts.component.html',
  styleUrls: ['./corporate-accounts.component.scss']
})
export class CorporateAccountsComponent {

  public columns = [
    { title: 'Company Name', fieldName: 'companyName' },
    { title: 'Address', fieldName: 'address' },
    { title: 'Phone', fieldName: 'phone' },
    { title: 'Email', fieldName: 'email' },
    { title: 'Claimant', fieldName: 'claimant' },
    { title: 'CustomerType', fieldName: 'customerType' },
    { title: 'Users', fieldName: 'users' },
  ];
  public corporateAccounts = [
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
    {
      companyName: 'Example Company',
      address: '1234567891234',
      phone: '1234567891234',
      email: '1234567891234',
      claimant: '1234567891234',
      customerType: 'Shipper',
      users: 15,
    },
  ];

}

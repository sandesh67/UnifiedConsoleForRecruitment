export interface Vendor {
  vendorName: string;
  vendorContact: string;
  technology: string[];
  remarks: string;
}

export interface Recruiter {
  id: string;  
  recruiter_name: string;
  companyName: string;
  phoneNumber: string;
  last_called_update: string;
  vendor_handled: Vendor[];
  email:string;
  status:string;
}
import {Injectable} from '@angular/core';

@Injectable()
export class ApplicationService {
  openEGrant () {
    alert('open E-grant');
  }

  openEmployeeRecords () {
    alert('open Employee Records');
  }

  openMedicalRecords () {
    alert('open Medical Records');
  }
}

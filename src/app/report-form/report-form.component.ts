import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import Report from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  submitted: boolean = false;
  genders: Array<string> = ['male', 'female'];
  report: Report = {
    animal_type: '',
    gender: '',
    localisation: '',
    time: '',
    comment: ''
  };
  @Output() onSubmitForm: EventEmitter<Report> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitted = true;
    this.onSubmitForm.emit(this.report);
  }
}
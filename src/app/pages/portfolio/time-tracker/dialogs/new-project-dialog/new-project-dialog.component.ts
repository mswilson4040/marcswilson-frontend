import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Project} from '../../classes/company';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.scss']
})
export class NewProjectDialogComponent implements OnInit {
  public project: Project = new Project();
  constructor(private _dialogRef: MdDialogRef<NewProjectDialogComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this._dialogRef.close(this.project);
  }

}

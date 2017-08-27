import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Project} from '../../classes/company';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {
  public project: Project = new Project();
  constructor(private _dialogRef: MdDialogRef<ProjectDialogComponent>) { }

  ngOnInit() {
  }
  dialogClose(): void {
    this._dialogRef.close(this.project);
  }
  cancel(): void {
    this._dialogRef.close(null);
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Users } from '../../_models/users';
import { SnackbarHelperService } from '../../_helpers/snackbar-helper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {
  public hidePassword = true;
  public passwordRepeat = '';

  // ADD YOUR MODEL HERE
  // TODO: Add model
  public user: Users = {};

  constructor(
    // TODO: Add model
    @Inject(MAT_DIALOG_DATA) public data: Users,
    private dialog: MatDialog,
    private snackbarHelper: SnackbarHelperService
  ) {}

  ngOnInit(): void {
    this.user = this.data;
  }

  // SUBMIT FUNCTION FOR FORM
  public submit(): void {
    if (this.passwordRepeat === this.user.password) {
      this.saveData().subscribe(
        () => {
          this.snackbarHelper.openSnackbar('Saved successfully');
          this.dialog.closeAll();
        },
        (e: any) => {
          this.snackbarHelper.openSnackbar('Error saving entry', 'bg-danger');
          this.dialog.closeAll();
        }
      );
    } else {
      this.snackbarHelper.openSnackbar('Passwords are different', 'bg-danger');
    }
  }

  // CALL SERVICES FOR PUT OR POST
  private saveData(): Observable<any> {
    // TODO: Add service for edit password
    //   return this.exampleService.putUserPassword(this.user);
    // TODO: Remove this line
    return new Observable();
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiExplorerComponent } from './apiexplorer.component';
import { GlobalNavComponent } from '../../../shared-components/global-nav/global-nav.component';
import { MatDialogModule, MatExpansionModule, MatSidenavModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailService } from '../../../shared-services/email.service';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../../shared-services/auth.service';
import { UIService } from '../../../shared-services/ui.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('ApiexplorerComponent', () => {
  let component: ApiExplorerComponent;
  let fixture: ComponentFixture<ApiExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApiExplorerComponent,
        GlobalNavComponent,
      ],
      imports: [
        MatExpansionModule,
        MatSidenavModule,
        RouterTestingModule,
        MatDialogModule,
        HttpModule,
        BrowserAnimationsModule
      ],
      providers: [
        EmailService,
        AuthService,
        UIService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GlobalNavComponent } from '../../shared-components/global-nav/global-nav.component';
import { MatCardModule, MatDialogModule, MatIconModule, MatProgressBarModule, MatTabsModule } from '@angular/material';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { UIService } from '../../shared-services/ui.service';
import { RouterTestingModule } from '@angular/router/testing';
import { EmailService } from '../../shared-services/email.service';
import { AuthService } from '../../shared-services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatProgressBarModule,
        MatDialogModule,
        RouterTestingModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatIconModule
      ],
      declarations: [
        HomeComponent,
        GlobalNavComponent,
        AboutComponent,
        SkillsComponent,
        ExperienceComponent,
        PortfolioComponent,
        FooterComponent
      ],
      providers: [
        UIService,
        EmailService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

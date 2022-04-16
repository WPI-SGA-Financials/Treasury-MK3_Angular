import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallocationsListComponent } from './reallocations-list.component';
import { MockComponent, MockProvider, MockProviders } from 'ng-mocks';
import { ReallocationRequestService } from '@treasury-services/api-services/reallocation-request.service';
import { MatDialog } from '@angular/material/dialog';
import { MetadataService } from '@treasury-services/api-services/metadata.service';
import { ProcessFilterSearchService } from '@treasury-services/process-filter-search.service';
import { SharedMaterialComponentsModule } from '@treasury-components/shared-material-components.module';
import { SharedFiltersModule } from '@treasury-components/filters/shared-filters.module';
import { ReusableTableModule } from '@treasury-components/tables/reusable-table.module';
import { EMPTY } from 'rxjs';
import { CatNavComponent } from '@treasury-components/cat-nav/cat-nav.component';
import { ButtonGroupComponent } from '@treasury-components/button-group/button-group.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ReallocationsComponent', () => {
  let component: ReallocationsListComponent;
  let fixture: ComponentFixture<ReallocationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReallocationsListComponent, MockComponent(CatNavComponent), MockComponent(ButtonGroupComponent)],
      imports: [SharedFiltersModule, SharedMaterialComponentsModule, ReusableTableModule, NoopAnimationsModule],
      providers: [
        MockProvider(MetadataService, {
          getAllMetadata: () => EMPTY
        }),
        MockProvider(ReallocationRequestService, {
          getReallocations: () => EMPTY
        }),
        MockProviders(MatDialog, ProcessFilterSearchService)
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallocationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

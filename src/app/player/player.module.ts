import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { IconsModule } from "@progress/kendo-angular-icons";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { PlayerComponent } from './player.component';
import { GenralInformationComponent } from './components/genalInfo/genral-information/genral-information.component';
import { ProjectBudgetComponent } from './components/projectBudget/project-budget/project-budget.component';
import { FundingComponent } from './components/fundingInfo/funding/funding.component';
import { ProjectManagerComponent } from './components/projectmanage/project-manager/project-manager.component';
import { LagisInformationComponent } from './components/lagis/lagis-information/lagis-information.component';
import { ContactDetailComponent } from './components/contact/contact-detail/contact-detail.component';
import { CooperatingEntitiesComponent } from './components/CooperatingEntities/cooperating-entities/cooperating-entities.component';
import { QuestionnaireTabComponent } from './components/Questionnaire/questionnaire-tab/questionnaire-tab.component';
import { AttachmentTabComponent } from './components/Attachments/attachment-tab/attachment-tab.component';
import { PerformanceMeasureTabComponent } from './components/PerformanceMeasure/performance-measure-tab/performance-measure-tab.component';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { MeasureTableTabComponent } from './components/MeasureTbl/measure-table-tab/measure-table-tab.component';
import { PreviewPageComponent } from './components/Preview/preview-page/preview-page.component';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    HeaderComponent,
    FooterComponent,
    PlayerComponent,
    GenralInformationComponent,
    ProjectBudgetComponent,
    FundingComponent,
    ProjectManagerComponent,
    LagisInformationComponent,
    ContactDetailComponent,
    CooperatingEntitiesComponent,
    QuestionnaireTabComponent,
    AttachmentTabComponent,
    PerformanceMeasureTabComponent,
    MeasureTableTabComponent,
    PreviewPageComponent,
    
    
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PlayerRoutingModule,
    // IconsModule,
    LayoutModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    TabsModule
  ]
})
export class PlayerModule { }

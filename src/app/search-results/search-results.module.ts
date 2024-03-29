import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { SelectSeatComponent } from './components/select-seat/select-seat.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FindTicketsService } from '../home/services/find-tickets.service';
import { SucessMessageComponent } from './components/success-message/sucess-message.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    SearchResultComponent,
    ResultItemComponent,
    SelectSeatComponent,
    MessageModalComponent,
    SucessMessageComponent,
    SummaryComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    ModalModule.forRoot()
  ],
  exports: [
    MessageModalComponent,
    SucessMessageComponent
  ],
  entryComponents: [
    MessageModalComponent,
    SucessMessageComponent
  ],
  providers: [FindTicketsService]
})
export class SearchResultsModule { }

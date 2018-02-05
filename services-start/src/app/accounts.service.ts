import { LoggingService } from "app/logging.service";
import { Injectable } from "@angular/core";
import { stagger } from "@angular/core/src/animation/dsl";

@Injectable()
export class AccountsService{

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService){ // Injecting a Service into another Service.
      }

      addAccount(name:string, status:string){
        this.accounts.push({name:name, status:status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id:number, status:string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }

}

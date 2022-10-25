import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserRole } from '../admin/models/user.model';
import { AuthService } from '../admin/services/auth.service';
import { ResourceType } from '../models/auth.model';
@Directive({
  selector: '[appAccessControl]'
})
export class AccessControlDirective implements OnInit, OnChanges {
  @Input ('appAccessControl') appAccessControl: {
    role: UserRole;
    resourceType: ResourceType;
  };

  constructor(private elementRef: ElementRef, private auth: AuthService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkAccess();
  }

  ngOnInit() {
    console.log('running');
    this.checkAccess();
  }
  checkAccess() {
    const role = this.appAccessControl.role;
    const resourceType = this.appAccessControl.resourceType;

    switch (resourceType) {
      case ResourceType.USERS:
      case ResourceType.TREES:
      case ResourceType.CITIES:
      case ResourceType.FILTERS:
      case ResourceType.CUSTOMERS:
        if (role !== UserRole.ADMIN) {
          this.elementRef.nativeElement.style.display = 'none';
        } else {
          this.elementRef.nativeElement.style.display = 'block';
        }
        break;
      case ResourceType.IMAGES:
      case ResourceType.ORDERS:
    }
  }

}

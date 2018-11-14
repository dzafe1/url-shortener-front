import {LayoutComponent} from '../layout/layout.component';

import {DataSyncConfigComponent, LoginComponent, LogoutComponent, PreferencesComponent, SettingsComponent} from '.';

import {LoginGuard, MainGuard, ModeratorOperatorGuard, PendingChangesGuard} from './guards';

import {DataSyncConfigComponentCU} from './dataSyncConfig/create-update/dataSyncConfigCU.component';
import {DataSyncConfigComponentList} from './dataSyncConfig/list/dataSyncConfigList.component';
import {MembersComponent} from './members/members.component';
import {MembersForApproveComponent} from './members/forApproval/membersForApprove.component';
import {ProfileComponent} from './profile/profile.component';
import {MembersPendingComponent} from './members/pending/membersPending.component';

import {CreditDistributionsMainComponent} from './credit-distributions/main.component';
import {CreditDistributionsListComponent} from './credit-distributions/list.component';
import {CreditDistributionsSingleComponent} from './credit-distributions/single.component';

import {OrdersMainComponent} from './orders/main.component';
import {OrdersListComponent} from './orders/list.component';
import {OrdersSingleComponent} from './orders/single.component';

import {OrderCostsMainComponent} from './order-costs/main.component';
import {OrderCostsListComponent} from './order-costs/list.component';
import {OrderCostsSingleComponent} from './order-costs/single.component';

import {RebateScalesMainComponent} from './rebate-scales/main.component';
import {RebateScalesListComponent} from './rebate-scales/list.component';
import {RebateScalesSingleComponent} from './rebate-scales/single.component';

import {CampaignsMainComponent} from './campaigns/c-main.component';
import {CampaignsListComponent} from './campaigns/list/c-list.component';
import {CampaignsFormComponent} from './campaigns/form/c-form.component';
import {NotificationListComponent} from './notifications/list/n-list.component';
import {NotificationMainComponent} from './notifications/n-main.component';
import {NotificationFormComponent} from './notifications/form/n-form.component';
import {CreditDebtorsComponent} from "./finance/credit-debtors.component";
import {OverdueDebtorsComponent} from "./finance/overdue-debtors.component";
import {MunicipalityComponent} from "./municipality/municipality.component";
import {MunicipalityListComponent} from "./municipality/list/municipality-list.component";
import {MunicipalityEditComponent} from "./municipality/edit/municipality-edit.component";
import {RegionsMainComponent} from './regions/r-main.component';
import {RegionsListComponent} from './regions/list/r-list.component';
import {RegionsFormComponent} from './regions/form/r-form.component';
import {ZipCodesMainComponent} from './zip-codes/zc-main.component';
import {ZipCodesListComponent} from './zip-codes/list/zc-list.component';
import {MemberClassificationComponent} from './member-classification/member-classification.component';
import {MemberClassificationCUComponent} from './member-classification/create-update/member-classification-cu.component';
import {MembersCUComponent} from './members/create-update/members-cu.component';
import {ZipCodesFormComponent} from './zip-codes/form/zc-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MunicipalityNewComponent} from "./municipality/new/municipality-new.component";
import {CustomerTypeComponent} from "./customer-type/customer-type.component";
import {CustomerTypeListComponent} from "./customer-type/list/customer-type-list.component";
import {CustomerTypeEditComponent} from "./customer-type/edit/customer-type-edit.component";
import {CustomerTypeNewComponent} from "./customer-type/new/customer-type-new.component";
import {DeliveryProvidersMainComponent} from './delivery-providers/dp-main.component';
import {DeliveryProvidersListComponent} from './delivery-providers/list/dp-list.component';
import {DeliveryProvidersFormComponent} from './delivery-providers/form/dp-form.component';
import {MotivationalPlansListComponent} from './motivational-plans/list.component';
import {MotivationalPlansFormComponent} from './motivational-plans/single.component';
import {MotivationalPlansMainComponent} from './motivational-plans/main.component';
import {MlmParametersMainComponent} from './mlm-parameters/mp-main.component';
import {MlmParametersListComponent} from './mlm-parameters/list/mp-list.component';
import {MlmParametersFormComponent} from './mlm-parameters/form/mp-form.component';
import {MemberClassificationListComponent} from './member-classification/list/member-classification-list.component';
import {MlmLevelComponent} from "./mlm-levels/mlm-level.component";
import {MlmLevelListComponent} from "./mlm-levels/list/mlm-level-list.component";
import {MlmLevelFormComponent} from "./mlm-levels/edit/mlm-level-form.component";
import {MembersAllComponent} from './members/all/membersAll.component';

export const Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [MainGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [ModeratorOperatorGuard]
            },
            {
                path: 'campaigns',
                component: CampaignsMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: CampaignsListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: CampaignsFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: CampaignsFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'preferences',
                component: PreferencesComponent
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [MainGuard],
                canDeactivate: [PendingChangesGuard]
            },
            {
                path: 'orders',
                component: OrdersMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: OrdersListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: OrdersSingleComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: ':id',
                        component: OrdersSingleComponent,
                        canActivate: [ModeratorOperatorGuard]
                    }
                ]
            },
            {
                path: 'order-costs',
                component: OrderCostsMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: OrderCostsListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: OrderCostsSingleComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: ':id',
                        component: OrderCostsSingleComponent,
                        canActivate: [ModeratorOperatorGuard]
                    }
                ]
            },
            {
                path: 'rebate-scales',
                component: RebateScalesMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: RebateScalesListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: RebateScalesSingleComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: ':id',
                        component: RebateScalesSingleComponent,
                        canActivate: [ModeratorOperatorGuard]
                    }
                ]
            },
            {
                path: 'settings',
                component: SettingsComponent,
                canActivate: [MainGuard]
            },
            {
                path: 'credit-debtors',
                component: CreditDebtorsComponent,
                canActivate: [ModeratorOperatorGuard]
            },
            {
                path: 'overdue-debtors',
                component: OverdueDebtorsComponent,
                canActivate: [ModeratorOperatorGuard]
            },
            {
                path: 'municipalities',
                component: MunicipalityComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'all',
                        component: MunicipalityListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: MunicipalityEditComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: MunicipalityNewComponent,
                        canActivate: [ModeratorOperatorGuard]
                    }
                ]
            },
            {
                path: 'customer-types',
                component: CustomerTypeComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'all',
                        component: CustomerTypeListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: CustomerTypeEditComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: CustomerTypeNewComponent,
                        canActivate: [ModeratorOperatorGuard]
                    }
                ]
            },
            {
                path: 'members',
                component: MembersComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'all',
                        component: MembersAllComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'approve',
                        component: MembersForApproveComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'pending',
                        component: MembersPendingComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: MembersCUComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: MembersCUComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'dataSyncConfig',
                component: DataSyncConfigComponent,
                canActivate: [MainGuard],
                children: [
                    {
                        path: 'list',
                        component: DataSyncConfigComponentList,
                        canActivate: [MainGuard]
                    },
                    {
                        path: 'new',
                        component: DataSyncConfigComponentCU,
                        canActivate: [MainGuard]
                    },
                    {
                        path: 'additem/:clientUsername',
                        component: DataSyncConfigComponentCU,
                        canActivate: [MainGuard]
                    }
                ]
            },
            {
                path: 'motivational-plans',
                component: MotivationalPlansMainComponent,
                canActivate: [MainGuard],
                children: [
                    {
                        path: 'list',
                        component: MotivationalPlansListComponent,
                        canActivate: [MainGuard]
                    },
                    {
                        path: 'new',
                        component: MotivationalPlansFormComponent,
                        canActivate: [MainGuard],
                        canDeactivate: [PendingChangesGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: MotivationalPlansFormComponent,
                        canActivate: [MainGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'credit-distributions',
                component: CreditDistributionsMainComponent,
                canActivate: [MainGuard],
                children: [
                    {
                        path: 'list',
                        component: CreditDistributionsListComponent,
                        canActivate: [MainGuard]
                    },
                    {
                        path: 'new',
                        component: CreditDistributionsSingleComponent,
                        canActivate: [MainGuard]
                    },
                    {
                        path: ':id',
                        component: CreditDistributionsSingleComponent,
                        canActivate: [MainGuard]
                    },
                ]
            },
            {
                path: 'notifications',
                component: NotificationMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: NotificationListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: NotificationFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: NotificationFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'regions',
                component: RegionsMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: RegionsListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: RegionsFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: RegionsFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'zip-codes',
                component: ZipCodesMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: ZipCodesListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: ZipCodesFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: ZipCodesFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'delivery-providers',
                component: DeliveryProvidersMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: DeliveryProvidersListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: DeliveryProvidersFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: DeliveryProvidersFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'member-classification',
                component: MemberClassificationComponent,

                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: MemberClassificationListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    // {
                    //     path: 'new',
                    //     component: MemberClassificationCUComponent,

                    //     canActivate: [ModeratorOperatorGuard],
                    //     canDeactivate: [PendingChangesGuard]
                    // },
                    {
                        path: 'edit/:id',
                        component: MemberClassificationCUComponent,

                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'parameters',
                component: MlmParametersMainComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: MlmParametersListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: MlmParametersFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: MlmParametersFormComponent,
                        canActivate: [ModeratorOperatorGuard],
                        canDeactivate: [PendingChangesGuard]
                    }
                ]
            },
            {
                path: 'levels',
                component: MlmLevelComponent,
                canActivate: [ModeratorOperatorGuard],
                children: [
                    {
                        path: 'list',
                        component: MlmLevelListComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'new',
                        component: MlmLevelFormComponent,
                        canActivate: [ModeratorOperatorGuard]
                    },
                    {
                        path: 'edit/:id',
                        component: MlmLevelFormComponent,
                        canActivate: [ModeratorOperatorGuard]
                    }
                ]
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [MainGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';
import { Foo } from './components/foo/foo';
import { Bar } from './components/bar/bar';

export const routes: Routes = [
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'control-flow-statement',
        component: ControlFlow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: SignalEx 
    },
    {
        path: 'att-directives',
        component: AttDirective
    },
    {
        path: 'get-api',
        component: GetApi
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'foo',
        component: Foo
    },
];

import { Items } from '../items/items.components';
import { Widgets } from '../widgets/widgets.component';
export const routes = [
    { path: '', component: Items },
    { path: 'items', component: Items },
    { path: 'widgets', component: Widgets },
    { path: '*', component: Items }
];
//# sourceMappingURL=routes.js.map
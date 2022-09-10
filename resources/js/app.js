import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) = {
let page; let pages = name.split('::');
if (pages.length > 1) {
const [module, paths] = pages const moduleFileName = paths.split(':').join('/'); page = resolvePageComponent(
path: '../../Modules/${module}/Resources/js/Pages/${moduleFileName}.vue', import.meta.glob( pattern: '../../Modules/*/*/js/Pages/**/*.vue'),
.then(page = {
page.default.layout = name.startsWith('Auth/') ? undefined : defaultLayout
return page; });
} else { page = resolvePageComponent( path: ../Pages/${name}.vue', import.meta.glob( pattern: './Pages/**/*. Vue')) .then(page = {
page.default.layout = name.startsWith("Auth/') ? undefined : defaultLayout
return page; });
return page
},
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el);
    },
});


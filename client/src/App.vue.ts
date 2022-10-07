
import { RouterLink, RouterView } from 'vue-router'
export default await (async () => {
const __VLS_setup = async () => {
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: import('./__VLS_types.js').PickNotAny<__VLS_Ctx, {}> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_Component, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_component, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C } ? C : {}> & import('./__VLS_types.js').GlobalComponents & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_selfComponent!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let RouterView!: import('./__VLS_types.js').GetComponents<typeof __VLS_components, 'router-view', 'routerView', 'RouterView'>;
__VLS_components['router-view'];__VLS_components['router-view'];__VLS_components.routerView;__VLS_components.routerView;__VLS_components.RouterView;__VLS_components.RouterView;
{
let __VLS_0!: import('./__VLS_types.js').ComponentProps<typeof RouterView>;
RouterView;
__VLS_0 = {  };
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots:
{
};
return __VLS_slots;
}
const __VLS_component = (await import('vue')).defineComponent({
setup() {
return {
RouterView: RouterView,
};
},
});
return {} as typeof __VLS_Component;
};
return await __VLS_setup();
})();

// src/routes/modules/+layout.js
import { modules } from '$lib/data/modules.js';

export function load({ url }) {
    const currentModule = modules.find(
        module => url.pathname === `/modules/${module.slug}`
    );
    
    return {
        currentModule
    };
}
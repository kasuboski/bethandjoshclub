import { env } from '$env/dynamic/private';


const testURLs = {
    "honeymoon": "https://buy.stripe.com/test_00gdSvaDl1sudJC8ww",
};

const prodURLs = {
    "honeymoon": "https://buy.stripe.com/4gw3dZan87H7eDS4gg",
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return isProd(env) ? {
        registryURLs: prodURLs,
    } : {
        registryURLs: testURLs, 
    };
}

function isProd(env) {
    return env.VERCEL_ENV == "production";
}

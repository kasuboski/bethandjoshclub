/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return /^rsvp$/i.test(param);
}

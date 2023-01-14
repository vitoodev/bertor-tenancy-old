// Make svelte kit action login

import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const formdata = await event.request.formData();
		// TODO log the user in

		console.log(
			'event',
			event.params,
			formdata.get('email'),
			formdata.get('password'),
			event.isDataRequest
		);
	}
};

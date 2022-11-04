import * as socialAuthProviders from './socialAuthProviders'

export const createSocialAuthDispatcher = (client) => async (provider) => {
	const authData = await client.users.authViaOAuth2(
		provider,
		socialAuthProviders[provider].code,
		socialAuthProviders[provider].verifier,
		socialAuthProviders[provider].redirectUrl
	)

	return authData
}

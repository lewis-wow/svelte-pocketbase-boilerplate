<script>
	import PocketBase from 'pocketbase'
	import * as socialAuthProviders from './socialProviders'

	const client = new PocketBase(import.meta.env.VITE_POCKET_BASE_HOSTNAME)

	const socialAuth = async (provider) => {
		const authData = await client.users.authViaOAuth2(
			provider, 
			socialAuthProviders[provider].code, 
			socialAuthProviders[provider].verifier, 
			socialAuthProviders[provider].redirectUrl
		);

		return authData
	}
</script>

<main>
	<button on:click={() => socialAuth('google')}>Login via google</button>
</main>

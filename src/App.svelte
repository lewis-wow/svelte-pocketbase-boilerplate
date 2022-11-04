<script>
	import PocketBase from 'pocketbase'
	import { createSocialAuthDispatcher } from './socialAuth'

	const client = new PocketBase(import.meta.env.VITE_POCKET_BASE_HOSTNAME)

	const socialAuth = createSocialAuthDispatcher(client)
</script>

<main>
	<button on:click={() => socialAuth('google')}>Login via google</button>
</main>

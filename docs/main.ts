import App from './App.svelte';
import 'swiper/css/swiper.css'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
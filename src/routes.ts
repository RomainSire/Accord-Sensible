import Home from './pages/home.svelte';
import FourOhFour from './pages/fourohfour.svelte';

export default {
    '/': Home,
    '*': FourOhFour,
}
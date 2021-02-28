import Home from './pages/home.svelte';
import About from './pages/about.svelte';
import FourOhFour from './pages/fourohfour.svelte';

export default {
    '/': Home,
    '/about': About,
    '*': FourOhFour,
}
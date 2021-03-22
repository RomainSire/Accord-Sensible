import Home from './pages/home.svelte';
import Accord from "./pages/accord.svelte";
import FourOhFour from './pages/fourohfour.svelte';

export default {
    '/': Home,
    '/accord': Accord,
    '*': FourOhFour,
}
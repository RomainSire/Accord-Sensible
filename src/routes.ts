import Home from './pages/home.svelte';
import Accord from "./pages/accord.svelte";
import Reglages from "./pages/reglages.svelte";
import Reparations from "./pages/reparations.svelte";
import FourOhFour from './pages/fourohfour.svelte';

export default {
    '/': Home,
    '/accord': Accord,
    '/reglages': Reglages,
    '/reparations': Reparations,
    '*': FourOhFour,
}
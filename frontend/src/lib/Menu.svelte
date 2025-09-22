<script lang="ts">
    import Icon from "@iconify/svelte";
    import { createEventDispatcher, type EventDispatcher } from "svelte";

    export let icon_set: string;

    const dispatch: EventDispatcher<Record<string, unknown>> =
        createEventDispatcher();
    const toggleNavigation: () => boolean = (): boolean =>
        dispatch("toggle_navigation");
</script>

<button
    on:click={toggleNavigation}
    class="hover:bg-purple-600 rounded-full p-1 duration-200 ease-out hover:ease-in cursor-pointer"
    title="Menu Icon - Toggle Navigation"
>
    <Icon icon={icon_set} class="icon sm:w-12 sm:h-12" />
</button>

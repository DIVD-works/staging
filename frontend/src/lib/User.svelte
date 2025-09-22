<script lang="ts">
    import { goto } from "$app/navigation";
    import Icon from "@iconify/svelte";
</script>

<button
    on:click={(): Promise<void> => goto("/")}
    class="hover:bg-purple-600 rounded-full p-1 duration-200 ease-out hover:ease-in cursor-pointer"
    title="User Icon - Login page"
>
    <Icon icon="mdi:user" class="icon sm:w-12 sm:h-12" />
</button>

<template>
    <div
        class="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 px-8 py-4 rounded-md bg-transparent-black text-zinc-300 md:mt-0"
    >
        <button
            class="bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-md col-start-1 col-span-2"
        >
            Saving Throw
        </button>
        <button
            class="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md col-start-1"
        >
            Clear
        </button>
        <button
            class="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md col-start-2"
            @click="clearAll"
        >
            Clear all
        </button>
        <button
            class="bg-red-900 hover:bg-red-800 py-2 px-4 rounded-md col-start-1 col-span-2"
        >
            Remove Player
        </button>
    </div>
</template>
<script setup>
import { useStatusStore } from "../../stores/StatusStore";

const statusStore = useStatusStore();

const clearAll = () => {
    statusStore.clearAllSavings();
};
</script>

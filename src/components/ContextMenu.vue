<template>
    <div
        class="bg-oxford-blue py-2 px-4 rounded-md w-full h-full absolute z-10 flex justify-around items-center lg:justify-evenly"
    >
        <button
            class="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md max-h-9 flex items-center"
            @click="clearSavings(selected), $emit('closeContextMenu')"
            @pointerdown.stop="closeContextMenu"
        >
            Clear Savings
        </button>
        <button
            class="bg-poppy-dark hover:bg-poppy py-2 px-4 rounded-md max-h-9 flex items-center"
            @click="removeCharacter(selected), $emit('closeContextMenu')"
        >
            Delete Character
        </button>
    </div>
</template>
<script setup>
import { useStatusStore } from "../../stores/StatusStore";

defineProps({
    selected: Number,
    showContextMenu: Boolean,
});

const statusStore = useStatusStore();

const clearSavings = (selected) => {
    statusStore.clearSavings(selected);
};

const removeCharacter = (selected) => {
    statusStore.removeCharacter(selected);
};
</script>

<template>
    <div
        class="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 px-8 py-4 rounded-md bg-transparent-black text-zinc-300 md:mt-0"
    >
        <div class="grid col-start-1 col-span-2">
            <button
                class="bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-md"
                @click="rollDice"
            >
                Saving Throw
            </button>
            <span class="text-center">
                {{ diceThrow }}
            </span>
        </div>

        <button
            class="bg-red-700 hover:bg-red-600 py-2 px-4 rounded-md col-start-1"
            @click="addFailure"
        >
            +1 Failure
        </button>
        <button
            class="bg-green-700 hover:bg-green-600 py-2 px-4 rounded-md col-start-2"
            @click="addSuccess"
        >
            +1 Success
        </button>

        <button
            class="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md col-start-1"
            @click="clearSomeSavings"
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
            @click="removeCharacters"
        >
            Remove Character
        </button>
    </div>
</template>
<script setup>
import { useStatusStore } from "../../stores/StatusStore";
import { ref } from "vue";

const statusStore = useStatusStore();
const diceThrow = ref("");

const clearSomeSavings = () => {
    statusStore.clearSomeSavings();
};

const clearAll = () => {
    statusStore.clearAllSavings();
};

const removeCharacters = () => {
    statusStore.deleteCharacters();
};

const rollDice = () => {
    diceThrow.value = Math.ceil(Math.random() * 20);
};

const addFailure = () => {
    statusStore.addCharacterFail();
};

const addSuccess = () => {
    statusStore.addCharacterSuccess();
};
</script>

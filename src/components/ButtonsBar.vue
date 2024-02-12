<template>
    <div class="absolute bottom-0 w-full">
        <div
            class="flex justify-center items-center w-full h-10 text-lg font-bold bg-blue-950 rounded-t-md"
        >
            <div v-if="barOptions" class="flex justify-start">
                <input
                    type="text"
                    placeholder="New character name"
                    class="bg-transparent border-b-2 flex-grow"
                    v-model="characterName"
                    @keyup.enter="insertCharacter"
                />
                <img
                    src="../assets/icons/add.svg"
                    alt="add"
                    width="24"
                    height="24"
                    class="hover:cursor-pointer"
                    @click="insertCharacter"
                />
            </div>
            <div
                v-if="!barOptions"
                :class="{
                    'text-red-600': diceThrow === 1,
                    'text-green-600': diceThrow === 20,
                }"
            >
                {{ diceThrow }}
            </div>
        </div>
        <div
            class="bg-strong-blue grid grid-cols-4 text-center hover:cursor-pointer"
        >
            <span
                class="hover:bg-blue-950 p-2 flex items-center justify-center h-full"
                @click="clearAll"
                >Clear All</span
            >
            <span
                class="hover:bg-blue-950 p-2 flex items-center justify-center h-full"
                >Help</span
            >
            <span
                class="hover:bg-blue-950 p-2 flex items-center justify-center h-full"
                @click="rollDice, toggleOption"
                >Roll d20</span
            >
            <span
                class="hover:bg-blue-950 p-2 flex items-center justify-center h-full"
                @click="toggleOption"
                >Add Character</span
            >
        </div>
    </div>
</template>

<script setup>
import { useStatusStore } from "../../stores/StatusStore";
import { ref } from "vue";

const statusStore = useStatusStore();
const characterName = ref("");
const diceThrow = ref("");
const barOptions = ref(true);

const insertCharacter = () => {
    if (characterName.value) {
        statusStore.addCharacter({
            id: new Date(Date.now()).getTime(),
            name: characterName.value,
            failures: 0,
            successess: 0,
        });
    }
    characterName.value = "";
};

const clearAll = () => {
    statusStore.clearAllSavings();
    diceThrow.value = "";
};

const rollDice = () => {
    diceThrow.value = Math.ceil(Math.random() * 20);
};

const toggleOption = () => {
    barOptions.value = !barOptions.value;
};
</script>

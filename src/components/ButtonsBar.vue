<template>
    <div class="fixed bottom-0 left-0 w-full">
        <div
            v-if="showMenu != ''"
            class="flex items-center px-4 w-full h-12 text-lg font-bold bg-blue-950 rounded-t-md"
        >
            <div
                v-if="showMenu === 'menu'"
                class="flex justify-around items-center w-full h-full"
            >
                <button
                    class="bg-gray-950 hover:bg-gray-900 rounded-md p-4 flex justify-center items-center h-8"
                    @click="removeAll"
                >
                    Remove all
                </button>
                <button
                    class="bg-gray-600 hover:bg-gray-500 rounded-md p-4 flex justify-center items-center h-8"
                    @click="clearAll"
                >
                    Clear all
                </button>
            </div>
            <div v-if="showMenu === 'd20'" class="w-full text-center">
                d20:
                <span
                    :class="{
                        'text-red-600': diceThrow === 1,
                        'text-green-600': diceThrow === 20,
                    }"
                    >{{ diceThrow }}</span
                >
            </div>
            <div
                v-if="showMenu === 'character'"
                class="flex w-full justify-between"
            >
                <input
                    type="text"
                    placeholder="New character's name"
                    class="bg-transparent border-b-2"
                    v-model="characterName"
                    @keyup.enter="insertCharacter"
                />
                <div class="flex justify-center pr-5">
                    <img
                        src="../assets/icons/add.svg"
                        alt="add"
                        width="24"
                        height="24"
                        class="hover:cursor-pointer"
                        @click="insertCharacter"
                    />
                </div>
            </div>
        </div>
        <div
            class="grid grid-cols-3 h-12 items-center bg-oxford-blue hover:cursor-pointer"
        >
            <span
                class="w-full h-full flex items-center justify-center hover:bg-blue-950"
                @click="toggleOption('menu')"
            >
                <img
                    src="../assets/icons/menu.svg"
                    alt="Menu"
                    class="flex justify-center"
                    width="32"
                    height="32"
                />
            </span>
            <span
                class="w-full h-full flex items-center justify-center hover:bg-blue-950 animate-pulse"
                @click="rollDice(), toggleOption('d20')"
            >
                <img
                    src="../assets/icons/d20.svg"
                    alt="Roll d20"
                    class="flex justify-center"
                    width="32"
                    height="32"
                />
            </span>
            <span
                class="w-full h-full flex items-center justify-center hover:bg-blue-950"
                @click="toggleOption('character')"
            >
                <img
                    src="../assets/icons/person.svg"
                    alt="Add Character"
                    class="flex justify-center"
                    width="32"
                    height="32"
                />
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStatusStore } from "../../stores/StatusStore";

const statusStore = useStatusStore();
const characterName = ref("");
const diceThrow = ref("");
const showMenu = ref("");

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

const toggleOption = (option) => {
    if (showMenu.value === "menu" || showMenu.value === "character") {
        if (option != showMenu.value) {
            showMenu.value = option;
            return;
        }
        showMenu.value = "";
        return;
    }
    showMenu.value = option;
};
const clearAll = () => {
    statusStore.clearAllSavings();
    diceThrow.value = "";
    showMenu.value = "";
};

const removeAll = () => {
    statusStore.removeAllCharacters();
    showMenu.value = "";
};

const rollDice = () => {
    diceThrow.value = Math.ceil(Math.random() * 20);
};
</script>

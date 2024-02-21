<template>
    <div
        class="flex flex-col min-w-80 h-60 rounded-lg justify-around items-start px-5 bg-oxford-blue"
    >
        <div class="flex justify-between w-full">
            <input
                type="text"
                placeholder="New character's name"
                class="bg-transparent border-b-2"
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
        <div class="flex flex-col w-full">
            <div class="text-center">Roll d20</div>
            <div class="flex gap-x-2">
                <img
                    src="../assets/icons/d20.svg"
                    alt="Roll d20"
                    class="hover:cursor-pointer animate-pulse"
                    width="40"
                    height="40"
                    @click="rollDice(), toggleOption('d20')"
                />

                <span
                    class="flex justify-center items-center self-center h-3/4 bg-blue-950 w-full rounded-md text-xl font-semibold"
                    :class="{
                        'text-red-600': diceThrow === 1,
                        'text-green-600': diceThrow === 20,
                    }"
                >
                    {{ diceThrow }}
                </span>
            </div>
        </div>
        <div class="flex justify-evenly w-full">
            <button
                class="bg-gray-600 hover:bg-gray-500 rounded-md p-4 flex justify-center items-center h-8"
                @click="clearAll"
            >
                Clear all
            </button>
            <button
                class="bg-gray-950 hover:bg-gray-900 rounded-md p-4 flex justify-center items-center h-8"
                @click="removeAll"
            >
                Remove all
            </button>
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

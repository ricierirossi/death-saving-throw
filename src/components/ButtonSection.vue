<template>
    <div
        class="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 px-8 py-4 rounded-md bg-transparent-black text-zinc-300 md:mt-0"
    >
        <div
            class="flex gap-x-3 bg-slate-800 py-2 px-4 rounded-md col-start-1 col-span-2"
        >
            <input
                type="text"
                placeholder="Insert character name"
                class="text-zinc-300 bg-transparent border-b-2 flex-grow"
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
        <div class="flex flex-col col-start-1 col-span-2">
            <button
                class="bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-md"
                @click="rollDice"
            >
                Saving Throw
            </button>
            <div class="flex justify-center min-h-7">
                <span
                    class="text-center text-lg font-bold bg-blue-950 rounded-b-md min-w-64"
                    :class="{
                        'text-red-600': diceThrow === 1,
                        'text-green-600': diceThrow === 20,
                    }"
                >
                    {{ diceThrow }}
                </span>
            </div>
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
const characterName = ref("");
const diceThrow = ref("");

const insertCharacter = () => {
    if (characterName.value) {
        statusStore.addCharacter({
            id: new Date(Date.now()).getTime(),
            name: characterName.value,
            failures: 0,
            successess: 0,
            status: "",
            selected: false,
        });
    }
    characterName.value = "";
};

const clearSomeSavings = () => {
    statusStore.clearSomeSavings();
};

const clearAll = () => {
    statusStore.clearAllSavings();
    diceThrow.value = "";
};

const removeCharacters = () => {
    statusStore.deleteCharacters();
};

const rollDice = () => {
    diceThrow.value = Math.ceil(Math.random() * 20);
};

const addFailure = () => {
    statusStore.addCharacterFailure();
};

const addSuccess = () => {
    statusStore.addCharacterSuccess();
};
</script>

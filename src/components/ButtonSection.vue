<template>
    <div
        class="absolute md:static bottom-0 w-full md:max-w-96 grid grid-cols-2 gap-3 p-2 md:rounded-md bg-transparent-blue"
    >
        <div
            class="col-start-1 col-span-2 flex gap-3 p-2 rounded-md bg-slate-800 max-w-96 justify-self-center w-full"
        >
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
            class="col-start-1 col-span-2 flex flex-col max-w-96 justify-self-center w-full"
        >
            <button
                class="col-start-1 col-span-2 bg-blue-900 hover:bg-blue-800 py-2 px-4 rounded-md"
                @click="rollDice"
            >
                Saving Throw
            </button>
            <div class="flex justify-center">
                <span
                    class="flex justify-center items-center w-80 h-10 text-lg font-bold bg-blue-950 rounded-b-md"
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
            class="bg-red-700 hover:bg-red-600 py-2 px-4 rounded-md text-white max-w-48 justify-self-end w-full"
            @click="addFailure"
        >
            +1 Failure
        </button>
        <button
            class="bg-green-700 hover:bg-green-600 py-2 px-4 rounded-md text-white max-w-48"
            @click="addSuccess"
        >
            +1 Success
        </button>

        <button
            class="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md max-w-48 justify-self-end w-full"
            @click="clearSomeSavings"
        >
            Clear
        </button>
        <button
            class="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md max-w-48"
            @click="clearAll"
        >
            Clear all
        </button>
        <button
            class="col-start-1 col-span-2 bg-red-900 hover:bg-red-800 py-2 px-4 rounded-md text-white max-w-96 justify-self-center w-full"
            @click="removeCharacters"
        >
            Remove Character
        </button>
        <div class="flex gap-x-4 col-start-1 col-span-2 justify-self-end">
            <buttons class="hover:cursor-pointer">About</buttons>
            <buttons class="hover:cursor-pointer">Help</buttons>
        </div>
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

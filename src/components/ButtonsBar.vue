<template>
    <div class="absolute bottom-0 w-full">
        <div
            class="flex items-center px-4 w-full h-10 text-lg font-bold bg-blue-950 rounded-t-md"
        >
            <div v-if="!showD20" class="flex w-full justify-between">
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
            <div
                v-if="showD20"
                class="w-full text-center"
                :class="{
                    'text-red-600': diceThrow === 1,
                    'text-green-600': diceThrow === 20,
                }"
            >
                {{ diceThrow }}
            </div>
        </div>
        <div
            class="bg-strong-blue grid grid-cols-3 text-center hover:cursor-pointer"
        >
            <span
                class="hover:bg-blue-950 p-2 flex items-center justify-center h-full"
                @click="clearAll"
                >Clear All</span
            >

            <span
                class="hover:bg-blue-950 p-2 flex items-center justify-center h-full"
                @click="rollDice(), (showD20 = true)"
                >Roll d20</span
            >
            <span
                class="hover:bg-blue-950 p-2 flex items-center justify-center h-full"
                @click="showD20 = false"
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
const showD20 = ref(false);

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
</script>

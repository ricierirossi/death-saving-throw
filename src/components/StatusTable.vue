<template>
    <div class="px-8 py-4 rounded-md bg-transparent-black text-zinc-300">
        <div class="grid">
            <div class="grid grid-cols-7 text-center">
                <span></span>
                <span>Character</span>
                <span>Failures</span>
                <span>Successes</span>
                <span>Status</span>
            </div>
            <div
                v-for="(character, key) in statusStore.characters"
                :key="character.id"
            >
                <div class="grid grid-cols-7 text-center">
                    <span>{{ character.name }}</span>
                    <span>
                        <span
                            v-for="failures in character.failures"
                            class="material-symbols-outlined hover:cursor-pointer text-red-800"
                            >skull</span
                        >
                    </span>
                    <span>
                        <span
                            v-for="failures in character.successess"
                            class="material-symbols-outlined hover:cursor-pointer text-green-800"
                            >health_and_safety</span
                        >
                    </span>
                    <span>{{ character.status }}</span>
                    <button
                        class="bg-red-900 rounded-md hover:bg-red-800"
                        @click="addFailure(key)"
                    >
                        +1 Failure
                    </button>
                    <button
                        class="bg-green-900 rounded-md hover:bg-green-800"
                        @click="addSuccess(key)"
                    >
                        +1 Success
                    </button>
                </div>
            </div>
        </div>
        <div class="flex mt-6 gap-x-3">
            <input
                type="text"
                placeholder="Insert character name"
                class="text-zinc-300 bg-transparent border-b-2"
                v-model="charName"
            />
            <span
                class="material-symbols-outlined hover:cursor-pointer"
                @click="insertChar"
                >add_circle</span
            >
        </div>
    </div>
</template>
<script setup>
import { useStatusStore } from "../../stores/StatusStore";
import { ref } from "vue";

const statusStore = useStatusStore();
const charName = ref("");

const insertChar = () => {
    if (charName.value) {
        statusStore.addCharacter({
            id: new Date(Date.now()).getTime(),
            name: charName.value,
            failures: 0,
            successess: 0,
            status: "",
        });
    }
    charName.value = "";
};

const addFailure = (characterKey) => {
    statusStore.addCharacterFail(characterKey);
};

const addSuccess = (characterKey) => {
    statusStore.addCharacterSuccess(characterKey);
};
</script>

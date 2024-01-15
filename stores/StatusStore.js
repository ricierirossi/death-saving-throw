import { defineStore } from "pinia";

export const useStatusStore = defineStore("savings", {
    state: () => ({
        characters: [
            {
                id: 0,
                name: "Yix",
                failures: 2,
                successess: 2,
                status: "Risky",
            },
            {
                id: 1,
                name: "Varis",
                failures: 3,
                successess: 2,
                status: "Dead",
            },
            {
                id: 2,
                name: "Kriv",
                failures: 0,
                successess: 3,
                status: "Alive",
            },
            {
                id: 3,
                name: "Galaeril",
                failures: 0,
                successess: 0,
                status: "",
            },
        ],
    }),
    actions: {
        addCharacter(character) {
            this.characters.push(character);
        },
        addCharacterFail(characterKey) {
            this.characters[characterKey].failures < 3
                ? this.characters[characterKey].failures++
                : "";
        },
        addCharacterSuccess(characterKey) {
            this.characters[characterKey].successess < 3
                ? this.characters[characterKey].successess++
                : "";
        },
        clearAllSavings() {
            this.characters.forEach((character) => {
                character.failures = 0;
                character.successess = 0;
            });
        },
    },
    getters: {
        statusChange: (state) => {
            state.characters.forEach((character) => {
                if (character.failures === 0 && character.successess === 0) {
                    return (character.status = "");
                }
                if (character.failures === 3 && character.successess === 3) {
                    return (character.status = "Schrodinger's cat");
                }
                if (character.failures === 3) {
                    return (character.status = "Dead");
                }
                if (character.successess === 3) {
                    return (character.status = "Alive");
                }
                return (character.status = "Risky");
            });
        },
    },
});

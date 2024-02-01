import { defineStore } from "pinia";

export const useStatusStore = defineStore("savings", {
    state: () => ({
        characters: JSON.parse(localStorage.getItem("characters")) || [],
    }),
    actions: {
        persistToLocalStorage() {
            localStorage.setItem("characters", JSON.stringify(this.characters));
        },
        addCharacter(character) {
            this.characters.push(character);
            this.persistToLocalStorage();
        },
        addCharacterFailure(selectedID) {
            this.characters.forEach((character) => {
                if (character.id === selectedID) {
                    character.failures < 3 ? character.failures++ : "";
                }
            });
            this.persistToLocalStorage();
        },
        removeCharacterFailure(selectedID) {
            this.characters.forEach((character) => {
                if (character.id === selectedID) {
                    character.failures > 0 ? character.failures-- : "";
                }
            });
            this.persistToLocalStorage();
        },
        addCharacterSuccess(selectedID) {
            this.characters.forEach((character) => {
                if (character.id === selectedID) {
                    character.successess < 3 ? character.successess++ : "";
                }
            });
            this.persistToLocalStorage();
        },
        removeCharacterSuccess(selectedID) {
            this.characters.forEach((character) => {
                if (character.id === selectedID) {
                    character.successess > 0 ? character.successess-- : "";
                }
            });
            this.persistToLocalStorage();
        },
        clearSomeSavings() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.failures = 0;
                    character.successess = 0;
                }
            });
            this.persistToLocalStorage();
        },
        clearAllSavings() {
            this.characters.forEach((character) => {
                character.failures = 0;
                character.successess = 0;
            });
            this.persistToLocalStorage();
        },
        selectedCharacter(characterID) {
            this.characters.forEach((character) => {
                if (character.id === characterID) {
                    character.selected = !character.selected;
                }
            });
        },
        deleteCharacters() {
            this.characters = this.characters.filter((character) => {
                return character.selected === false;
            });
            this.persistToLocalStorage();
        },
    },
});

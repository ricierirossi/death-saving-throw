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
        addCharacterFailure() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.failures < 3 ? character.failures++ : "";
                }
                character.selected = false;
            });
            this.statusChanges();
            this.persistToLocalStorage();
        },
        removeCharacterFailure() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.failures > 0 ? character.failures-- : "";
                }
                character.selected = false;
            });
            this.statusChanges();
            this.persistToLocalStorage();
        },
        addCharacterSuccess() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.successess < 3 ? character.successess++ : "";
                }
                character.selected = false;
            });
            this.statusChanges();
            this.persistToLocalStorage();
        },
        removeCharacterSuccess() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.successess > 0 ? character.successess-- : "";
                }
                character.selected = false;
            });
            this.statusChanges();
            this.persistToLocalStorage();
        },
        clearSomeSavings() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.failures = 0;
                    character.successess = 0;
                    character.status = "";
                    character.selected = false;
                }
            });
            this.persistToLocalStorage();
        },
        clearAllSavings() {
            this.characters.forEach((character) => {
                character.failures = 0;
                character.successess = 0;
                character.status = "";
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

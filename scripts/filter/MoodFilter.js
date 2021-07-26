import { getMoodEntries } from "../database.js"

export const MoodFilter = () => {
    let allMoods = getMoodEntries()
    
    
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--${mood.label}">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
            <input type="radio" name="moodFilter" value="all"/>
            <label for="moodFilter--all">Show All</label>
        </fieldset>
        `
    
}

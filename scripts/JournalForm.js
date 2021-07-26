import { getMoodEntries, saveJournalEntry } from "./database.js"
export const DailyJournalEntry = () =>{
    const allMoods = getMoodEntries();
    return `
    <h3>Journal-Form</h3>
    <article>
        <label for="entryDate">Date</label>
        <input type="date" name="entryDate" class="entryForm__date">
    </article>
    <article>
        <label for="concepts">Concepts covered</label>
        <input type="text" name="concepts" class="entryForm__concepts">
    </article>
    <article>
        <label for="entry">Journal Entry</label>
        <textarea name="entry" class="entryForm__entry"></textarea>
    </article>
    <article>
        <label for="Mood">Mood for the day</label>
        <select name="Mood" class="entryForm__mood">
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        </select>
    </article>
    <input type="submit" value="Submit" class="entryForm__submit" id="submit--entry">
    `
    
}
const addJournalEntry = () =>{
    const journalObject = {
        "date": document.querySelector(".entryForm__date").value,
        "concept": document.querySelector(".entryForm__concepts").value,
        "entry": document.querySelector(".entryForm__entry").value,
        "moodId": parseInt(document.querySelector(".entryForm__mood").value)
    }
    saveJournalEntry(journalObject)
}
document.addEventListener(
    "click",
    (clickedEvent) =>{
        
        const element = clickedEvent.target;
        if (element.id === "submit--entry"){
            clickedEvent.preventDefault();
            addJournalEntry();
            location.reload();
        }
        
    }
)
import { DailyJournal } from "./DailyJournal.js"
import {DailyJournalEntry } from "./JournalForm.js"
import {getEntries, getJournalEntries, getMoods, deleteJournalEntry } from "./database.js"

const entryContainer = document.querySelector("#entries")
const journalForm = document.querySelector("#formContainer")
const render = () => {
    getMoods()
    
    getEntries().then(() => {
        
        journalForm.innerHTML = DailyJournalEntry()
        entryContainer.innerHTML = DailyJournal()
        console.log(getJournalEntries())
    })
    
}
render()

import { Entries } from "./Entries.js"
import { getJournalEntries } from "./database.js"
export const DailyJournal = () => {
    return `
        <div id="entrylistContainer"class="entryList">
            ${ Entries(getJournalEntries()) }
        </div>
    `
}

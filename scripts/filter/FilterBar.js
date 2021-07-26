import { MoodFilter } from "./MoodFilter.js"
import { getMoods, getJournalEntries } from "../database.js"
import { Entries } from "../Entries.js"
/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const contentTarget = document.querySelector(".filters")

const FilterBar = () => {
    const render = () => {
        getMoods().then(() => 
        contentTarget.innerHTML = `
            ${MoodFilter()}
        `)
    }

    render()
}
FilterBar()

document.addEventListener(
    "change",
    (e) =>{
        
        if (e.target.name === "moodFilter"){
            let entries = getJournalEntries()
            const filteredList = document.querySelector("#entrylistContainer")
            const render = (arr) =>{
                filteredList.innerHTML = Entries(arr)
            }
            if(e.target.value === "all"){
                render(entries)
            }else{
                let filteredEntries = entries.filter(entry => entry.moodId === parseInt(e.target.value));
            
                render(filteredEntries)
            }
            
            
            
        }
        
    }
)
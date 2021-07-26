import {getJournalEntries, deleteJournalEntry  } from "./database.js"

;
export  const Entries = (entries) => {
    let journalEntries = entries;
    
    let htmlString = ``;
    
    for (const entry of journalEntries){
        htmlString += `<div class ="individualEntry">
        <h3>${entry.concept}<h3>
        <p>${entry.entry}</p>
        <p>My mood: ${entry.mood.label}</p>
        <p>${entry.date}</p>
        <input type="button" value="Edit"  id="submit--entry">
        <input type="button" value="Delete" class="formList__delete" id="delete__entry--${entry.id}">
        </div> <br>
        `
    }
    
    htmlString += ``
    return htmlString
}
    
document.addEventListener(
    "click",
    (clickedElement) =>{
        const element = clickedElement.target;
        if (element.id.startsWith("delete__entry")){
            const [,elementId] = element.id.split("--")
            const journalEntries = getJournalEntries();
            for (const entry of journalEntries){
                if (entry.id === parseInt(elementId)){
                    deleteJournalEntry(entry.id)
                    location.reload();
                } 
            }
                
            
        }
        
        
    }
)






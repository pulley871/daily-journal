/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    entries: [],
    moods: []
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(res => res.json())  // Parse as JSON
        .then(entries => {
            // What should happen when we finally have the array?
            database.entries = entries
            
        })
}
export const getMoods = () => {
    return fetch("http://localhost:8088/moods") // Fetch from the API
        .then(res => res.json())  // Parse as JSON
        .then(moods => {
            // What should happen when we finally have the array?
            database.moods = moods
            
        })
}

export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}
export const getMoodEntries = () => {
    const copyOfData = database.moods.map(mood => ({...mood}))
    return copyOfData
}
export const saveJournalEntry = (entryObject) =>{
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/entries?_expand=mood", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
        .then(
            () => {
                //  Get all journal entries
                getEntries()
            }
        )
        .then(
            () => {
                //  Broadcast the state change event
            }
        )

}
export const deleteJournalEntry = (objectId) =>{
    // Use `fetch` with the POST method to add your entry to your API
    fetch(`http://localhost:8088/entries/${objectId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: null
    })
    .then(getEntries())
    .then()
       

}
/**
 * this class has a plus button on which when it is cilcked it fetches sone data from the 1st json object and if we click on any
 * one of the data then that div will be prepended on to the button and if the data that is preprended is clicked then the json2 data will be displayed then 
 * if we click on the json2 data  then it will display in json
 */

class ClsJsonDataDisplay {
    #baseContainer
    #json1Div
    #json2Div
    #dataDisplayDiv
    #button
    #jsonData1
    #jsonData2

    constructor(param) {
        this.#baseContainer = $('<div>').
            css({ width: '100%', height: '500px', overflow: 'hidden' })

        this.#json1Div = $('<div>').
            css({ width: '100%', height: '110px', overflow: 'hidden', border: '2px solid black', borderBottom: 'none', display: 'flex', justifyConten: 'center', alignItems: 'center', padding: '5px' })
        this.#json2Div = $('<div>').
            css({ width: '100%', height: '110px', overflow: 'hidden', border: '2px solid black', borderBottom: 'none', display: 'flex' })

        this.#dataDisplayDiv = $('<div>').
            css({ width: '100%', height: '230', overflow: 'hidden', border: '2px solid black' })
        this.#button = $('<button>').
            text('+').
            css({ width: '80px', height: '80', cursor: 'pointer', fontSize: '35px', border: 'none', backgroundColor: 'DodgerBlue', color: 'white', borderRadius: '5px' })
        this.#json1Div.append(this.#button)
        this.#baseContainer.append(this.#json1Div, this.#json2Div, this.#dataDisplayDiv)


        this.#jsonData1 = [{ 'id': 101, 'name': "Doctors" }, { 'id': 102, 'name': "staff Nurse" }, { 'id': 103, 'name': "Helpers" }]
        this.#jsonData2 = [{ 'id': 201, 'name': "rahul" }, { 'id': 202, 'name': "sita" }, { 'id': 203, 'name': "priya" }]

        this.onClick()

    }
    onClick = () => {
        //on clicking the 
        this.#button.click(() => {
            // Clear existing cardDiv
            this.#dataDisplayDiv.empty()

            // Create a new cardDiv for each item in jsonData1
            this.#jsonData1.forEach((item) => {
                let cardDiv = $('<div>').
                    css({ width: '10%', height: '90px', overflow: 'hidden', padding: '5px', backgroundColor: 'none', border: 'none', borderRadius: "5px", float: 'left', cursor: 'pointer', margin: "5px", backgroundColor: 'violet', color: 'white' })
                cardDiv.append($('<p>').text(item.id))
                cardDiv.append($('<p>').text(item.name))
                this.#dataDisplayDiv.append(cardDiv).on('click', (event) => {
                    // Prepend the clicked cardDiv to #json1Div
                    $(this.#json1Div).prepend($(event.target).closest('div'));
                    this.#dataDisplayDiv.empty()

                    // Add event listener to the cardDiv
                    $(event.target).closest('div').on('click', () => {
                        this.displayJson2Data();
                    });
                });

            })

        })

    }

    displayJson2Data = () => {
        // Clear existing data in #dataDisplayDiv
        this.#dataDisplayDiv.empty();

        // Create a new div for each item in jsonData2
        this.#jsonData2.forEach((item) => {
            let div = $('<div>').
                css({ width: '10%', height: '90px', overflow: 'hidden', padding: '5px', backgroundColor: 'none', border: 'none', borderRadius: "5px", float: 'left', cursor: 'pointer', margin: "5px", backgroundColor: 'violet', color: 'white' })
            div.append($('<p>').text(item.id))
            div.append($('<p>').text(item.name))
            this.#dataDisplayDiv.append(div).on('click', (event) => {
                // Prepend the clicked cardDiv to #json2Div
                $(this.#json2Div).prepend($(event.target).closest('div'));
            });
        })

    }



    getDesign = () => {
        return this.#baseContainer
    }

}
let obj=[]
obj.push(new ClsJsonDataDisplay())
// obj.push(new ClsJsonDataDisplay)


obj.forEach((m)=>{
    $('body').append( m.getDesign())
})




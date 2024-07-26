/**
 * this class has a plus button on which when it is cilcked it fetches sone data from the 1st json object and if we click on any
 * one of the data then that div will be prepended on to the button and if the data that is preprended is clicked then the json2 data will be displayed then 
 * if we click on the json2 data  then it will display in json div2
 */

class ClsJsonDataDisplay {
    #baseContainer
    #json1Div
    #json2Div
    #dataDisplayDiv
    #button
    #jsonDataCategory
    #doctorsData
    #staffNurseData
    #helpersData

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
            css({ width: '95px', height: '95', cursor: 'pointer', fontSize: '35px', border: 'none', backgroundColor: 'DodgerBlue', color: 'white', borderRadius: '50%' })
        this.#json1Div.append(this.#button)
        this.#baseContainer.append(this.#json1Div, this.#json2Div, this.#dataDisplayDiv)


        this.#jsonDataCategory = [{ 'id': 101, 'name': "Doctor" }, { 'id': 102, 'name': "staff Nurse" }, { 'id': 103, 'name': "Helper" }]
        this.#doctorsData = [{ 'id': 201, 'name': "rahul" }, { 'id': 202, 'name': "sita" }, { 'id': 203, 'name': "priya" }]
        this.#staffNurseData = [{ 'id': 301, 'name': "simran" }, { 'id': 302, 'name': 'neha' }, { 'id': 303, 'name': 'Laila' }]
        this.#helpersData = [{ 'id': 401, 'name': 'tanya' }, { 'id': 402, 'name': 'Arjun' }, { 'id': 403, 'name': 'kabir' }]
        this.rahulsData = [{ DocumentId: 1, type: 'Aadhar' }, { DocumentId: 2, type: 'studyCertificates' }, { DocumentId: 3, type: 'drivingLicence' }]
        this.onClick()

    }
    onClick = () => {
        //on clicking the + button 
        this.#button.click(() => {
            // Clear existing cardDiv
            this.#dataDisplayDiv.empty()

            // Create a new cardDiv for each item in jsonData1
            this.#jsonDataCategory.forEach((item) => {
                let cardDiv = $('<div>').
                    css({ width: '10%', height: '90px', overflow: 'hidden', padding: '5px', backgroundColor: 'none', border: 'none', borderRadius: "5px", fontSize: '16px', float: 'left', textAlign: 'center', cursor: 'pointer', margin: "5px", backgroundColor: '#0FA4AF', color: 'white' })
                cardDiv.append($('<p>').text(item.id))
                cardDiv.append($('<p>').text(item.name))
                this.#dataDisplayDiv.append(cardDiv)
                // Prepend the clicked cardDiv to #json1Div
                // $(this.#json1Div).prepend($(event.target).closest('div'));
                // this.#dataDisplayDiv.empty()

                // Add event listener to the cardDiv
                cardDiv.on('click', () => {
                    console.log($(event.target).closest('div').find('p:last').text());
                    if ($(event.target).closest('div').find('p:last').text() == 'Doctor')
                        this.displayDoctorsData();
                    else if ($(event.target).closest('div').find('p:last').text() == 'staff Nurse')
                        this.displayStaffNurseData();
                    else if ($(event.target).closest('div').find('p:last').text() == 'Helper')
                        this.displayHelpersData();
                });


            })

        })

    }

    displayDoctorsData = () => {
        // Clear existing data in #dataDisplayDiv
        this.#dataDisplayDiv.empty();

        // Create a new div for each item in doctordata
        this.#doctorsData.forEach((item) => {
            let div = $('<div>')
                .css({
                    width: '10%',
                    height: '90px',
                    overflow: 'hidden',
                    padding: '5px',
                    backgroundColor: 'none',
                    border: 'none',
                    borderRadius: "5px",
                    textAlign: 'center',
                    float: 'left',
                    cursor: 'pointer',
                    margin: "5px",
                    backgroundColor: '#865D36',
                    color: 'white'
                })
            div.append($('<p>').text(item.id))
            div.append($('<p>').text(item.name))
            this.#dataDisplayDiv.append(div)
            div.on('click', (m) => {

                // Get the name data of that particular div
                let doctorId = $(m.target).closest('div').find('p').first().text()
                let doctorName = $(m.target).closest('div').find('p').last().text()
                let alteredDiv = $('<div>')
                    .css({
                        width: '10%',
                        height: '120px',
                        overflow: 'hidden',
                        padding: '5px',
                        backgroundColor: 'none',
                        border: 'none',
                        borderRadius: "5px",
                        float: 'left',
                        textAlign: 'center',
                        cursor: 'pointer',
                        margin: "5px",
                        backgroundColor: '#7e8c74',
                        color: '#f8f7e5'
                    })
                alteredDiv.append($('<p>').text(`categoryId:${this.#jsonDataCategory[0].id}`))
                alteredDiv.append($('<p>').text(`userId:${doctorId}`))
                alteredDiv.append($('<p>').text(`${this.#jsonDataCategory[0].name}:${doctorName}`))


                // Check for duplicates before appending
                let existingDivs = this.#json1Div.children();
                console.log(existingDivs)
                let isDuplicate = false;
                existingDivs.each((index, element) => {
                    let existingDivText = $(element).text();
                    let alteredDivText = alteredDiv.text();
                    if (existingDivText === alteredDivText) {
                        isDuplicate = true;
                        return false; // break the loop
                    }
                });

                if (!isDuplicate) {
                    // alteredDiv.insertBefore($(this.#button));
                    this.#button.before(alteredDiv);
                    this.#dataDisplayDiv.empty()
                    if (doctorId == 201) {
                        alteredDiv.on('click', () => { this.displayRahulsData(doctorId) })
                    }
                }
                else {
                    alert("Duplicate")
                }

                // Erase data present in #json1Div and add the altered div with the #button
                // this.#json1Div.prepend(alteredDiv)
                // 
            })
        })
    }


    displayRahulsData = (userId) => {
        this.#dataDisplayDiv.empty()
        this.rahulsData.forEach((m) => {
            const detailsDiv = $('<div>').css({
                width: '15%',
                height: '90px',
                overflow: 'hidden',
                padding: '5px',
                lineHeight:'10px',
                textAlign: 'center',
                backgroundColor: '#f0f0f0',
                border: 'none',
                borderRadius: '5px',
                float: 'left',
                cursor: 'pointer',
                margin: '5px',
                color: 'black'
            });

            detailsDiv.append($('<p>').text(`DocumentId : ${m.DocumentId}`));
            detailsDiv.append($('<p>').text(`documentType:${m.type}`));

            this.#dataDisplayDiv.append(detailsDiv);
            detailsDiv.on('click', (m) => {
                let clickedDiv = $(m.target).closest('div');
                let existingDivs = this.#json2Div.children();
                let isDuplicate = false;
                existingDivs.each((index, element) => {
                    let existingDivText = $(element).find('p').not(':first').text();
                    let clickedDivText = clickedDiv.text();
                    console.log(existingDivText);
                    console.log(clickedDivText);
                    if (existingDivText === clickedDivText) {
                        isDuplicate = true;
                        return false; // break the loop
                    }
                });
                if (!isDuplicate) {
                    clickedDiv.prepend($('<p>').text(`UserId : ${userId}`));
                    this.#json2Div.append(clickedDiv.clone()); // append a clone of the clicked div
                    this.#dataDisplayDiv.empty();
                    // $('#json1Div').not(':last').empty()
                    $(this.#json1Div).children().not(':last').remove()

                } else {
                    alert("Duplicate");
                }
            });
        })


    }

    displayStaffNurseData = () => {
        // Clear existing data in #dataDisplayDiv
        this.#dataDisplayDiv.empty()
        // Create a new div for each item in staffNurse
        this.#staffNurseData.forEach((m) => {
            let div = $('<div>').
                css({ width: '10%', height: '90px', overflow: 'hidden', padding: '5px', backgroundColor: 'none', border: 'none', borderRadius: "5px", float: 'left', cursor: 'pointer', margin: "5px", backgroundColor: '#865D36', color: 'white' })
            div.append($('<p>').text(m.id))
            div.append($('<p>').text(m.name))
            this.#dataDisplayDiv.append(div)
            div.on('click', (m) => {

                // Get the name data of that particular div
                let staffNurseId = $(m.target).closest('div').find('p').first().text()
                let staffNurseName = $(m.target).closest('div').find('p').last().text()
                let alteredDiv = $('<div>')
                    .css({
                        width: '10%',
                        height: '120px',
                        overflow: 'hidden',
                        padding: '5px',
                        backgroundColor: 'none',
                        border: 'none',
                        borderRadius: "5px",
                        float: 'left',
                        textAlign: 'center',
                        cursor: 'pointer',
                        margin: "5px",
                        backgroundColor: 'black',
                        color: 'red'
                    })
                alteredDiv.append($('<p>').text(`categoryId : ${this.#jsonDataCategory[1].id}`))
                alteredDiv.append($('<p>').text(`userId : ${staffNurseId}`))
                alteredDiv.append($('<p>').text(`${this.#jsonDataCategory[1].name} : ${staffNurseName}`))

                // Erase data present in #json1Div and add the altered div with the #button
                // this.#json1Div.prepend(alteredDiv)
                // this.#dataDisplayDiv.empty()
                // Check for duplicates before appending
                let existingDivs = this.#json1Div.children();
                console.log(existingDivs)
                let isDuplicate = false;
                existingDivs.each((index, element) => {
                    let existingDivText = $(element).text();
                    let alteredDivText = alteredDiv.text();
                    if (existingDivText === alteredDivText) {
                        isDuplicate = true;
                        return false; // break the loop
                    }
                });

                if (!isDuplicate) {
                    // alteredDiv.insertBefore($(this.#button));
                    this.#button.before(alteredDiv);

                    this.#dataDisplayDiv.empty()

                }
                else {
                    alert("Duplicate")
                }


            })
        })
    }
    displayHelpersData = () => {
        // Clear existing data in #dataDisplayDiv
        this.#dataDisplayDiv.empty()
        // Create a new div for each item in staffNurse
        this.#helpersData.forEach((m) => {
            let div = $('<div>').
                css({ width: '10%', height: '90px', overflow: 'hidden', padding: '5px', backgroundColor: 'none', border: 'none', borderRadius: "5px", float: 'left', cursor: 'pointer', margin: "5px", backgroundColor: '#865D36', color: 'white' })
            div.append($('<p>').text(m.id))
            div.append($('<p>').text(m.name))
            this.#dataDisplayDiv.append(div)
            div.on('click', (m) => {

                // Get the name data of that particular div
                let helperId = $(m.target).closest('div').find('p').first().text()
                let helperName = $(m.target).closest('div').find('p').last().text()
                let alteredDiv = $('<div>')
                    .css({
                        width: '10%',
                        height: '120px',
                        overflow: 'hidden',
                        padding: '5px',
                        backgroundColor: 'none',
                        border: 'none',
                        borderRadius: "5px",
                        float: 'left',
                        textAlign: 'center',
                        cursor: 'pointer',
                        margin: "5px",
                        backgroundColor: '#ff840085',
                        color: 'black'
                    })
                alteredDiv.append($('<p>').text(`categoryId : ${this.#jsonDataCategory[2].id}`))
                alteredDiv.append($('<p>').text(`userId : ${helperId}`))
                alteredDiv.append($('<p>').text(`${this.#jsonDataCategory[2].name} : ${helperName}`))

                // Erase data present in #json1Div and add the altered div with the #button
                // this.#json1Div.prepend(alteredDiv)
                // this.#dataDisplayDiv.empty()
                // Check for duplicates before appending
                let existingDivs = this.#json1Div.children();
                console.log(existingDivs)
                let isDuplicate = false;
                existingDivs.each((index, element) => {
                    let existingDivText = $(element).text();
                    let alteredDivText = alteredDiv.text();
                    if (existingDivText === alteredDivText) {
                        isDuplicate = true;
                        return false; // break the loop
                    }
                });

                if (!isDuplicate) {
                    // alteredDiv.insertBefore($(this.#button));
                    this.#button.before(alteredDiv);

                    this.#dataDisplayDiv.empty()
                }
                else {
                    alert("Duplicate")
                }


            })
        })
    }


    getDesign = () => {
        return this.#baseContainer
    }

}
let obj = []
obj.push(new ClsJsonDataDisplay())
// obj.push(new ClsJsonDataDisplay)


obj.forEach((m) => {
    $('body').append(m.getDesign())
})






// optimised code 1
/**
class ClsJsonDataDisplay {
    #baseContainer
    #json1Div
    #json2Div
    #dataDisplayDiv
    #button
    #jsonDataCategory
    #dataMap

    constructor(param) {
        this.#baseContainer = $('<div>')
            .css({ width: '100%', height: '700px', overflow: 'hidden' });

        this.#json1Div = $('<div>')
            .css({ width: '100%', height: '170px', overflow: 'hidden', border: '2px solid black', borderBottom: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' });

        this.#json2Div = $('<div>')
            .css({ width: '100%', height: '170px', overflow: 'hidden', border: '2px solid black', borderBottom: 'none', display: 'flex' });

        this.#dataDisplayDiv = $('<div>')
            .css({ width: '100%', height: '230px', overflow: 'hidden', border: '2px solid black' });

        this.#button = $('<button>')
            .text('+')
            .css({ width: '80px', height: '80px', cursor: 'pointer', fontSize: '35px', border: 'none', backgroundColor: 'DodgerBlue', color: 'white', borderRadius: '5px' });

        this.#json1Div.append(this.#button);
        this.#baseContainer.append(this.#json1Div, this.#json2Div, this.#dataDisplayDiv);

        this.#jsonDataCategory = [
            { id: 101, name: "Doctor" },
            { id: 102, name: "Staff Nurse" },
            { id: 103, name: "Helper" }
        ];

        this.#dataMap = {
            "Doctor": [
                { id: 201, name: "Rahul" },
                { id: 202, name: "Sita" },
                { id: 203, name: "Priya" }
            ],
            "Staff Nurse": [
                { id: 301, name: "Simran" },
                { id: 302, name: "Neha" },
                { id: 303, name: "Laila" }
            ],
            "Helper": [
                { id: 401, name: "Tanya" },
                { id: 402, name: "Arjun" },
                { id: 403, name: "Kabir" }
            ]
        };

        this.onClick();
    }

    onClick = () => {
        this.#button.click(() => {
            this.#dataDisplayDiv.empty();
            this.#jsonDataCategory.forEach((item) => {
                const cardDiv = this.createCardDiv(item.id, item.name);
                this.#dataDisplayDiv.append(cardDiv);

                cardDiv.on('click', () => {
                    const category = $(event.target).closest('div').find('p:last').text();
                    this.displayData(this.#dataMap[category], category);
                });
            });
        });
    }

    createCardDiv = (id, name) => {
        return $('<div>')
            .css({ width: '10%', height: '90px', overflow: 'hidden', padding: '5px', backgroundColor: '#0FA4AF', border: 'none', borderRadius: "5px", fontSize: '16px', float: 'left', textAlign: 'center', cursor: 'pointer', margin: "5px", color: 'white' })
            .append($('<p>').text(id))
            .append($('<p>').text(name));
    }

    displayData = (data, category) => {
        this.#dataDisplayDiv.empty();
        data.forEach((item) => {
            const div = this.createDataDiv(item.id, item.name, category);
            this.#dataDisplayDiv.append(div);
            div.on('click', (m) => {
                const alteredDiv = this.createAlteredDiv(category, item.id, item.name);
                if (!this.isDuplicate(alteredDiv)) {
                    this.#button.before(alteredDiv);
                    this.#dataDisplayDiv.empty();
                } else {
                    alert("Duplicate");
                }
            });
        });
    }

    createDataDiv = (id, name, category) => {
        return $('<div>')
            .css({ width: '10%', height: '90px', overflow: 'hidden', padding: '5px', backgroundColor: '#865D36', border: 'none', borderRadius: "5px", float: 'left', textAlign: 'center', cursor: 'pointer', margin: "5px", color: 'white' })
            .append($('<p>').text(id))
            .append($('<p>').text(name));
    }

    createAlteredDiv = (category, id, name) => {
        return $('<div>')
            .css({ width: '10%', height: '120px', overflow: 'hidden', padding: '5px', backgroundColor: '#7e8c74', border: 'none', borderRadius: "5px", float: 'left', textAlign: 'center', cursor: 'pointer', margin: "5px", color: '#f8f7e5' })
            .append($('<p>').text(`categoryId:${this.#jsonDataCategory.find(cat => cat.name === category).id}`))
            .append($('<p>').text(`userId:${id}`))
            .append($('<p>').text(`${category}:${name}`));
    }

    isDuplicate = (alteredDiv) => {
        const existingDivs = this.#json1Div.children();
        let isDuplicate = false;
        existingDivs.each((index, element) => {
            if ($(element).text() === alteredDiv.text()) {
                isDuplicate = true;
                return false; // break the loop
            }
        });
        return isDuplicate;
    }

    getDesign = () => {
        return this.#baseContainer;
    }
}

const obj = [];
obj.push(new ClsJsonDataDisplay());

obj.forEach((m) => {
    $('body').append(m.getDesign());
});
 */

//optimised code 2
/*
class ClsJsonDataDisplay {
    #baseContainer
    #json1Div
    #json2Div
    #dataDisplayDiv
    #button
    #jsonDataCategory
    #dataMap
    #config

    constructor(config) {
        this.#config = config;

        this.#baseContainer = $('<div>')
            .css({ width: '100%', height: this.#config.baseContainerHeight, overflow: 'hidden' });

        this.#json1Div = $('<div>')
            .css({ 
                width: '100%', 
                height: this.#config.json1DivHeight, 
                overflow: 'hidden', 
                border: '2px solid black', 
                borderBottom: 'none', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '5px' 
            });

        this.#json2Div = $('<div>')
            .css({ 
                width: '100%', 
                height: this.#config.json2DivHeight, 
                overflow: 'hidden', 
                border: '2px solid black', 
                borderBottom: 'none', 
                display: 'flex' 
            });

        this.#dataDisplayDiv = $('<div>')
            .css({ 
                width: '100%', 
                height: this.#config.dataDisplayDivHeight, 
                overflow: 'hidden', 
                border: '2px solid black' 
            });

        this.#button = $('<button>')
            .text(this.#config.buttonText)
            .css({ 
                width: this.#config.buttonWidth, 
                height: this.#config.buttonHeight, 
                cursor: 'pointer', 
                fontSize: this.#config.buttonFontSize, 
                border: 'none', 
                backgroundColor: this.#config.buttonBackgroundColor, 
                color: this.#config.buttonTextColor, 
                borderRadius: '5px' 
            });

        this.#json1Div.append(this.#button);
        this.#baseContainer.append(this.#json1Div, this.#json2Div, this.#dataDisplayDiv);

        this.#jsonDataCategory = this.#config.jsonDataCategory;
        this.#dataMap = this.#config.dataMap;

        this.onClick();
    }

    onClick = () => {
        this.#button.click(() => {
            this.#dataDisplayDiv.empty();
            this.#jsonDataCategory.forEach((item) => {
                const cardDiv = this.createCardDiv(item.id, item.name);
                this.#dataDisplayDiv.append(cardDiv);

                cardDiv.on('click', () => {
                    const category = $(event.target).closest('div').find('p:last').text();
                    this.displayData(this.#dataMap[category], category);
                });
            });
        });
    }

    createCardDiv = (id, name) => {
        return $('<div>')
            .css({ 
                width: this.#config.cardDivWidth, 
                height: this.#config.cardDivHeight, 
                overflow: 'hidden', 
                padding: '5px', 
                backgroundColor: this.#config.cardDivBackgroundColor, 
                border: 'none', 
                borderRadius: "5px", 
                fontSize: '16px', 
                float: 'left', 
                textAlign: 'center', 
                cursor: 'pointer', 
                margin: "5px", 
                color: 'white' 
            })
            .append($('<p>').text(id))
            .append($('<p>').text(name));
    }

    displayData = (data, category) => {
        this.#dataDisplayDiv.empty();
        data.forEach((item) => {
            const div = this.createDataDiv(item.id, item.name, category);
            this.#dataDisplayDiv.append(div);
            div.on('click', (m) => {
                const alteredDiv = this.createAlteredDiv(category, item.id, item.name);
                if (!this.isDuplicate(alteredDiv)) {
                    this.#button.before(alteredDiv);
                    this.#dataDisplayDiv.empty();
                } else {
                    alert("Duplicate");
                }
            });
        });
    }

    createDataDiv = (id, name, category) => {
        return $('<div>')
            .css({ 
                width: this.#config.dataDivWidth, 
                height: this.#config.dataDivHeight, 
                overflow: 'hidden', 
                padding: '5px', 
                backgroundColor: this.#config.dataDivBackgroundColor, 
                border: 'none', 
                borderRadius: "5px", 
                float: 'left', 
                textAlign: 'center', 
                cursor: 'pointer', 
                margin: "5px", 
                color: 'white' 
            })
            .append($('<p>').text(id))
            .append($('<p>').text(name));
    }

    createAlteredDiv = (category, id, name) => {
        return $('<div>')
            .css({ 
                width: this.#config.alteredDivWidth, 
                height: this.#config.alteredDivHeight, 
                overflow: 'hidden', 
                padding: '5px', 
                backgroundColor: this.#config.alteredDivBackgroundColor, 
                border: 'none', 
                borderRadius: "5px", 
                float: 'left', 
                textAlign: 'center', 
                cursor: 'pointer', 
                margin: "5px", 
                color: this.#config.alteredDivTextColor 
            })
            .append($('<p>').text(`categoryId:${this.#jsonDataCategory.find(cat => cat.name === category).id}`))
            .append($('<p>').text(`userId:${id}`))
            .append($('<p>').text(`${category}:${name}`));
    }

    isDuplicate = (alteredDiv) => {
        const existingDivs = this.#json1Div.children();
        let isDuplicate = false;
        existingDivs.each((index, element) => {
            if ($(element).text() === alteredDiv.text()) {
                isDuplicate = true;
                return false; // break the loop
            }
        });
        return isDuplicate;
    }

    getDesign = () => {
        return this.#baseContainer;
    }
}

const config = {
    baseContainerHeight: '700px',
    json1DivHeight: '170px',
    json2DivHeight: '170px',
    dataDisplayDivHeight: '230px',
    buttonText: '+',
    buttonWidth: '80px',
    buttonHeight: '80px',
    buttonFontSize: '35px',
    buttonBackgroundColor: 'DodgerBlue',
    buttonTextColor: 'white',
    cardDivWidth: '10%',
    cardDivHeight: '90px',
    cardDivBackgroundColor: '#0FA4AF',
    dataDivWidth: '10%',
    dataDivHeight: '90px',
    dataDivBackgroundColor: '#865D36',
    alteredDivWidth: '10%',
    alteredDivHeight: '120px',
    alteredDivBackgroundColor: '#7e8c74',
    alteredDivTextColor: '#f8f7e5',
    jsonDataCategory: [
        { id: 101, name: "Doctor" },
        { id: 102, name: "Staff Nurse" },
        { id: 103, name: "Helper" }
    ],
    dataMap: {
        "Doctor": [
            { id: 201, name: "Rahul" },
            { id: 202, name: "Sita" },
            { id: 203, name: "Priya" }
        ],
        "Staff Nurse": [
            { id: 301, name: "Simran" },
            { id: 302, name: "Neha" },
            { id: 303, name: "Laila" }
        ],
        "Helper": [
            { id: 401, name: "Tanya" },
            { id: 402, name: "Arjun" },
            { id: 403, name: "Kabir" }
        ]
    }
};

const obj = [];
obj.push(new ClsJsonDataDisplay(config));

obj.forEach((m) => {
    $('body').append(m.getDesign());
});
*/

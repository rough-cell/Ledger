class ClsJsonDataDisplay {
    #baseContainer;
    #json1Div;
    #json2Div;
    #dataDisplayDiv;
    #button;
    #jsonDataCategory;
    #dataMap;
    #rahulsData;

    constructor() {
        this.#baseContainer = $('<div>').css({
            width: '100%',
            height: '1000px',
            overflow: 'hidden'
        });

        this.#json1Div = $('<div>').css({
            width: '100%',
            height: '210px',
            overflow: 'hidden',
            border: '2px solid black',
            borderBottom: 'none',
            display: 'flex',
            
            alignItems: 'center',
            padding: '5px'
        });
        this.#json2Div = $('<div>').css({
            width: '100%',
            height: '310px',
            overflow: 'hidden',
            border: '2px solid black',
            borderBottom: 'none',
            display: 'flex'
        });
        this.#dataDisplayDiv = $('<div>').css({
            width: '100%',
            height: '350px',
            overflow: 'hidden',
            border: '2px solid black'
        });
        this.#button = $('<button>').text('+').css({
            width: '80px',
            height: '80px',
            cursor: 'pointer',
            fontSize: '35px',
            border: 'none',
            backgroundColor: 'DodgerBlue',
            color: 'white',
            borderRadius: '5px'
        });
        this.#json1Div.append(this.#button);
        this.#baseContainer.append(this.#json1Div, this.#json2Div, this.#dataDisplayDiv);

        this.#jsonDataCategory = [
            { id: 101, name: "Doctor" },
            { id: 102, name: "Staff Nurse" },
            { id: 103, name: "Helper" }
        ];

        this.#dataMap = {
            101: [
                { id: 201, name: "Rahul" },
                { id: 202, name: "Sita" },
                { id: 203, name: "Priya" }
            ],
            102: [
                { id: 301, name: "Simran" },
                { id: 302, name: "Neha" },
                { id: 303, name: "Laila" }
            ],
            103: [
                { id: 401, name: "Tanya" },
                { id: 402, name: "Arjun" },
                { id: 403, name: "Kabir" }
            ]
        };

        this.#rahulsData = {
            categoryId: 101,
            userId: 201,
            Designation: 'Doctor',
            age: 25,
            experience: '2 years',
            gender: 'male',
            casesDealt: 5,
            successRate: '90%',
            patientDetails: [
                {
                    id: 1,
                    patientName: 'Smith',
                    disease: 'heart surgery',
                    status: 'active',
                    age: 75,
                    occupation: 'lawyer',
                    gender: 'male',
                    address: 'Delhi',
                    phoneNo: '1234567890'
                },
                {
                    id: 2,
                    patientName: 'jack',
                    disease: 'heart surgery',
                    status: 'active',
                    age: 75,
                    occupation: 'lawyer',
                    gender: 'male',
                    address: 'Delhi',
                    phoneNo: '1234567890'
                },
                {
                    id: 3,
                    patientName: 'leo',
                    disease: 'heart surgery',
                    status: 'active',
                    age: 75,
                    occupation: 'lawyer',
                    gender: 'male',
                    address: 'Delhi',
                    phoneNo: '1234567890'
                }
            ]
        };

        this.onClick();
    }

    onClick = () => {
        this.#button.click(() => {
            this.#dataDisplayDiv.empty();

            this.#jsonDataCategory.forEach((item) => {
                let cardDiv = $('<div>').css({
                    width: '10%',
                    height: '90px',
                    overflow: 'hidden',
                    padding: '5px',
                    backgroundColor: '#0FA4AF',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    float: 'left',
                    textAlign: 'center',
                    cursor: 'pointer',
                    margin: '5px',
                    color: 'white'
                });
                cardDiv.append($('<p>').text(item.id));
                cardDiv.append($('<p>').text(item.name));
                this.#dataDisplayDiv.append(cardDiv);

                cardDiv.on('click', (event) => {
                    const categoryId = parseInt($(event.target).closest('div').find('p:first').text());
                    
                    this.displayData(categoryId);
                });
            });
        });
    }

    displayData = (categoryId) => {
        this.#dataDisplayDiv.empty();

        const data = this.#dataMap[categoryId] || [];

        data.forEach((item) => {
            let div = $('<div>').css({
                width: '10%',
                height: '90px',
                overflow: 'hidden',
                padding: '5px',
                backgroundColor: '#865D36',
                border: 'none',
                borderRadius: '5px',
                textAlign: 'center',
                float: 'left',
                cursor: 'pointer',
                margin: '5px',
                color: 'white'
            });
            div.append($('<p>').text(item.id));
            div.append($('<p>').text(item.name));
            this.#dataDisplayDiv.append(div);

            div.on('click', (event) => {
                const userId = parseInt($(event.target).closest('div').find('p:first').text());
                this.addUserDiv(categoryId, userId, item.name);
            });
        });
    }

    addUserDiv = (categoryId, userId, userName) => {
        let alteredDiv = $('<div>').css({
            width: '10%',
            height: '130px',
            overflow: 'hidden',
            padding: '5px',
            backgroundColor: '#7e8c74',
            border: 'none',
            borderRadius: '5px',
            float: 'left',
            textAlign: 'center',
            cursor: 'pointer',
            margin: '5px',
            color: '#f8f7e5'
        });
        alteredDiv.append($('<p>').text(`categoryId:${categoryId}`));
        alteredDiv.append($('<p>').text(`userId:${userId}`));
        alteredDiv.append($('<p>').text(`${this.#jsonDataCategory.find(cat => cat.id === categoryId).name}:${userName}`));

        const existingDivs = this.#json1Div.children();
        const isDuplicate = existingDivs.toArray().some(element => $(element).text() === alteredDiv.text());

        if (!isDuplicate) {
            this.#button.before(alteredDiv);
            this.#dataDisplayDiv.empty();

            if (userId === 201) {
                alteredDiv.on('click', () => this.displayRahulsData());
            }
        } else {
            alert("Duplicate");
        }
    }

    displayRahulsData = () => {
        const data = this.#rahulsData;
        this.#json2Div.empty();

        const detailsDiv = $('<div>').css({
            width: '100%',
            height: '95%',
            overflow: 'hidden',
            padding: '5px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '5px',
            float: 'left',
            cursor: 'pointer',
            margin: '5px',
            color: 'black'
        });

        detailsDiv.append($('<p>').text(`Name: Rahul`));
        detailsDiv.append($('<p>').text(`User ID: ${data.userId}`));
        detailsDiv.append($('<p>').text(`Category: Doctor`));
        detailsDiv.append($('<p>').text(`Age: ${data.age}`));
        detailsDiv.append($('<p>').text(`Experience: ${data.experience}`));
        detailsDiv.append($('<p>').text(`Gender: ${data.gender}`));
        detailsDiv.append($('<p>').text(`Cases Dealt: ${data.casesDealt}`));
        detailsDiv.append($('<p>').text(`Success Rate: ${data.successRate}`));

        this.#dataDisplayDiv.append(detailsDiv);
        detailsDiv.on('click', () => this.displayPatients(data.patientDetails));

    }

    displayPatients = (patients) => {
        this.#json2Div.empty();

        patients.forEach((patient) => {
            let patientCard = $('<div>').css({
                width: '15%',
                height: '300px',
                overflow: 'hidden',
                fontSize:'13px',
                padding: '5px',
                backgroundColor: '#865D36',
                border: 'none',
                borderRadius: '5px',
                float: 'left',
                cursor: 'pointer',
                margin: '5px',
                color: 'white'
            });

            patientCard.append($('<p>').text(`Patient ID: ${patient.id}`));
            patientCard.append($('<p>').text(`Patient Name: ${patient.patientName}`));
            patientCard.append($('<p>').text(`Disease: ${patient.disease}`));
            patientCard.append($('<p>').text(`Status: ${patient.status}`));
            patientCard.append($('<p>').text(`Age: ${patient.age}`));
            patientCard.append($('<p>').text(`Occupation: ${patient.occupation}`));
            patientCard.append($('<p>').text(`Gender: ${patient.gender}`));
            patientCard.append($('<p>').text(`Address: ${patient.address}`));
            patientCard.append($('<p>').text(`Phone No: ${patient.phoneNo}`));

            this.#json2Div.append(patientCard);
        });
    }

    getDesign = () => {
        return this.#baseContainer;
    }
}

let obj = [];
obj.push(new ClsJsonDataDisplay());

obj.forEach((m) => {
    $('body').append(m.getDesign());
});

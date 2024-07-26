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
      css({ width: '100%', height: '700px', overflow: 'hidden' })

    this.#json1Div = $('<div>').
      css({ width: '100%', height: '150px', overflow: 'hidden', border: '2px solid black', borderBottom: 'none', display: 'flex', justifyConten: 'center', alignItems: 'center', padding: '5px' })
    this.#json2Div = $('<div>').
      css({ width: '100%', height: '230px', overflow: 'hidden', border: '2px solid black', borderBottom: 'none', display: 'flex' })

    this.#dataDisplayDiv = $('<div>').
      css({ width: '100%', height: '305', overflow: 'hidden', border: '2px solid black' })
    this.#button = $('<button>').
      text('+').
      css({ width: '95px', height: '95', cursor: 'pointer', fontSize: '35px', border: 'none', backgroundColor: 'DodgerBlue', color: 'white', borderRadius: '5px' })
    this.#json1Div.append(this.#button)
    this.#baseContainer.append(this.#json1Div, this.#json2Div, this.#dataDisplayDiv)


    this.#jsonDataCategory = [{ 'id': 101, 'name': "Doctor" }, { 'id': 102, 'name': "staff Nurse" }, { 'id': 103, 'name': "Helper" }]
    this.#doctorsData = [{ 'id': 201, 'name': "rahul" }, { 'id': 202, 'name': "sita" }, { 'id': 203, 'name': "priya" }]
    this.#staffNurseData = [{ 'id': 301, 'name': "simran" }, { 'id': 302, 'name': 'neha' }, { 'id': 303, 'name': 'Laila' }]
    this.#helpersData = [{ 'id': 401, 'name': 'tanya' }, { 'id': 402, 'name': 'Arjun' }, { 'id': 403, 'name': 'kabir' }]
    this.rahulsData = {
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
          assigneddoctorID:201,
          assigneddoctorName:'Rahul',
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
          assigneddoctorID:201,
          assigneddoctorName:'Rahul',
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
          assigneddoctorID:201,
          assigneddoctorName:'Rahul',
          status: 'active',
          age: 75,
          occupation: 'lawyer',
          gender: 'male',
          address: 'Delhi',
          phoneNo: '1234567890'
        }
      ]
    };
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
            alteredDiv.on('click', () => { this.displayRahulsData() })
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


  displayRahulsData = () => {
    this.#dataDisplayDiv.empty()
    const detailsDiv = $('<div>').css({
      width: '50%',
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
    detailsDiv.append($('<p>').text(`User ID: ${this.rahulsData.userId}`));
    detailsDiv.append($('<p>').text(`Category: Doctor`));
    detailsDiv.append($('<p>').text(`Age: ${this.rahulsData.age}`));
    detailsDiv.append($('<p>').text(`Experience: ${this.rahulsData.experience}`));
    detailsDiv.append($('<p>').text(`Gender: ${this.rahulsData.gender}`));
    detailsDiv.append($('<p>').text(`Cases Dealt: ${this.rahulsData.casesDealt}`));
    detailsDiv.append($('<p>').text(`Success Rate: ${this.rahulsData.successRate}`));

    this.#dataDisplayDiv.append(detailsDiv);
    detailsDiv.on('click', () => this.displayPatients(this.rahulsData.patientDetails))
  }


  displayPatients = (patients) => {
    this.#json2Div.empty();
    patients.forEach((patient) => {
      let patientCard = $('<div>').css({
        width: '15%',
        height: '300px',
        overflow: 'hidden',
        fontSize: '13px',
        lineHeight:'5px',

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
      patientCard.append($('<p>').text(`assigneddoctorID: ${patient.assigneddoctorID}`));
      patientCard.append($('<p>').text(`assigneddoctorName: ${patient.assigneddoctorName}`));
      patientCard.append($('<p>').text(`Status: ${patient.status}`));
      patientCard.append($('<p>').text(`Age: ${patient.age}`));
      patientCard.append($('<p>').text(`Occupation: ${patient.occupation}`));
      patientCard.append($('<p>').text(`Gender: ${patient.gender}`));
      patientCard.append($('<p>').text(`Address: ${patient.address}`));
      patientCard.append($('<p>').text(`Phone No: ${patient.phoneNo}`));

      this.#json2Div.append(patientCard);
    });
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





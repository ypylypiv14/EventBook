let reservationForm = document.getElementById("reservForm");
reservForm.addEventListener('submit', reserv);


 function reserv(e){

    e.preventDefault();
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;

    const reserv_form = {
        date: date,
        description: description
    }

    console.log(reserv_form)
 }
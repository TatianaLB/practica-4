//fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=1')
//.then(request => request.text())
//.then(printData => console.log(printData));



let lat;
let long;

const getValueInput = () =>{
    //let lat = '36.7201600';
    lat = document.getElementById("input1").value;
    //let long = '-4.4203400';
    long = document.getElementById("input2").value;

    document.getElementById("valueInput").innerHTML = "Results for latitude = " + lat + "\n" + " & longitude = " + long;
}

async function API(){
    const url = 'https://api.sunrise-sunset.org/json?lat=';
    let urlmedio = '&lng=';
    let url_fin = '&formatted=1';
    try {
            let res = await fetch(url+lat+urlmedio+long+url_fin);
            return await res.json();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
}

//API();

async function getDatos(){
    let data = await API();
    let res = new Array(1);
    res.push(data.results.sunrise);
    res.push(data.results.sunset);
    res.push(data.results.solar_noon);
    res.push(data.results.day_length);
    res.push(data.results.civil_twilight_begin);
    res.push(data.results.civil_twilight_end);
    res.push(data.results.nautical_twilight_begin);
    res.push(data.results.nautical_twilight_end);
    res.push(data.results.astronomical_twilight_begin);
    res.push(data.results.astronomical_twilight_end);

    console.log(res);

    document.getElementById("mostrarInfo").innerHTML = "Sunrise:" + res[1] + "\n";
    document.getElementById("mostrarInfo2").innerHTML = "Sunset: " + res[2]+ "\n";
    document.getElementById("mostrarInfo3").innerHTML = "Solar_noon: " + res[3]+ "\n";
    document.getElementById("mostrarInfo4").innerHTML = "Length of day: " + res[4]+ "\n";
    document.getElementById("mostrarInfo5").innerHTML = "Civil twilight begin: " + res[5]+ "\n";
    document.getElementById("mostrarInfo6").innerHTML = "Civil twilight end: " + res[6]+ "\n";
    document.getElementById("mostrarInfo7").innerHTML = "Nautical twilight begin: " + res[7] + "\n";
    document.getElementById("mostrarInfo8").innerHTML = "Nautical twilight end:" + res[8] + "\n";
    document.getElementById("mostrarInfo9").innerHTML = "Astronomical twilight begin:" + res[9] + "\n";
    document.getElementById("mostrarInfo10").innerHTML = "Astronomical twilight end:" + res[10] + "\n";

}
function submitForm (){
      document.getDatos();;
    }

getDatos();

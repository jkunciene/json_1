var mok = new XMLHttpRequest();

mok.onreadystatechange = function () {

    if(mok.readyState === 4){

        var mokiniai = JSON.parse(mok.responseText);

        console.log(mokiniai);


    }
}
mok.open('GET', 'duomenys/mokiniai.json');
mok.send();
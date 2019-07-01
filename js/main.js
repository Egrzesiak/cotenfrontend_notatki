function welcome(name, secondName, age, isAlert)
{
    let ageMessage = ``;
    if(age<=29) ageMessage = `Chciałbym być tak młody jak TY! :-)`;
    else if (age>29 && age <=50) ageMessage = `Fajnie jest odczuwać części ciała o których dwudziestolatek jeszcze nie ma pojęcia? :-P`;
    else ageMessage = `Fajnie, że jesteś! :-)`;

    let message = `Witaj ${name} ${secondName} na mojej stronie! ${ageMessage}`;

    if(isAlert) return alert(message);
    else console.log(message); 
}

welcome(`Emil`,`Grzesiak`,`30`,true);

console.log("Siema Eniu!");
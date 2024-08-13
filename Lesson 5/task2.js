

let getValue = () => Number(document.querySelector("#temp").value);
let toCelsius = temp => 5/9 * (temp - 32);
let toFarangeit = temp => 9/5 * (temp + 32);


let convert = convert => {
    return () => {
        let temp = getValue();
        let value = convert(temp);
        showResult(value);
    }

}


document.querySelector("#btnToC").onclick = convert(toCelsius);

document.querySelector("#btnToF").onclick = convert(toFarangeit);

function showResult(result){
    let output = document.querySelector("#output");
    output.innerHTML = result;
}
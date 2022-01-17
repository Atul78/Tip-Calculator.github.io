

let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () =>{
    let totalbill = document.querySelector('#totalbill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    if (totalbill === '' || tipPercent == '0' || split == '0') {
        alert("Please Enter the Values");
        return;
    }
 
    let total = (totalbill * tipPercent / split);
    total = total.toFixed(2);
   
    document.getElementById('tip').innerHTML = total;
})
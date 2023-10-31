    let calculation=localStorage.getItem('calculation')|| '';
    output();
    function save(calculation){
        localStorage.setItem('calculation',calculation);
    }
    function update(value){
        calculation+=value;
        save(calculation);
        output();
    }
    function output(){
        document.querySelector('.display').innerText=`${calculation}`;
    }
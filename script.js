// Ex. 1
class AngajatIT {
    constructor(CNP, nume, prenume, vechime, departament){
        this.CNP = CNP;
        this.nume = nume;
        this.prenume = prenume;
        this.vechime = vechime;
        this.departament= departament;
    }
    afiseazaVarsta(){
        const anulNasterii = +this.CNP.slice(1,3);
        const dataCurenta = new Date();
        const currentYear = dataCurenta.getFullYear();
        let currentAge = String(currentYear - anulNasterii).slice(-2);

        const currentDay = dataCurenta.getDate();
        const dayFromCNP = Number(this.CNP.slice(5,7));
        const currentMonth = String(dataCurenta.getMonth() + 1).padStart(2, '0');
        const monthFromCNP = this.CNP.slice(3, 5);

        if(monthFromCNP >  currentMonth){
            currentAge--;
        }else if(monthFromCNP < currentMonth){
            currentAge;
        }else if(monthFromCNP === currentMonth){
            if(currentDay > dayFromCNP){
                currentAge;
            }else if(currentDay < dayFromCNP){
                currentAge--;
            }
        }
     
    }
    afiseazaAnulAngajarii(){
        console.log('Neimplementat');
        const currentYear = (new Date().getFullYear());
        const yearEmployee = this.vechime;
        const employeeSeniority = currentYear - yearEmployee;

        console.log(`The person was hired in: ${employeeSeniority}`);
    }
    lucreaza(){
        console.log('Neimplementat');
    }
}
class QA extends AngajatIT{
    constructor(CNP, nume, prenume, vechime){
        super(CNP, nume, prenume, vechime);
    }
    lucreaza(){
        console.log('Testeaza software');
    }
}
class Developer extends AngajatIT{
    constructor(CNP, nume, prenume, vechime){
        super(CNP, nume, prenume, vechime);
    }
    lucreaza(){
        console.log('Scrie cod');
    }
}
const firstAngajat = new AngajatIT('2980528051159', 'Popa', 'Adela', 2, 'web');
firstAngajat.afiseazaVarsta();
firstAngajat.afiseazaAnulAngajarii();
console.log(firstAngajat);
const qa1 = new QA('QA1');
qa1.lucreaza();
const dev1 = new Developer('Developer1');
dev1.lucreaza();

console.log(dev1.CNP);
console.log(dev1.nume);


//Ex 2
const api_url = 'https://randomuser.me/api/';  
      
async function getapi() {
    const response = await fetch(api_url);
    const data = await response.json();
    const result = data.results[0];
    document.querySelector('.user-picture').setAttribute('src', result.picture.large);
    document.getElementById('name-user').textContent = `${result.name.title} ${result.name.first} ${result.name.last}`;
    document.getElementById('gender-user').textContent = result.gender;
    document.getElementById('email-user').textContent = result.email;
    document.getElementById('age-user').textContent = result.dob.age;
}
document.getElementById('get-user-data').addEventListener('click', getapi);

//Ex 3
//varianta 1
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//varianta 2
const arrayFor = [];
for(let i=0; i<= 10; i++){
    arrayFor.push(i);
}
console.log(arrayFor);
const newArr = array.map( element => {
    return element + 15 * element;
});

//Varianta 1
const copyArr = [...newArr];
copyArr[2] = 22;
copyArr[6] = 66;
console.log(newArr);
console.log(copyArr);


//Varianta 2
const forEachArray = [];
array.forEach((element) =>{
    forEachArray.push(element + 15 * element)
})
console.log(forEachArray);

//varianta 3
const forArray = [];
for(const [element, i] of  array.entries()){
    forArray.push(element + 15 * element);
}
console.log(forArray);
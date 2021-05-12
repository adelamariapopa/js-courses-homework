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
        console.log('Neimplementat');
    }
    afiseazaAnulAngajarii(){
        console.log('Neimplementat');
    }
    lucreaza(){
        console.log('Neimplementat');
    }
}
class QA extends AngajatIT{
    lucreaza(){
        console.log('Testeaza software');
    }
}
class Developer extends AngajatIT{
    lucreaza(){
        console.log('Scrie cod');
    }
}
const qa1 = new QA('QA1');
qa1.lucreaza();
const dev1 = new Developer('Devepeloper1');
dev1.lucreaza();


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
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = array.map( element => {
    return element + 15 * element;
});

const copyArr = [...newArr];
copyArr[2] = 22;
copyArr[6] = 66;
console.log(newArr);
console.log(copyArr);
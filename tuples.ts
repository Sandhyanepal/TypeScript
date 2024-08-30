type PersonalInfo = readonly [string, number, boolean]

const displayPersonInfo = (person: PersonalInfo) => {
    const [name, age, hasLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasLicense ? "Yes" : "No"}`);
}

const user3: PersonalInfo = ['Sandhya', 22, true]
displayPersonInfo(user3)




type ProductInfo = readonly [string, number, number]

const displayProductInfo = (product: ProductInfo) => {
    const [name, price, quantity] = product;
    console.log(`Product: ${name}, Price: ${price}, Quantity: ${quantity}`)
}

const product3: ProductInfo = ["Nose Ring", 200, 2]
displayProductInfo(product3)
const product4: ProductInfo = ["Bracelate", 400, 2]
displayProductInfo(product4)



// Average of Subject
type SubjectGrade = readonly [number, number, number]

const displaySubjectAvg = (val: SubjectGrade) => {
    const avg = val.reduce((acc: number, currentVal: number) => acc + currentVal);
    console.log(avg/val.length);
}

const student3: SubjectGrade = [ 95, 87, 90]
displaySubjectAvg(student3)


// Weather application
type WeatherData = readonly [string, number, string]

const displayWeather = (weather: WeatherData) => {
    const [name, temperature, condition] = weather;
    console.log(`City: ${name}, Temperature: ${temperature} degree celsius, Condition: ${condition}`)
}

const weather: WeatherData = ["Sanepa", 29, "Warm"]
displayWeather(weather)
 

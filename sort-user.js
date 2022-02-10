const user = [
    { name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2 },
    { name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1 },
    { name: "Mrs Nowrin", birthYear: 1999, currentYear: 2022, district: "Chittagong", postNo: 1211, priority: 9 }
];

function cardDistribution(user) {
    const newResult = [];
    let serialNumber = 0;


    user.map(a => {
        let gift = '';
        const newUser = {};
        const lastTwo = a.district.slice(0, 2).toUpperCase();
        const yearString = (a.currentYear + '').slice(-2);
        const postString = (a.postNo + '').slice(0, 2);
        const birthString = a.birthYear + '';
        serialNumber += 1;
        if (serialNumber % 2 === 0) {
            gift = 'R'
        } else {
            gift = 'W'
        }
        const cardNumber = lastTwo + yearString + postString + birthString + '00000' + serialNumber;

        newUser.cardNumber = cardNumber;
        newUser.gift = gift;
        newUser.priority = a.priority;

        newResult.push(newUser);


    })
    const newResult2 = newResult.sort((a, b) => a.priority - b.priority);
    return newResult2

}
const userSerial = cardDistribution(user);
console.log(userSerial)


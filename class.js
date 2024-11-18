// First class
class Car {
    constructor(year) {

        this.year = year;
    }

    displayYear () {
        console.log("This is  a car from: " + this.year + " year");

    }
}

const benz = new Car("2024")
console.log(benz)
console.log(benz.displayYear())
benz.displayYear()



// class with two keys

class friends {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }

    // to introduce

    introduce(){
        console.log(`this is ${this.name} and i am ${this.gender}`)
    }

    OnlyName(){
        console.log(this.name)
    }

    OnlyGender(){
        console.log(this.gender)
    }

}

const  friendOne = new friends("john", "male")
console.log(friendOne)
console.log(friendOne.gender)
console.log(friendOne.name)
friendOne.introduce()
friendOne.OnlyName()
friendOne.OnlyGender()



class myFriends extends friends{
    constructor(name, gender, age) {
        super(name, gender)
        this.age = age
    }
    onlyAge(){
        console.log(`you are ${this.age} year old`)
    }
    
}

const johnFriend = new  myFriends("peter", "male", 25)
console.log(johnFriend)
johnFriend.introduce()
johnFriend.OnlyGender()
johnFriend.OnlyName()
johnFriend.onlyAge()


//create a class that holds records of all the students in a secondary school
/**it should have the keys of name , class , classTeacherName
 * then create an inherited class that keeps records of all the students in SS3 art
 * add the properties of gender and favourite subject
 * add methods to view the keys individually
 */
// student name

class  student {
    constructor(name, grade, teacherName) {
        this.name = name
        this.grade = grade
        this.teacherName =  teacherName
    }

        // introduce
        introduce(){
            console.log (`My name is ${this.name} i am grade ${this.grade} my teacher name is ${this.teacherName}`)
        }
        // view name
        OnlyName(){
            console.log(`My name is ${this.name}`)
        }
        // view grade
        OnlyGrade(){
            console.log(`My grade is ${this.grade}`)
        }
        // view  teacher name
        OnlyTeacherName(){
            console.log(`My teacher name is ${this.teacherName}`)
        }

}

const  studentOne = new student("john", "ss1", "mr. smith")
studentOne.introduce()
studentOne.OnlyName()
studentOne.OnlyGrade()
studentOne.OnlyTeacherName()


// student gender
class students extends student {
    constructor(name, grade, teacherName, gender, favouriteSubject) {
        super(name, grade, teacherName)
        this.gender = gender
        this.favouriteSubject = favouriteSubject
        this.grade =  grade

    }
    // view gender SS3
    OnlyGender(){
        console.log(`My gender is ${this.gender}`)
    }

    // view  favourite subject
    OnlyFavouriteSubject(){
        console.log(`My favourite subject is ${this.favouriteSubject}`)
    }
    // view grade SS3
    OnlyGradeSS3(){
        console.log(`My grade is ${this.grade}`)
    }

}

const   studentTwo = new students("Kenneth", "ss3", "mrs. Ruth", "male", "maths")
studentTwo.introduce()
studentTwo.OnlyGender()
studentTwo.OnlyFavouriteSubject()
studentTwo.OnlyGradeSS3()


  


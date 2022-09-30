//Creating the Media super class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
  }

  get title (){
    return this._title;
  }

  get isCheckedOut (){
    return this._isCheckedOut
  }

  get ratings() {
    return this._ratings
  }

  toggleCheckOutStatus (){
    this._isCheckedOut = !this.isCheckOut
  }

//Adding a method that gets the average of ratings
  getAverageRating (){
   let ratingsSum = this.ratings.reduce((accumulator, rating) => {
      return accumulator + rating
    }, 0)

    return ratingsSum/this.ratings.length
  }

  addRating (rating) {
    this.ratings.push(rating)
  }

//Creating a setter method for isCheckedOut property
  set isCheckedOut (newIsCheckedOut){
    return this._isCheckedOut = newIsCheckedOut
  }

}

//creating a book inheritance
class Book extends Media {
  constructor(author, title, pages){
    super(title)
    this._author = author;
    this._pages = pages;
    this._isChecked = false;
    this._ratings = []
  }

  get author(){
    return this._author
  }

  get pages(){
    return this._pages
  }
}

//creating a movie inheritance
class Movie extends Media {
  constructor (director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director () {
    return this._director
  }

  get runTime () {
    return this._runTime
  }
}


//test samples
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut =  false;
        this._ratings = [];
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    set isCheckedOut(val){
        this._isCheckedOut = val;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut == true ? this._isCheckedOut = false : this._isCheckedOut = true;
    }
    getAverageRating() {
        if (this._ratings.length == 0){return}
        else{
            function sum(accumulator, currentValue){return accumulator + currentValue;};
            let total = this._ratings.reduce(sum);
            let avg = total / this._ratings.length;
            return avg;
        }
    }
    addRating(rate) {
        if (typeof rate === 'number' && rate >= 0 && rate < 6){
            this._ratings.push(rate);
        }
        else {
            return 'Please enter a number between 0 and 5'
        }
        
    }
    
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
        this.type = 'book';
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this.type = 'movie';
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
        this.type = 'cd';
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
    shuffleSongs() {
        for (let i = this._songs.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.songs[i];
            this._songs[i] = this._songs[j];
            this._songs[j] = temp;
        }
    }
}

class Catalog {
    constructor() {
        this.catalog = [];
    }
    addToCatalog(media) {
        this.catalog.push(media);
    }
    removeFromCatalog(media) {
        let index = this.catalog.indexOf(media);
        if (index > -1) {
            this.catalog.splice(index, 1);
        }
    }
}

let catalog = new Catalog;
const historyOfEverything = new Book('A history of nearly everything','Bill Bryson',544);
catalog.addToCatalog(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

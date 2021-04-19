# Library-App
A simple implementation of classes and class extends to create a Library App where we can input different media types (Books, Movies, CDs) and store them in a Catalog, to later search for an item and do a check out or see if it is checked out.

These are the subclasses created for each media type:

![image](https://user-images.githubusercontent.com/77022076/115309880-bce44000-a121-11eb-8059-85156bc66895.png)
![image](https://user-images.githubusercontent.com/77022076/115309921-cc638900-a121-11eb-8ccb-153ff487bff4.png)
![image](https://user-images.githubusercontent.com/77022076/115309951-d6858780-a121-11eb-8ccb-108f8af0c448.png)

First I created a parent class called Media with all the properties and methods shared by the three types of media

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

And here we can see the code for the sub classes with an additional property "type" to display diferent input boxes or information depending on the media type. Also a new method for CDs was added to shuffle the songs randomly.

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

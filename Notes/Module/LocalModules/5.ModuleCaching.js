class Cricketer{
    constructor(name,roll) {
        this.name = name;
        this.role = roll;
    }
    setName(name) {
        this.name = name;
    }
    setRoll(roll) {
        this.roll = roll;
    }
    getName() {
        return this.name;
    }
    getRoll() {
        return this.roll;
    }
}
// module.exports = new Cricketer("KLRahul", 'Batter');// uncomment it and check how it works.
//it can be only one time loaded in the other if that file need it again
//that restores it or that caching(storing) only one time 
module.exports = Cricketer;
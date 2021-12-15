class student{
    constructor(fname, lname, age){
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
    }
    get_full_name() {
        return "name :"+this.firstname+" "+this.lastname;
    }
}

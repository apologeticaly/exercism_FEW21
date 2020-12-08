class Pangram {
    string:string
    constructor(string:string) {
        this.string = string
    }
    isPangram(): boolean {
        if (this.string == undefined){
            return false
        }
        let checker = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
        for (const i in checker) {
            if (!this.string.split('').includes(checker[i])){
                return false
            }
        }

        return true
    }
}

export default Pangram
class Transcriptor {
    toRna(DNA?: string) {
        if (DNA == undefined){
            return 'Invalid input DNA.'
        }
        let output = [];
        for (const i of DNA) {
            switch (i){
                case 'A':
                    output.push('U')
                    break
                case 'C':
                    output.push('G')
                    break
                case 'G':
                    output.push('C')
                    break
                case 'T':
                    output.push('A')
                    break
                default:
                    throw 'Invalid input DNA.'
            }
            
        }
        return output.join('')
    }
}

export default Transcriptor
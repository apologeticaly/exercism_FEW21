class SpaceAge {
    seconds:  number;
    keyvalue: number = 31557600;

    constructor(seconds: number){
        this.seconds = seconds
    }

    convertPlanets(translation: number): number {
        return Math.round(100 * (this.seconds / (translation * this.keyvalue))) / 100;
     }

    onEarth(): number {
        return this.convertPlanets(1);
     }
     onMercury(): number {
        return this.convertPlanets(0.2408467);
     }
     onVenus(): number {
        return this.convertPlanets(0.61519726);
     }
     onMars(): number {
        return this.convertPlanets(1.8808158);
     }
     onJupiter(): number {
        return this.convertPlanets(11.862615);
     }
     onSaturn(): number {
        return this.convertPlanets(29.447498);
     }
     onUranus(): number {
        return this.convertPlanets(84.016846);
     }
     onNeptune(): number {
        return this.convertPlanets(164.79132);
     }
}

export default SpaceAge
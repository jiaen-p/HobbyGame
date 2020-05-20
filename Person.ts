export class Person{
    private name: string
    private nationality: string
    private profession: string
    private experienceYears: number
    constructor(name: string, nationality: string, profession: "developer" | "tester" | "manager" | "director", experienceYears: number){
        this.name = name
        this.nationality = nationality
        this.profession = profession
        this.experienceYears = experienceYears
    }
    public samePerson(p:Person):boolean{
        return this.name === p.getName() && this.nationality === p.getNationality() && this.profession === p.getProfession() && this.experienceYears === p.getExperienceYears()
    }
    public print(){
        console.log(`
        Nombre: ${this.name}
        Nacionalidad: ${this.nationality}
        Profesion: ${this.profession}
        Años de experiencia: ${this.experienceYears}
        `)
    }
    public toString():string{
        let s:string = ''
        s = this.name + '\n' + this.nationality + '\n' + this.profession + '\n' + this.experienceYears + '\n'
        return s
    }
    public getName():string{
        return this.name
    }
    public setName(name:string){
        this.name = name
    }
    public getNationality():string{
        return this.nationality
    }
    public setNationality(nationality:string){
        this.nationality = nationality
    }
    public getProfession():string{
        return this.profession
    }
    public setProfession(profession:string){
        this.profession = profession
    }
    public getExperienceYears():number{
        return this.experienceYears
    }
    public setExperienceYears(experienceYears:number){
        this.experienceYears = experienceYears
    }
}
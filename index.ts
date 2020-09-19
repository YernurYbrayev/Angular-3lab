
abstract class EnglishTeams{
    TeamName: string;
    TeamYear: number;
    TeamLeague: string;
}

interface ISpainTeams{
    FTeamName: string;
    FTeamYear: number;
    FTeamLeague: string;
}
interface ISpainMethods{
    setFTeamName(FTeamName: string);
    setFTeamYear(FTeamYear: number);
    setFTeamLeague(FTeamLeague: string);
}

class EnglishFootballTeam extends EnglishTeams{
    public TeamName: string;
    public TeamYear: number;
    public TeamLeague: string;
    public TeamRating = Math.floor(Math.random() * 15);

    constructor(TeamName:string, TeamYear: number, TeamLeague: string) {
        super();
        this.TeamName = TeamName;
        this.TeamYear = TeamYear;
        this.TeamLeague = TeamLeague;
    }

    private setTeamName(TeamName:string):void{
        this.TeamName = TeamName;
    }
    private setTeamYear(TeamYear:number): void{
        this.TeamYear = TeamYear;
    }
    private setTeamLeague(TeamLeague: string): void{
        this.TeamLeague = TeamLeague;
    }
    private getTeamName():string{
        return "Team\'s name: " + this.TeamName;
    }
    private getTeamYear():number{
        return this.TeamYear;
    }
    private getTeamLeague():string{
        return "Team\'s league: " + this.TeamLeague;
    }
    toString() : string{
        return "Team[Name: " + this.TeamName + ", Year: " + this.TeamYear + ", League: " + this.TeamLeague + ", Rating: " + this.TeamRating + "]";
    }
}
class SpainTeams implements ISpainTeams, ISpainMethods{
    public FTeamName: string;
    public FTeamYear: number;
    public FTeamLeague: string;
    public FTeamRating = Math.floor(Math.random() * 15);

    constructor(FTeamName:string, FTeamYear: number, FTeamLeague: string) {
        this.FTeamName = FTeamName;
        this.FTeamYear = FTeamYear;
        this.FTeamLeague = FTeamLeague;
    }

    setFTeamName(FTeamName: string):void {
        this.FTeamName = FTeamName;
    }
    setFTeamYear(FTeamYear: number):void {
        this.FTeamYear = FTeamYear;
    }
    setFTeamLeague(FTeamLeague: string):void {
        this.FTeamLeague = FTeamLeague;
    }
    getFTeamName():string{
        return "Team\'s name: " + this.FTeamName;
    }
    private getFTeamYear():number{
        return this.FTeamYear;
    }
    private getFTeamLeague():string{
        return "Team\'s league: " + this.FTeamLeague;
    }
    toString() : string{
        return "Team[Name: " + this.FTeamName + ", Year: " + this.FTeamYear + ", League: " + this.FTeamLeague + ", Rating: " + this.FTeamRating + "]";
    }

}
class FriendlyMatch{
    private EnglishPoint = Chelsea.TeamRating;
    private SpainPoint = Barcelona.FTeamRating;

    constructor() {
    }
    public CompareTeams():string{
        if(this.EnglishPoint > this.SpainPoint){
            return "Winner is Barcelona!";
        }
        else if (this.EnglishPoint == this.SpainPoint){
            return "Draw! Winner is friendship!";
        }
        else{
            return "Winner is Chelsea!";
        }
    }



}
const Chelsea: EnglishFootballTeam  = new EnglishFootballTeam("Chelsea", 1834, "Premier League");
const Barcelona: SpainTeams = new SpainTeams("Barcelona", 1899, "LaLiga");
const FirstTournament: FriendlyMatch = new FriendlyMatch();
console.log(Chelsea.toString());
console.log(Barcelona.toString());
console.log(FirstTournament.CompareTeams());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EnglishTeams = /** @class */ (function () {
    function EnglishTeams() {
    }
    return EnglishTeams;
}());
var EnglishFootballTeam = /** @class */ (function (_super) {
    __extends(EnglishFootballTeam, _super);
    function EnglishFootballTeam(TeamName, TeamYear, TeamLeague) {
        var _this = _super.call(this) || this;
        _this.TeamRating = Math.floor(Math.random() * 15);
        _this.TeamName = TeamName;
        _this.TeamYear = TeamYear;
        _this.TeamLeague = TeamLeague;
        return _this;
    }
    EnglishFootballTeam.prototype.setTeamName = function (TeamName) {
        this.TeamName = TeamName;
    };
    EnglishFootballTeam.prototype.setTeamYear = function (TeamYear) {
        this.TeamYear = TeamYear;
    };
    EnglishFootballTeam.prototype.setTeamLeague = function (TeamLeague) {
        this.TeamLeague = TeamLeague;
    };
    EnglishFootballTeam.prototype.getTeamName = function () {
        return "Team\'s name: " + this.TeamName;
    };
    EnglishFootballTeam.prototype.getTeamYear = function () {
        return this.TeamYear;
    };
    EnglishFootballTeam.prototype.getTeamLeague = function () {
        return "Team\'s league: " + this.TeamLeague;
    };
    EnglishFootballTeam.prototype.toString = function () {
        return "Team[Name: " + this.TeamName + ", Year: " + this.TeamYear + ", League: " + this.TeamLeague + ", Rating: " + this.TeamRating + "]";
    };
    return EnglishFootballTeam;
}(EnglishTeams));
var SpainTeams = /** @class */ (function () {
    function SpainTeams(FTeamName, FTeamYear, FTeamLeague) {
        this.FTeamRating = Math.floor(Math.random() * 15);
        this.FTeamName = FTeamName;
        this.FTeamYear = FTeamYear;
        this.FTeamLeague = FTeamLeague;
    }
    SpainTeams.prototype.setFTeamName = function (FTeamName) {
        this.FTeamName = FTeamName;
    };
    SpainTeams.prototype.setFTeamYear = function (FTeamYear) {
        this.FTeamYear = FTeamYear;
    };
    SpainTeams.prototype.setFTeamLeague = function (FTeamLeague) {
        this.FTeamLeague = FTeamLeague;
    };
    SpainTeams.prototype.getFTeamName = function () {
        return "Team\'s name: " + this.FTeamName;
    };
    SpainTeams.prototype.getFTeamYear = function () {
        return this.FTeamYear;
    };
    SpainTeams.prototype.getFTeamLeague = function () {
        return "Team\'s league: " + this.FTeamLeague;
    };
    SpainTeams.prototype.toString = function () {
        return "Team[Name: " + this.FTeamName + ", Year: " + this.FTeamYear + ", League: " + this.FTeamLeague + ", Rating: " + this.FTeamRating + "]";
    };
    return SpainTeams;
}());
var FriendlyMatch = /** @class */ (function () {
    function FriendlyMatch() {
        this.EnglishPoint = Chelsea.TeamRating;
        this.SpainPoint = Barcelona.FTeamRating;
    }
    FriendlyMatch.prototype.CompareTeams = function () {
        if (this.EnglishPoint > this.SpainPoint) {
            return "Winner is Barcelona!";
        }
        else if (this.EnglishPoint == this.SpainPoint) {
            return "Draw! Winner is friendship!";
        }
        else {
            return "Winner is Chelsea!";
        }
    };
    return FriendlyMatch;
}());
var Chelsea = new EnglishFootballTeam("Chelsea", 1834, "Premier League");
var Barcelona = new SpainTeams("Barcelona", 1899, "LaLiga");
var FirstTournament = new FriendlyMatch();
console.log(Chelsea.toString());
console.log(Barcelona.toString());
console.log(FirstTournament.CompareTeams());

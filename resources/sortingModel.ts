
export class sortingModel {

    public nameOfAlgo : string; 
    public timeComplexity : string;
    public spaceComplexity : string;
    public desc : string;
    public linkToWiki : string;
    public linkToMyGit : string; 
    
    constructor(nameOfAlgo : string,
                timecomp : string, 
                spaceComplexity : string, 
                desc : string,
                linkToWiki : string,
                linkToMyGit : string ) {
            this.nameOfAlgo = nameOfAlgo;
            this.timeComplexity = timecomp;
            this.spaceComplexity = spaceComplexity;
            this.desc = desc;
            this.linkToWiki = linkToWiki;
            this.linkToMyGit = linkToWiki;
            this.linkToMyGit = linkToMyGit;
    }



}
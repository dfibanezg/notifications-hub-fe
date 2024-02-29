export interface ClaimSetting {
    id : number;
    description : string;
    parentId? : number;
    groupType : string;
    enable : boolean;
    isEditable? : boolean;
}
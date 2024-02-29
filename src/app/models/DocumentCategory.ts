export interface DocumentCategory {
    id?: number;
    CreatedBy?: number;
    UpdatedBy?: number;
    CreatedOn?: Date;
    UpdatedOn?: Date;
    Enable?: boolean;
    CustomerId?: number;
    Title: string;
    IsPrivate?: boolean;
    IsRequired?: boolean;
    IsRecomended?: boolean;
    IsEditable?: boolean;
}
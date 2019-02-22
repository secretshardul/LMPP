export type FormData = FileData | FieldData;

export interface FileData {
    type: string;
    filename: string;
    contentType: string;
    content: Buffer | string;
}

export type FieldData = string;

export interface MultipartFormData {
    [partName: string]: FormData
}
export interface MultipartFormData {
  [partName: string]: FormData;
}

export type FormData = FileData | FieldData;

export interface FileData {
  type: File;
  filename: string;
  contentType: string;
  content: Buffer | string;
}

export type FieldData = string;

export type File = "file";

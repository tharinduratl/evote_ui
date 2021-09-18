export interface PollingDistrictResponse{
    data: PollingDistrict[];
}

export interface PollingDistrict{
    docType: string;
    code: string;
    name: string;
}
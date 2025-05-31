export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {
  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    param?: string,
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
    token?: any;
  }

  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IModelPaginate<T> {
    meta: {
      current: number;
      pageSize: number;
      pages: number;
      total: number;
    },
    result: T[]
  }

  interface ILogin {
    user: {
      _id: string,
      email: string,
      name: string,
      role: string,
      phone: string,
    },
    access_token: string
  }


  export interface IPoint {
    sbd: string;
    toan: number;
    ngu_van: number;
    ngoai_ngu: number;
    vat_li: number | null;
    hoa_hoc: number | null;
    sinh_hoc: number | null;
    lich_su: number | null;
    dia_li: number | null;
    gdcd: number | null;
    ma_ngoai_ngu: string;
    tong_diem: number | null;
  }

  interface IStats {
    excellent: number | 0;
    good: number | 0;
    average: number | 0;
    poor: number | 0;
    total: number | 0;
  }



  export interface IListMeta<T> {
    data: T[];
    total: number;
    page: string;
    limit: string;
    totalPages: number;
  }
}

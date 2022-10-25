import { Token } from "./token.model";

export interface TokenData {
    refreshToken: {
        accessToken: Token;
        plainTextToken: string;
    };
    token: {
        accessToken: Token;
        plainTextToken: string;
    };
    role?:string;
}

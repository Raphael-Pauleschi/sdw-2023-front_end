import { IAccount } from "./account";
import { ICard } from "./card";
import { IFeatures } from "./features";
import { INews } from "./news";

export interface IUser{
    id: number,
    name: string,
    account: IAccount,
    card: ICard,
    features: IFeatures[],
    news: INews[],

}
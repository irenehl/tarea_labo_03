import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UserDto {
    @Expose()
    id: number;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    email: string;
}
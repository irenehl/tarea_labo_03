import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator'

export class UpdateUserDto {
    @IsString({ message: '$property debe ser una cadena de texto'})
    @IsOptional()
    readonly firstName?: string;

    @IsString({ message: '$property debe ser una cadena de texto'})
    @IsOptional()
    readonly lastName: string;

    @IsString({ message: '$property ser una cadena de texto' })
    @Length(8, 20, { message:
        '$property debe tener entre $constraint1 y $constraint2 caracteres',
    })
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'La contraseña debe tener al menos una letra minúscula y una mayúscula',
    })
    @IsOptional()
    readonly password: string;
}
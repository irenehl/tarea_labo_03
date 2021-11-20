import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator'

export class CreateUserDto {
    @IsString({ message: '$property debe ser una cadena de texto'})
    @IsNotEmpty({
        message: '$property no puede estar vacía',
      })
    readonly firstName: string;

    @IsString({ message: '$property debe ser una cadena de texto'})
    @IsNotEmpty({
        message: '$property no puede estar vacía',
      })
    readonly lastName: string;

    @IsEmail({}, { message: '$property debe ser un email válido' })
    @IsNotEmpty({
        message: '$property no puede estar vacía',
      })
    readonly email: string;

    @IsString({ message: '$property ser una cadena de texto' })
    @Length(8, 20, { message:
        '$property debe tener entre $constraint1 y $constraint2 caracteres',
    })
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'La contraseña debe tener al menos una letra minúscula y una mayúscula',
    })
    @IsNotEmpty({
      message: '$property no puede estar vacía',
    })
    readonly password: string;
}
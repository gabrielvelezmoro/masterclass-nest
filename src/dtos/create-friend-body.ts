import { IsNotEmpty, Length } from 'class-validator';

export class CreateFriendBody {
  @IsNotEmpty({ message: 'Nome obrigatório.' })
  @Length(5, 100, {
    message: 'Deve conter mais de 5 e menos de 100 caracteres',
  })
  name: string;

  @IsNotEmpty({ message: 'Função obrigatória.' })
  function: string;
}

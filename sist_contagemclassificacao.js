const numdealunos = 14;

for (let index = 0; index <= numdealunos; index++) 
{
    if (index == 0) {
        console.log("número de alunos é zero");
    }
    else if (index % 2 == 0) {
        console.log(' número de alunos é par:' + ' ' + index);
    }
    else {
        console.log('o número de alunos é ímpar:' + ' ' + index);
    }
}



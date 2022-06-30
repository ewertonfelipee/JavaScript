let pessoa = {
    firstName : "Ewerton",
    lastName : "Felipe",
    idade : 24,
    falar : function(){
        print("ola");
    },
    soma : function(a, b){
        return a + b;
    },

    fullName : function(){
        return this.firstName + " " + this.lastName
    },
    age : function(){
        this.idade +=1;
    },

    greeting : function(){
        return "Mister " + this.firstName + " " + this.lastName
    }
};

print(pessoa.firstName);
pessoa.falar();

let soma = pessoa.soma(2,3);
print(soma);

print(pessoa["idade"]);

let fullName = pessoa.fullName();
print(fullName);

pessoa.age();
print(pessoa.idade);

print("Ola " + pessoa.greeting( ));
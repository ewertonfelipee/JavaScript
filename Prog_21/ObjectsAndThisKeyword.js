let pessoa = {
    firstName : "ewerton",
    lastName : "Felipe",
    idade : 24,
    falar : function(){
        print("ola");
    },
    soma : function(a, b){
        return a + b;
    },

    fullName : function(firstName, lastName){
        return this.firstName + " " + this.lastName
    }
};

print(pessoa.firstName);
pessoa.falar();

let soma = pessoa.soma(2,3);
print(soma);

print(pessoa["idade"]);

let fullName = pessoa.fullName();
print(fullName);
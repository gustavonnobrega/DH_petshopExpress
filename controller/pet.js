const petModel = require('../model/pet');


const petController = {

    index: (req, res) => {
        res.send("<h2>Petshop DH em Express</h2></br>" + petModel.listarPets());  
    },

    add: (req, res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send("<h2>Adicionar Pet ao Petshop DH</h2></br>" + 
        "<h6>" + `Pet ${novoPet.nome} adicionado com sucesso!` + "</h6>");
    },
    
    buscar: (req, res) => {
        let thisPet = req.params;
        let foundPets = petModel.buscarPet(thisPet.nome);

        if (foundPets.length > 0) {
            res.send("<h2>Buscar Pet em Petshop DH</h2></br>" + 
            foundPets.map((pet) => { return pet.nome; }));
        } else {
            res.send("<h2>Buscar Pet em Petshop DH</h2></br>" + 
            "<h6>Nenhum Pet com o nome " + `${thisPet.nome} ` + " encontrado...</h6>");
        }
        
        console.log(essePet.nome);
        console.log(petModel.buscarPet(essePet.nome));

        
    },


};

module.exports = petController;
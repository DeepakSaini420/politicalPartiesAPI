const PartySchema = require('../database/party.schema');

let Id;

async function checkLength(){
    const arr = await getAllParties();
    if(arr.length===0){
        console.log(arr.length);
        Id = 0; 
    }else{
        Id = +arr[arr.length-1].partyId;
    }
}


async function addParty(party){
    await checkLength();
    Id += 1;
    console.log(party)
    await PartySchema.insertMany({
        partyId:Id,
        partyName:party.partyName,
        partyShortName:party.partyShortName,
        partyPoster:party.partyPoster
    })
}

async function getAllParties(){
    return await PartySchema.find({});
}

async function getParty(partyId){
    let array = await getAllParties();
    let party= array.filter((party)=>{
        if(Number(party.partyId)===partyId){
            return party;
        }
    })
    return party
}

async function deleteParty(id){
    await PartySchema.deleteOne({ partyId:id })
}


module.exports={
    addParty,
    getAllParties,
    getParty,
    deleteParty
}

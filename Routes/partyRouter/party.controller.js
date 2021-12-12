const {
    getAllParties,
    addParty,
    getParty,
    deleteParty
}= require('../../Models/party.model')

async function httpAddParty(req,res){
    const party = req.body;
    if(!party.partyName || !party.partyShortName || !party.partyPoster){
        return res.status(404).json({
            error:"Please Enter All Fileds"
        })
    }else{
        console.log(party.partyShortName)
        await addParty(party);

        return res.status(201).json({
            message:"Succesfull added"
        })
    }
}

async function httpGetAllParties(req,res){
    return res.status('200').json(await getAllParties())
}

async function httpGetParty(req,res){
    const partyShort = +req.params.id;
    if(!partyShort){
        return res.json(400).json({
            message:"Url Parameter is not present"
        })
    }else{
        const party =await getParty(partyShort);
        if(party.length === 0){
            return res.status(400).json({
                message:"Your Party Doesn't Found"
            })
        }
        return res.status(200).json(party);
    }
}

async function httpDeleteParty(req,res){
    await deleteParty(req.body.partyId);
    res.status(200).json({
        message:"succesfull"
    })
}

module.exports= {
    httpAddParty,
    httpGetAllParties,
    httpGetParty,
    httpDeleteParty
}
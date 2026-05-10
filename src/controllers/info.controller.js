const {StatusCodes, INTERNAL_SERVER_ERROR } = require('http-status-codes');

const info =  (req,res) => {
    return res.status(StatusCodes.OK).json({
        succuess:true,
        msg:"This is info page",
        error:{},
        data:{}
    })
}
module.exports = {
    info
};


exports.test= (req, res)=>{
    res.status('200').json({
        message : 'test controller'
    })
}

exports.test2= (req, res)=>{
    res.status('200').json({
        message : 'test controller recheck'
    })
}
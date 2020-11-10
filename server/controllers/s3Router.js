let express = require('express')
let router = express.Router();
const aws = require('aws-sdk');
const Listings = require('../model/Listings')
require('dotenv').config();


// const s3 = require('../services/s3.config')

    // const s3Client= s3.s3Client;
    // const params = s3.downloadParams;

    // params.Key = req.params.filename;

    // res.send(params)


    // s3Client.getObject(params)
    //     .createReadStream()
    //         .on('error', function(err){
    //             res.status(500).json({error:"Error => " + err})
    //         }).pipe(res)
    


// router.get('/', async (req,res) => {

//     try{
//         aws.config.setPromisesDependency(); //use so you can promisify to get the actual images
//         aws.config.update({
//             accessKeyId: process.env.ACCESSKEYID,
//             secretAccessKey: process.env.SECRETACCESSKEY,
//             region: 'us-east-1'
//         });

//         const s3 = new aws.S3();
//          const list = await s3.listObjectsV2({
//             Bucket: 'rustic-bnb-images'
//         }).promise()

//         res.send(list)

//     } catch(e) {
//         console.log('our error is',e)
//     }
    

            
// })

router.get('/', async(req,res) => {
    aws.config.update({
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRETACCESSKEY,
        region: 'us-east-1'
    });

    let s3 = new aws.S3();

    const list = await s3.listObjectsV2({
        Bucket: 'rustic-bnb'
    }).promise()

    const length = list.Contents.length


        let params;
        let promise;
        let result = [];
        //for (hah) some reason, for loops shouldn't work inside of async funct.
        //or more like loops with callback functions shouldn't work map, filter reduce, etc.
        async function getImage(){
             for  (let i = 1; i <= length; i++){
            params = {Bucket: 'rustic-bnb', Key: `${i}.jpg`, Expires:500000};
            promise = await s3.getSignedUrlPromise('getObject', params);
            result.push(promise)
            }
            async function updateMongo(){
                let result2 = [...result]
                for (let j = 0; j<=9; j++){
                        let insertIMG = result2.splice(0,5)
                        
                        let x = await Listings.findOneAndUpdate({id:j}, {images:insertIMG})
                        
                }
            }
            updateMongo()
            
            res.send(result)
        }
        
        getImage();
        
    
})

module.exports = router;
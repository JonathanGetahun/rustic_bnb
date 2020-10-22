const aws = require('aws-sdk');
require('dotenv').config();

(async function(){
    try{
        aws.config.setPromisesDependency() //use so you can promisify to get the actual images
        aws.config.update({
            accessKeyId: process.env.ACCESSKEYID,
            secretAccessKey: process.env.SECRETACCESSKEY,
            region: 'us-east-1'
        });

        const s3 = new aws.S3();
        const response = await s3.listObjectsV2({
            Bucket: 'rustic-bnb-images'
        }).promise()

        console.log(response)

    } catch(e) {
        console.log('our error is',e)
    }
    
});

module.exports = s3;
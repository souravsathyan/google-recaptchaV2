const { log } = require("debug/src/node");

module.exports={
    getLogin:(req,res)=>{
        
        res.render('user/userLogin',{
            title:'Its Login',
        })
    },
    postLogin: async (req,res)=>{
        console.log(req.body);
        if (
            req.body.captcha === undefined ||
            req.body.captcha === '' ||
            req.body.captcha === null
        ){
            return res.json({
                "success" : false,
                "msg":'Please select captcha'
            })
        }

        const secretKey = '6LeGsrQlAAAAAOTUJp7eoa0bd0V4OAJCLZhsR3Lz'

          const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

          const body = await fetch(verifyURL).then(res => res.json());

          if(
            body.success !== undefined && 
            !body.success
          ){
            return res.json({
                success:false,
                msg:'failed captcha verification'
            })
          }
          return res.json({ success: true, msg: 'Captcha passed' });

        
    }
}
